import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Row, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import {
  ADD_POST_REQUEST,
  POST_FEEDBACK_REQUEST,
} from "../../constants/actionTypes"; // Redux Saga 액션 타입 추가
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
import axios from "axios";

const FeedbackPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { feedbackPostLoading, feedbackPostError } = useSelector(
    (state) => state.feedback
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

  const onFinish = (values) => {
    dispatch({
      type: POST_FEEDBACK_REQUEST,
      data: {
        title: values.title,
        content: content,
        category: values.category,
      },
    }).then(navigate(`/feedback`));
  };

  const handleChange = (value) => {
    setContent(value);
  };

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
          <Form.Item
            name="category"
            rules={[{ required: true, message: "내용을 입력해주세요" }]}
          >
            <BoardDetailPostSelect placeholder="문의 종류" options={options} />
          </Form.Item>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "내용을 입력해주세요" }]}
          >
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
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
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
            <BoardDetailPostButton
              type="primary"
              htmlType="submit"
              loading={feedbackPostLoading}
            >
              완료 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
        </Form>
      </BoardDetailPostFormCol>
      {feedbackPostError && (
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
