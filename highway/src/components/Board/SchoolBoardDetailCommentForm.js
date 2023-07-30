import { Input, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { CommentSpan } from "../schoolBoardDetail/SchoolBoardDetailComments";
import { needLogin } from "../../utils/Message";
import {
  SchoolBoardDetailCommentInputTextArea,
  SchoolBoardDetailCommentListItem,
} from "../../styles/SchoolBoardDetailCommentFormStyle";

const SchoolBoardDetailCommentForm = ({
  parentId,
  item,
  isEditing,
  addCommentReply,
  setParentId,
  setCommentNum,
  linkLogin,
}) => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      {parentId === item.id && !isEditing && (
        <>
          <SchoolBoardDetailCommentListItem
            actions={[
              <CommentSpan
                key="reply"
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
              </CommentSpan>,
              <CommentSpan
                key="cancel"
                onClick={() => {
                  setParentId("");
                  setCommentNum(false);
                }}
              >
                취소
              </CommentSpan>,
            ]}
          >
            <SchoolBoardDetailCommentInputTextArea
              maxLength="100"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (parentId === item.id) {
                    if (me === null) {
                      alert("로그인이 필요한 기능입니다.");
                    } else {
                      addCommentReply(item, e.target.value, me);
                    }
                  }
                }
              }}
              placeholder="답글을 적어주세요"
            />
          </SchoolBoardDetailCommentListItem>
        </>
      )}
    </>
  );
};

export default SchoolBoardDetailCommentForm;
