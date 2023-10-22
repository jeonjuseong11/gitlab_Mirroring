import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Row, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ADD_POST_REQUEST } from "../../constants/actionTypes"; // Redux Saga 액션 타입 추가
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

const FeedbackPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addPostLoading, addPostError, imagePaths, schoolBoardPost } = useSelector(
    (state) => state.post
  ); // Redux Saga 상태 추가
  const [form] = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [content, setContent] = useState("");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const [options, setOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 표시 여부

  useEffect(() => {
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  // 모달 닫기 핸들러
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
          // 게시글 작성 후 상세 페이지로 이동
          navigate(`/schoolboard/${values.category}/${postId}`);

          // 게시글 작성 후 schoolBoardPost 상태를 초기화 (또는 null로 설정)
          // dispatch({ type: "INITIALIZE_SCHOOL_BOARD_POST" });
        },
        errorCallback: () => {
          // 게시글 작성 실패 시 모달 표시
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
    console.log(schoolBoardPost);
    if (schoolBoardPost) {
      navigate(`/schoolboard/${schoolBoardPost.board.category}/${schoolBoardPost.board.id}`);
    }
  }, [schoolBoardPost]);
  useEffect(() => {
    const newOptions = [
      { value: 0, label: "문의" },
      { value: 1, label: "사용자 의견" },
    ];
    setOptions(newOptions);
  }, [me]);

  return (
    <Row gutter={[16, 16]} justify="center">
      <BoardDetailPostFormCol xs={24} md={15}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="category" rules={[{ required: true, message: "내용을 입력해주세요" }]}>
            <BoardDetailPostSelect placeholder="문의 종류" options={options} />
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
              placeholder="문의 내용을 입력해주세요"
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
          <Form.Item>
            <BoardDetailPostButton type="primary" htmlType="submit" loading={addPostLoading}>
              완료 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
        </Form>
      </BoardDetailPostFormCol>
      {addPostError && (
        <Modal
          title="문의 작성 실패"
          open={isModalVisible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          footer={[
            <BoardDetailPostButton key="close" onClick={handleModalClose}>
              닫기
            </BoardDetailPostButton>,
          ]}
        >
          문의 작성에 실패했습니다. 다시 시도해주세요.
        </Modal>
      )}
    </Row>
  );
};

export default FeedbackPostForm;
