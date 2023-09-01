import React, { useEffect, useState } from "react";
import { Form, Input, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { UPDATE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../pages/Board/BoardMain";
import styled from "styled-components";
import {
  BoardDetailUpdateReactQuill,
  BoardDetailUpdateCol,
  BoardDetailUpdateSelect,
  CancelUpdateBoardDetalilButton,
  UpdateBoardDetailButton,
} from "../../styles/BoardDetailUpdateStyle";

const CustomQuillWrapper = styled(Form.Item)`
  .ql-container {
    border-color: ${(props) => (props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important")};
    border-radius: 0 0 10px 10px;
  }

  .ql-toolbar {
    border-color: ${(props) => (props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important")};
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

const BoardDetailUptadeForm = () => {
  const { schoolBoardPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const navigator = useNavigate();
  const [title, setTitle] = useState(schoolBoardPost?.board.title);
  const [content, setContent] = useState(schoolBoardPost?.board.content.replace(/<[^>]*>?/g, ""));
  const [category, setCategory] = useState(schoolBoardPost?.board.category);
  console.log(title);
  console.log(content);
  console.log(category);
  useEffect(() => {
    // 새로고침 시 로컬 스토리지에서 로그인 정보 가져오기
    if (accessToken) {
    } else {
      navigate(-1);
    }
  }, [navigate, accessToken]);
  const { postId } = useParams();

  const onFinish = (values) => {
    dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        title: values.title,
        content: values.content,
        category: values.category,
        id: postId,
      },
    });
    console.log(category);
    window.location.replace(`/schoolboard/${category}`);
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const [options, setOptions] = useState();
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
      <BoardDetailUpdateCol xs={24} md={15}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="category">
            <BoardDetailUpdateSelect
              placeholder={changeCategory(schoolBoardPost?.board.category)}
              onChange={(e) => {
                setCategory(e);
              }}
              value={category}
              options={options}
            />
          </Form.Item>
          <Form.Item name="title">
            <Input
              className="custom-input"
              placeholder={`${schoolBoardPost?.board.title}`}
              value={title}
            />
          </Form.Item>
          <CustomQuillWrapper isFocused={isEditorFocused} name="content">
            <BoardDetailUpdateReactQuill
              placeholder={content}
              value={content}
              onChange={handleChange}
              theme="snow"
              onFocus={() => setIsEditorFocused(true)}
              onBlur={() => setIsEditorFocused(false)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
            <CancelUpdateBoardDetalilButton
              onClick={() => {
                // navigator(`/schoolboard/${values.category}`) // 카테고리로 돌아갈려면
                navigator(-1);
              }}
            >
              취소
            </CancelUpdateBoardDetalilButton>
            <UpdateBoardDetailButton type="primary" htmlType="submit">
              수정하기 <EditOutlined />
            </UpdateBoardDetailButton>
          </Form.Item>
        </Form>
      </BoardDetailUpdateCol>
    </Row>
  );
};

export default BoardDetailUptadeForm;
