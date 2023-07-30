import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ADD_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import {
  BoardDetailPostReactQuill,
  BoardDetailPostFormCol,
  BoardDetailPostSelect,
  BoardDetailPostButton,
} from "../../styles/BoardDetailPostFormStyle";

const CustomQuillWrapper = styled(Form.Item)`
  .ql-container {
    border-color: ${(props) =>
      props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important"};
    border-radius: 0 0 10px 10px;
  }

  .ql-toolbar {
    border-color: ${(props) =>
      props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important"};
    border-radius: 10px 10px 0 0;
  }
  .ql-container::placeholder {
    color: #c2c2c2;
    font-weight: 700;
  }
  .ql-container:focus::placeholder {
    color: #a8a8fe;
  }
`;

const { TextArea } = Input;

const BoardPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addPostLoading } = useSelector((state) => state.post);
  const [form] = Form.useForm();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [content, setContent] = useState("");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const [options, setOptions] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false); // 추가: 폼이 채워져 있는지 여부를 나타내는 상태

  useEffect(() => {
    // 새로고침 시 로컬 스토리지에서 로그인 정보 가져오기
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  const boardPost = useCallback(
    (values) => {
      const schoolId = values.category === "10" ? 0 : me?.schoolId;
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          title: values.title,
          content: content,
          category: values.category,
          schoolId: schoolId,
        },
      });
      navigateToHomeBoard(values.category);
    },
    [dispatch, me, content]
  );

  const navigateToHomeBoard = useCallback(
    (category) => {
      navigate(`/schoolboard/${category}`);
    },
    [navigate]
  );

  const onFinish = (values) => {
    boardPost(values);
  };

  const handleChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    if (me?.tag) {
      const newOptions = [
        { value: 0, label: "자유게시판" },
        { value: 1, label: "질문게시판" },
        { value: 2, label: "프로젝트 모집" },
        { value: 10, label: "잼미니티" },
        ...me.tag.map((tag) => ({ value: tag.tagCode, label: tag.tagName })),
      ];
      setOptions(newOptions);
    }
  }, [me]);

  return (
    <Row gutter={[16, 16]} justify="center">
      <BoardDetailPostFormCol xs={24} md={15}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="category">
            <BoardDetailPostSelect
              placeholder="게시판 종류"
              options={options}
            />
          </Form.Item>
          <Form.Item name="title">
            <Input className="custom-input" placeholder="제목을 입력해주세요" />
          </Form.Item>
          <CustomQuillWrapper isFocused={isEditorFocused} name="content">
            <BoardDetailPostReactQuill
              placeholder="글의 내용을 입력해주세요 &#13;&#10;주제에 맞지 않는 글이나 커뮤니티 이용정책에 위배되어 일정 수
                이상 신고를 받는 경우 글이 블라인드 처리될 수 있습니다."
              value={content}
              onChange={handleChange}
              theme="snow"
              onFocus={() => setIsEditorFocused(true)}
              onBlur={() => setIsEditorFocused(false)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  [{ direction: "rtl" }],
                  [{ color: [] }, { background: [] }],
                  [{ align: [] }],
                  ["clean"],
                ],
                clipboard: {
                  // toggle to add extra line breaks when pasting HTML:
                  matchVisual: false,
                },
              }}
            />
          </CustomQuillWrapper>
          <Form.Item>
            <BoardDetailPostButton
              type="primary"
              htmlType="submit"
              loading={addPostLoading}
            >
              완료 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
        </Form>
      </BoardDetailPostFormCol>
    </Row>
  );
};

export default BoardPostForm;
