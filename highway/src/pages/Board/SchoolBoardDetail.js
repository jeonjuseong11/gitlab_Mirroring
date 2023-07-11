import React, { useEffect, useState } from "react";
import { Col, Breadcrumb, Row, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_POST_COMMENTS_REQUEST,
  LOAD_POST_REQUEST,
  REMOVE_POST_REQUEST,
} from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import ToggleComment from "../../components/schoolBoardDetail/ToggleComment";
import { changeCategory, formatDate } from "./BoardMain";

const SchoolBoardDetail = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { schoolBoardPost } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const { postId, category } = useParams();
  const loadPostComments = () => {
    dispatch({
      type: LOAD_POST_COMMENTS_REQUEST,
      data: {
        boardId: postId,
      },
    });
  };

  const removePost = () => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: {
        id: schoolBoardPost?.board?.id,
      },
    });
  };
  const loadPost = (postId) => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: postId,
    });
  };

  useEffect(() => {
    loadPost(postId);
    loadPostComments();
  }, [postId, category]);

  return (
    <>
      <Col xs={23} md={11} style={{ textAlign: "left" }}>
        <Breadcrumb
          items={[
            {
              title: (
                <>
                  <a href={`/schoolboard/${category}`}>{changeCategory(category)}</a>
                </>
              ),
            },
          ]}
        />
        <div>
          <h2>{schoolBoardPost?.board?.title}</h2>
          <p>작성자: {schoolBoardPost?.board?.userId}</p>
          <p>{formatDate(schoolBoardPost?.board?.createDate)}</p>
          <div
            style={{ height: "20rem" }}
            dangerouslySetInnerHTML={{ __html: schoolBoardPost?.board?.content }}
          />
          <a href={`/schoolboard/${category}`}>
            <Button
              danger
              style={{ float: "right" }}
              onClick={() => {
                removePost();
              }}
            >
              삭제
            </Button>
          </a>
          <Button
            style={{ float: "right", marginRight: "1rem" }}
            onClick={() => {
              navigator(`/schoolboard/${schoolBoardPost?.board.id}/update`);
            }}
          >
            수정
          </Button>
        </div>
      </Col>
      <ToggleComment loadPostComments={loadPostComments} />
    </>
  );
};

export default SchoolBoardDetail;
