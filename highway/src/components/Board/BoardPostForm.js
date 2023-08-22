import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Select, Upload, Modal } from "antd";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
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
  CustomQuillWrapper,
} from "../../styles/BoardDetailPostFormStyle";

const BoardPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addPostLoading } = useSelector((state) => state.post);
  const [form] = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [content, setContent] = useState("");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const [options, setOptions] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // 추가: 모달 표시 여부 상태

  const handleFileChange = ({ file, fileList }) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (fileList.length <= 8 && allowedTypes.includes(file.type)) {
      setFileList(fileList.map((fileItem) => fileItem.originFileObj)); // 실제 파일 추출
    } else {
      setModalVisible(true); // 허용되지 않는 파일 유형
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false); // 모달 닫기
  };
  useEffect(() => {
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  const boardPost = useCallback(
    (values) => {
      const schoolId = values.category === "10" ? 0 : me?.schoolId;
      console.log(values);
      const formData = new FormData();
      formData.append("category", values.category);
      formData.append("title", values.title);
      formData.append("content", content);
      fileList.forEach((file, index) => {
        formData.append("images", file);
      });
      console.log("Form Data to Send:", formData);

      // dispatch({
      //   type: ADD_POST_REQUEST,
      //   data: {
      //     title: values.title,
      //     content: content,
      //     category: values.category,
      //     schoolId: schoolId,
      //   },
      // });
      // navigate(values.category);
    },
    [dispatch, me, content]
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
            <BoardDetailPostSelect placeholder="게시판 종류" options={options} />
          </Form.Item>
          <Form.Item name="title">
            <Input className="custom-input" placeholder="제목을 입력해주세요" />
          </Form.Item>
          <Form.Item>
            <CustomQuillWrapper isFocused={isEditorFocused} name="content">
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
                    ["link", "video"], //image 추가하면 나중에 글이랑 이미지를 섞어서 보여줄때 쓰면될듯
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
          </Form.Item>
          <Form.Item name="images">
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              listType="picture-card"
              showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
            >
              {fileList.length >= 8 ? null : (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
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
            <p>이미지 파일만 올릴수 있습니다</p>
          </Modal>
        </Form>
      </BoardDetailPostFormCol>
    </Row>
  );
};

export default BoardPostForm;
