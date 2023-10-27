import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Row, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ADD_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import {
  BoardDetailPostReactQuill,
  BoardDetailPostFormCol,
  BoardDetailPostSelect,
  BoardDetailPostButton,
  CustomQuillWrapper,
} from "../../styles/BoardDetailPostFormStyle";
import ImageUpload from "../ImageUpload";

const BoardPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addPostLoading, addPostError, imagePaths, schoolBoardPost } = useSelector(
    (state) => state.post
  );
  const [form] = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [content, setContent] = useState("");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const [options, setOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

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
          imageList: imagePaths.map((i) => i.imageUrl[0]),
        },
        callback: (postId) => {
          navigate(`/schoolboard/${values.category}/${postId}`);
        },
        errorCallback: () => {
          setIsModalVisible(true);
        },
      });
    },
    [me?.schoolId, content, imagePaths, dispatch, navigate]
  );

  const onFinish = (values) => {
    boardPost(values);
  };

  const handleChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    if (schoolBoardPost) {
      navigate(`/schoolboard/${schoolBoardPost.board.category}/${schoolBoardPost.board.id}`);
    }
  }, [schoolBoardPost]);

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
          <Form.Item name="category" rules={[{ required: true, message: "내용을 입력해주세요" }]}>
            <BoardDetailPostSelect placeholder="게시판 종류" options={options} />
          </Form.Item>
          <Form.Item name="title" rules={[{ required: true, message: "내용을 입력해주세요" }]}>
            <Input className="custom-input" placeholder="제목을 입력해주세요" />
          </Form.Item>
          <CustomQuillWrapper
            isFocused={isEditorFocused}
            name="content"
            rules={[{ required: true, message: "내용을 입력해주세요" }]}
          >
            <BoardDetailPostReactQuill
              placeholder="글의 내용을 입력해주세요"
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
                  ["link", "video", "image"],
                  [{ direction: "rtl" }],
                  [{ color: [] }, { background: [] }],
                  [{ align: [] }],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
            />
          </CustomQuillWrapper>
          <Form.Item name="imageList" style={{ marginBottom: "12px" }}>
            <ImageUpload />
          </Form.Item>
          <Form.Item>
            <BoardDetailPostButton type="primary" htmlType="submit" loading={addPostLoading}>
              완료 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
        </Form>
      </BoardDetailPostFormCol>
      {addPostError && (
        <Modal
          title="게시글 작성 실패"
          open={isModalVisible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          footer={[
            <BoardDetailPostButton key="close" onClick={handleModalClose}>
              닫기
            </BoardDetailPostButton>,
          ]}
        >
          게시글 작성에 실패했습니다. 다시 시도해주세요.
        </Modal>
      )}
    </Row>
  );
};

export default BoardPostForm;
