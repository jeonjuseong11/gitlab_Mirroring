import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { needLogin } from "../../utils/Message";
import {
  LOAD_POST_COMMENTS_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";

const CommnetForm = ({ item }) => {
  const { me } = useSelector((state) => state.user);
  const [commentNum, setCommentNum] = useState(false);
  const [parentId, setParentId] = useState(false);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigator = useNavigate();

  const linkLogin = () => {
    navigator("/login");
  };

  const loadPostComments = () => {
    dispatch({
      type: LOAD_POST_COMMENTS_REQUEST,
      data: {
        boardId: postId,
      },
    });
  };

  const removePostComment = (item) => {
    console.log("RemovePostCommnet");
    dispatch({
      type: REMOVE_POST_COMMENT_REQUEST,
      data: {
        id: item.id,
      },
    });
    loadPostComments();
  };
  return (
    <ul style={{ listStyle: "none" }}>
      {parentId !== item.id ? (
        <ul
          style={{
            listStyle: "none",
            color: "#a2a2a2",
            fontSize: "0.8rem",
          }}
        >
          <li
            style={{
              float: "right",
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              removePostComment(item);
            }}
          >
            삭제
          </li>
          <li
            style={{
              float: "right",
            }}
            onClick={() => {
              setCommentNum(item.id);
              setParentId(false);
            }}
          >
            수정
          </li>
          <li
            style={{
              float: "right",
              color: "#a2a2a2",
              fontSize: "0.8rem",
              marginRight: "1rem",
            }}
            onClick={() => {
              if (me === null) {
                needLogin(linkLogin);
              } else {
                setParentId(item.id);
                setCommentNum(false);
              }
            }}
          >
            답장
          </li>
        </ul>
      ) : (
        <li
          style={{
            float: "right",
            color: "#a2a2a2",
            fontSize: "0.8rem",
          }}
          onClick={() => {
            setCommentNum(false);
            setParentId(false);
          }}
        >
          취소
        </li>
      )}
    </ul>
  );
};

export default CommnetForm;
