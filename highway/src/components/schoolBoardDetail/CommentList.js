import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Dropdown, List, Menu, Input, Button } from "antd";
import { CommentDateSpan } from "./SchoolBoardDetailComments";
import { formatDate } from "./ToggleComment";
import { EllipsisOutlined, MessageOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_POST_COMMENTS_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
  ADD_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const [editedComment, setEditedComment] = useState("");
  const [isReplyVisible, setIsReplyVisible] = useState(false);
  const [replyTargetId, setReplyTargetId] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const replyInputRef = useRef(null);

  useEffect(() => {
    loadPostComments(postId);
  }, [postId]);

  const loadPostComments = (postId) => {
    if (postId) {
      dispatch({
        type: LOAD_POST_COMMENTS_REQUEST,
        data: {
          boardId: postId,
        },
      });
    }
  };

  const updatePostComment = useCallback(
    (id, editedComment) => {
      dispatch({
        type: UPDATE_POST_COMMENT_REQUEST,
        data: {
          id: id,
          content: editedComment,
          boardId: postId,
        },
      });
      setEditedComment("");
      setEditCommentId(null);
    },
    [dispatch, postId]
  );

  const removePostComment = (id) => {
    console.log("RemovePostComment");
    dispatch({
      type: REMOVE_POST_COMMENT_REQUEST,
      data: {
        id: id,
        boardId: postId,
      },
    });
  };

  const addPostComment = useCallback(() => {
    if (editedComment.trim() !== "") {
      dispatch({
        type: ADD_POST_COMMENT_REQUEST,
        data: {
          content: editedComment,
          boardId: postId,
          parentId: replyTargetId,
        },
      });
      setEditedComment("");
      setReplyTargetId(null);
      setIsReplyVisible(false);
    }
  }, [dispatch, editedComment, postId, replyTargetId]);

  const handleEdit = (item) => {
    //댓글 수정
    setEditedComment(item.content);
    setEditCommentId(item.id);
  };

  const cancelEdit = () => {
    //댓글 수정 취소
    setEditedComment("");
    setEditCommentId(null);
  };

  const handleReply = (item) => {
    //대댓글 달기
    setIsReplyVisible(true);
    setReplyTargetId(item.id);
  };

  const cancelReply = () => {
    //대댓글 달기 취소
    setIsReplyVisible(false);
    setReplyTargetId(null);
  };

  const renderComment = (comment) => {
    const { id, content, userId, children, isDeleted, modifiedDate } = comment;
    if (isDeleted) {
      return null;
    }

    const isEditing = editCommentId === id;
    const isContentEmpty = editedComment.trim().length === 0;

    return (
      <List.Item key={id} style={{ textAlign: "left", marginLeft: "1rem" }}>
        <List.Item.Meta
          title={
            <div>
              <span>{userId}</span>
              <span style={{ position: "absolute", right: 0 }}>
                <Dropdown
                  placement="bottomLeft"
                  overlay={
                    <Menu>
                      <Menu.Item onClick={() => handleEdit(comment)}>수정하기</Menu.Item>
                      <Menu.Item danger onClick={() => removePostComment(id)}>
                        삭제하기
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <EllipsisOutlined />
                </Dropdown>
              </span>
            </div>
          }
          description={
            isEditing ? (
              <>
                <Input.TextArea
                  rows={4}
                  value={editedComment}
                  style={{ padding: "1rem" }}
                  onChange={(e) => setEditedComment(e.target.value)}
                  placeholder="댓글을 입력해주세요"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    type="primary"
                    onClick={() => updatePostComment(id, editedComment)}
                    disabled={isContentEmpty || editedComment === content} // 수정된 내용이 없거나 원본과 동일한 경우 버튼 비활성화
                  >
                    저장
                  </Button>
                  <Button type="text" onClick={cancelEdit}>
                    취소
                  </Button>
                </div>
              </>
            ) : (
              <div style={{ whiteSpace: "pre-wrap" }}>{content}</div>
            )
          }
        />
        <CommentDateSpan>{formatDate(modifiedDate)}</CommentDateSpan>
        <Button type="text" onClick={() => handleReply(comment)}>
          답글달기
        </Button>
        {children?.length > 0 && (
          <List
            style={{ marginTop: "1rem" }}
            size="small"
            dataSource={children}
            itemLayout="vertical"
            renderItem={(reply) => renderComment(reply)}
          />
        )}
        {isReplyVisible && replyTargetId === comment.id && (
          <div style={{ marginTop: "1rem" }}>
            <Input.TextArea
              style={{ padding: "1rem" }}
              ref={replyInputRef}
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              placeholder="댓글을 입력해주세요"
              autoSize={{ minRows: 2, maxRows: 6 }}
              autoFocus
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
              }}
            >
              <Button type="primary" onClick={addPostComment}>
                댓글 작성
              </Button>
              <Button type="text" onClick={cancelReply}>
                취소
              </Button>
            </div>
          </div>
        )}
      </List.Item>
    );
  };

  const filteredComments = schoolBoardPostComments.filter(
    (schoolBoardPostComment) => !schoolBoardPostComment.isDeleted
  );

  return (
    <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 4 }} style={{ marginBottom: "3rem" }}>
      {filteredComments.length !== 0 ? (
        <List
          itemLayout="vertical"
          dataSource={filteredComments}
          renderItem={(comment) => renderComment(comment)}
        />
      ) : (
        <></>
      )}
    </Col>
  );
};

export default CommentList;
