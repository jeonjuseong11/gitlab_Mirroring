import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Dropdown, List, Menu, Input, Button, Modal } from "antd";
import { CommentDateSpan } from "./SchoolBoardDetailComments";
import { formatDate } from "./ToggleComment";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_POST_COMMENTS_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
  ADD_POST_COMMENT_REPLY_REQUEST,
} from "../../constants/actionTypes";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const [editedComment, setEditedComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedReply, setEditedReply] = useState(""); // 답글 작성을 위한 상태 추가

  const replyInputRef = useRef(null);
  const [replyVisibleMap, setReplyVisibleMap] = useState({});

  const loadPostComments = useCallback(
    (postId) => {
      if (postId) {
        dispatch({
          type: LOAD_POST_COMMENTS_REQUEST,
          data: {
            boardId: postId,
          },
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    loadPostComments(postId);
  }, [loadPostComments, postId]);

  const updatePostComment = (id, editedComment) => {
    dispatch({
      type: UPDATE_POST_COMMENT_REQUEST,
      data: {
        id: id,
        content: editedComment,
      },
    });
    setEditedComment("");
    setEditCommentId(null);
  };

  const handleRemoveComment = (event, id) => {
    event.domEvent.stopPropagation();

    Modal.confirm({
      title: "댓글 삭제",
      content: "정말로 이 댓글을 삭제하시겠습니까?",
      okText: "삭제",
      okType: "danger",
      cancelText: "취소",
      onOk() {
        dispatch({
          type: REMOVE_POST_COMMENT_REQUEST,
          data: {
            id: id,
            boardId: postId,
          },
        });
      },
    });
  };

  const handleAddComment = (event, parentId) => {
    event.stopPropagation();
    if (editedReply.trim() !== "") {
      dispatch({
        type: ADD_POST_COMMENT_REPLY_REQUEST,
        data: {
          boardId: postId,
          content: editedReply,
          parentId: parentId,
        },
      });
      setEditedReply("");
      setReplyVisibleMap((prev) => ({ ...prev, [parentId]: false }));
    } else {
      alert("댓글 내용을 입력해주세요.");
    }
  };

  const handleEdit = useCallback(
    (item) => {
      if (me?.userId === item?.userId) {
        Modal.confirm({
          title: "댓글 수정",
          content: "정말로 이 댓글을 수정하시겠습니까?",
          okText: "수정",
          cancelText: "취소",
          onOk() {
            setEditedComment(item.content);
            setEditCommentId(item.id);
          },
        });
      }
    },
    [me]
  );

  const cancelEdit = useCallback(() => {
    setEditedComment("");
    setEditCommentId(null);
  }, []);

  const handleReply = useCallback((id) => {
    setReplyVisibleMap((prevMap) => {
      const updatedMap = { ...prevMap, [id]: true };
      return updatedMap;
    });
  }, []);

  const cancelReply = useCallback(() => {
    setReplyVisibleMap({});
  }, []);

  const renderComment = (comment) => {
    const { id, content, userId, children, isDeleted, modifiedDate } = comment;
    if (isDeleted) {
      return null;
    }
    const menu = (
      <Menu>
        <Menu.Item
          key="edit"
          onClick={() => {
            handleEdit(comment);
          }}
        >
          수정하기
        </Menu.Item>
        <Menu.Item key="delete" danger onClick={(e) => handleRemoveComment(e, comment.id)}>
          삭제하기
        </Menu.Item>
      </Menu>
    );
    const isEditing = editCommentId === id;
    const isContentEmpty = editedComment?.trim()?.length === 0;
    const canEditOrDelete = me?.userId === userId;

    return (
      <List.Item key={id} style={{ textAlign: "left", marginLeft: "1rem" }}>
        <List.Item.Meta
          title={
            <div>
              <span>{userId}</span>
              <span style={{ position: "absolute", right: "1rem" }}>
                {canEditOrDelete && (
                  <Dropdown overlay={menu} trigger={["hover"]}>
                    <EllipsisOutlined />
                  </Dropdown>
                )}
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
                    onClick={() => {
                      updatePostComment(id, editedComment);
                    }}
                    disabled={isContentEmpty || editedComment === content}
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
        <Button type="text" onClick={() => handleReply(id)}>
          답글달기
        </Button>
        {replyVisibleMap[id] && (
          <div style={{ marginTop: "1rem" }}>
            <Input.TextArea
              style={{ padding: "1rem" }}
              ref={replyInputRef}
              value={editedReply}
              onChange={(e) => setEditedReply(e.target.value)}
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
              <Button type="primary" onClick={(e) => handleAddComment(e, comment.id)}>
                답글달기
              </Button>
              <Button type="text" onClick={cancelReply}>
                취소
              </Button>
            </div>
          </div>
        )}

        {children?.length > 0 && (
          <List
            style={{ marginTop: "1rem" }}
            key={`list-${id}`}
            size="small"
            dataSource={children}
            itemLayout="vertical"
            renderItem={(reply) => renderComment(reply)}
          />
        )}
      </List.Item>
    );
  };
  const sortedComments = [...schoolBoardPostComments].sort((a, b) => b.id - a.id);

  return (
    <Col xs={{ span: 23, offset: 0 }} style={{ marginBottom: "3rem" }}>
      {sortedComments.length !== 0 && !sortedComments.isDeleted ? (
        <List
          itemLayout="vertical"
          dataSource={sortedComments}
          renderItem={(comment) => renderComment(comment)}
        />
      ) : (
        <></>
      )}
    </Col>
  );
};

export default CommentList;
