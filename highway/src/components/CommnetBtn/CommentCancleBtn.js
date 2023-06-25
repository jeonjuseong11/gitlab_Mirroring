import React from "react";

const CommentCancleBtn = ({ setCommentNum, setParentId }) => {
  return (
    <li
      style={{
        marginTop: "1rem",
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
  );
};

export default CommentCancleBtn;
