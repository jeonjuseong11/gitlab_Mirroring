import React from "react";

const CommentRUBtn = ({
  item,
  setCommentNum,
  setParentId,
  removePostComment,
}) => {
  return (
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
    </ul>
  );
};

export default CommentRUBtn;
