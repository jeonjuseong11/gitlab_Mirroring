import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Select, Upload, Modal } from "antd";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from "../../constants/actionTypes"; // Redux Saga 액션 타입 추가
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import {
  BoardDetailPostReactQuill,
  BoardDetailPostFormCol,
  BoardDetailPostSelect,
  BoardDetailPostButton,
  CustomQuillWrapper,
} from "../../styles/BoardDetailPostFormStyle";
import axios from "axios";
import ImageUpload from "../ImageUpload";

const BoardPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addPostLoading, imagePaths } = useSelector((state) => state.post); // Redux Saga 상태 추가
  const [form] = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [content, setContent] = useState("");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const [options, setOptions] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  const boardPost = useCallback(
    (values) => {
      const schoolId = values.category === "10" ? 0 : me?.schoolId;
      // 나머지 코드는 주석 처리하거나 제거합니다.
      console.log(`title: ${values.title}
        content: ${content},
        category: ${values.category},
        schoolId: ${schoolId},
        imageList: ${imagePaths}`);
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          title: values.title,
          content: content,
          category: values.category,
          schoolId: schoolId,
          imageList: imagePaths,
        },
      });
      navigate(`/schoolboard/${values.category}`);
    },
    [dispatch, me, content, imagePaths]
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
          <Form.Item name="imageList">
            <ImageUpload onChange={(file) => setFileList([file])} />
          </Form.Item>
          <Form.Item>
            <BoardDetailPostButton type="primary" htmlType="submit" loading={addPostLoading}>
              완료 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
          <Modal
            visible={modalVisible}
            onCancel={handleCloseModal}
            onOk={handleCloseModal}
            centered
          >
            <p>이미지 파일만 올릴 수 있습니다</p>
          </Modal>
        </Form>
      </BoardDetailPostFormCol>
    </Row>
  );
};

export default BoardPostForm;
