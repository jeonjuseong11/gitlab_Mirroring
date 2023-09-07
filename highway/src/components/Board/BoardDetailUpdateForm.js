import React, { useEffect, useState } from "react";
import { Form, Input, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { LOAD_POST_REQUEST, UPDATE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  BoardDetailUpdateReactQuill,
  BoardDetailUpdateCol,
} from "../../styles/BoardDetailUpdateStyle";
import ImageUpload from "../ImageUpload"; // ImageUpload 컴포넌트를 가져옵니다.
import {
  BoardDetailPostButton,
  BoardDetailPostReactQuill,
  BoardDetailPostSelect,
} from "../../styles/BoardDetailPostFormStyle";

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

const BoardDetailUpdateForm = () => {
  const { schoolBoardPost, imagePaths, updatePostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { me } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const navigator = useNavigate();

  const { postId } = useParams();

  // 컴포넌트가 마운트될 때 게시물 데이터를 불러옵니다.
  useEffect(() => {
    if (postId) {
      dispatch({
        type: LOAD_POST_REQUEST,
        data: postId,
      });
    }
  }, [dispatch, postId]);
  useEffect(() => {
    if (schoolBoardPost) {
      const updatedInitialValues = {
        category: schoolBoardPost.board.category,
        title: schoolBoardPost.board.title,
        content: schoolBoardPost.board.content.replace(/<[^>]*>?/g, ""),
        imageList: imagePaths
          .map((item) => {
            if (typeof item === "string") {
              // 이미지 주소인 경우 그대로 반환
              return item;
            } else if (item.imageUrl && item.imageUrl.length > 0) {
              // 이미지 주소가 배열로 제공될 경우 첫 번째 이미지 주소 반환
              return item.imageUrl[0];
            }
            return null;
          })
          .filter(Boolean),
      };
      form.setFieldsValue(updatedInitialValues);
    }
  }, [schoolBoardPost, form, imagePaths]);
  // 인증되지 않은 경우 리디렉션합니다.
  useEffect(() => {
    if (!accessToken) {
      navigate(-1);
    }
  }, [navigate, accessToken]);

  // 게시물 데이터를 기반으로 폼 필드의 초기값을 설정합니다.
  const initialValues = {
    category: schoolBoardPost?.board.category,
    title: schoolBoardPost?.board.title,
    content: schoolBoardPost?.board.content.replace(/<[^>]*>?/g, ""),
    imageList: imagePaths
      .map((item) => {
        if (typeof item === "string") {
          // 이미지 주소인 경우 그대로 반환
          return item;
        } else if (item.imageUrl && item.imageUrl.length > 0) {
          // 이미지 주소가 배열로 제공될 경우 첫 번째 이미지 주소 반환
          return item.imageUrl[0];
        }
        return null;
      })
      .filter(Boolean),
  };

  // 폼 제출을 처리합니다.
  const onFinish = (values) => {
    // console.log(`title:${values.title}
    //   content:${values.content},
    //   category: ${values.category},
    //   id: ${postId},
    //   imageList: ${values.imageList}`);
    dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        title: values.title,
        content: values.content,
        category: values.category,
        id: postId,
        imageList: values.imageList, // 여기에 업데이트된 이미지 목록을 포함합니다.
      },
    });
  };
  useEffect(() => {
    if (updatePostDone) {
      // Navigate when updatePostDone becomes true
      navigate(`/schoolboard/${initialValues.category}/${postId}`);
    }
  }, [updatePostDone, navigate, initialValues.category, postId]);
  const [options, setOptions] = useState([]);

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
        <Form form={form} onFinish={onFinish} initialValues={initialValues}>
          <Form.Item name="category">
            <BoardDetailPostSelect value={initialValues.category} options={options} />
          </Form.Item>
          <Form.Item name="title">
            <Input className="custom-input" />
          </Form.Item>
          <CustomQuillWrapper isFocused={isEditorFocused} name="content">
            <BoardDetailPostReactQuill
              theme="snow"
              onFocus={() => setIsEditorFocused(true)}
              onBlur={() => setIsEditorFocused(false)}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                  ["link", "video"], // 이미지를 툴바에 포함합니다.
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
            <ImageUpload imageList={initialValues.imageList} />
          </Form.Item>
          <Form.Item>
            <BoardDetailPostButton
              onClick={() => {
                navigate(`/schoolboard/${initialValues.category}/${postId}`);
              }}
            >
              취소
            </BoardDetailPostButton>
            <BoardDetailPostButton type="primary" htmlType="submit">
              수정하기 <EditOutlined />
            </BoardDetailPostButton>
          </Form.Item>
        </Form>
      </BoardDetailUpdateCol>
    </Row>
  );
};

export default BoardDetailUpdateForm;
