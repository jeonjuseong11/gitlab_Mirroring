import { Button, Col, Form, Input, Row } from "antd";
import React, { useCallback, useEffect } from "react";
import BoardMenu from "../../components/Board/BoardMenu";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST, LOAD_POST_COMMENTS_REQUEST } from "../../constants/actionTypes";
import moment from "moment";
import { useParams } from "react-router-dom";

const SchoolBoardDetail = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const { postId } = useParams();
  const loadPostComments = () => {
    dispatch({
      type: LOAD_POST_COMMENTS_REQUEST,
      data: {
        boardId: postId,
      },
    });
  };

  const handleSubmit = (values) => {
    if (!values) {
      alert("빈칸이 있습니다.");
      return;
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: values,
    });
  };
  useEffect(() => {
    loadPostComments();
  }, []);
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={14}>
          <BoardMenu />
        </Col>
      </Row>
      글 상세 페이지
      <Row gutter={[16, 16]} justify="center">
        <Form onFinish={handleSubmit}>
          <Form.Item name="coment">
            <Input />
            <Button htmlType="submit" />
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};
export default SchoolBoardDetail;
