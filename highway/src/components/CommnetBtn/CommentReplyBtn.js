import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { needLogin } from "../../utils/Message";
import {
  LOAD_POST_COMMENTS_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";

const CommentReplyBtn = ({ item, linkLogin }) => {
  const { me } = useSelector((state) => state.user);
  const [commentNum, setCommentNum] = useState(false);
  const [parentId, setParentId] = useState(false);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigator = useNavigate();
  return (
    <li
      style={{
        float: "right",
        marginTop: "1rem",
        color: "#a2a2a2",
        fontSize: "0.8rem",
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
  );
};

export default CommentReplyBtn;
