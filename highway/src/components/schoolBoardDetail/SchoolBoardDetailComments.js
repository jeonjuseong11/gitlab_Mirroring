import { Col, Input, List, Row } from "antd";
import React, { useState } from "react";
import CommentDummyDatas from "../../utils/CommentDummyDatas";
import SchoolBoardDetailReplys from "./SchoolBoardDetailReplys";
import {
  ADD_POST_COMMENT_REPLY_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { needLogin } from "../../utils/Message";
import CommnetRURBtn from "../CommnetBtn/CommnetRURBtn";
import CommentCancleBtn from "../CommnetBtn/CommentCancleBtn";
import CommentReplyBtn from "../CommnetBtn/CommentReplyBtn";

const SchoolBoardDetailComments = ({ loadPostComments }) => {
  const { me } = useSelector((state) => state.user);
  const [commentNum, setCommentNum] = useState(false);
  const [parentId, setParentId] = useState(false);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigator = useNavigate();
  const linkLogin = () => {
    navigator("/login");
  };

  const userCheck = (item) => {
    if (me === null) {
      return false;
    }
    if (me.userId === item.userId) {
      return true;
    } else {
      return false;
    }
  };

  const updatePostComment = (item, values) => {
    console.log(values);
    dispatch({
      type: UPDATE_POST_COMMENT_REQUEST,
      data: {
        id: item.id,
        content: values,
      },
    });
    loadPostComments();
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

  const addCommentReply = (item, values) => {
    console.log("addCommentReply");
    dispatch({
      type: ADD_POST_COMMENT_REPLY_REQUEST,
      data: {
        content: values,
        createData: moment(),
        modifiedDate: moment(),
        userId: me.userId,
        boardId: postId,
        parentId: item.id,
      },
    });
    loadPostComments();
  };
  return (
    <List
      size="large"
      bordered
      dataSource={CommentDummyDatas.data}
      renderItem={(item) => {
        const CommentUserChecked = userCheck(item);
        return (
          <List.Item
            style={{
              padding: "0px",
              borderBottom: "1px solid #d2d2d2",
            }}
          >
            <Row>
              <Col
                style={{
                  textAlign: "left",
                  marginLeft: "1.4rem",
                  marginTop: "1rem",
                  color: "blue",
                }}
              >
                {item.userId}
              </Col>
              {CommentUserChecked ? (
                <Col
                  style={{
                    textAlign: "right",
                    marginTop: "1rem",
                  }}
                >
                  {commentNum !== item.id ? (
                    <CommnetRURBtn item={item} />
                  ) : (
                    <CommentCancleBtn
                      setCommentNum={setCommentNum}
                      setParentId={setParentId}
                    />
                  )}
                </Col>
              ) : (
                <Col
                  style={{
                    textAlign: "right",
                  }}
                >
                  {parentId !== item.id ? (
                    <CommentReplyBtn item={item} linkLogin={linkLogin} />
                  ) : (
                    <CommentCancleBtn
                      setCommentNum={setCommentNum}
                      setParentId={setParentId}
                    />
                  )}
                </Col>
              )}
            </Row>
            <Row>
              {commentNum === item.id ? (
                <Col>
                  <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (me === null) {
                          alert("로그인이 필요한 기능입니다.");
                        } else {
                          updatePostComment(e.target.value);
                        }
                      }
                    }}
                    style={{
                      marginTop: "1rem",
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                    }}
                    placeholder="수정 내용을 적어주세요"
                  ></Input>
                </Col>
              ) : (
                <Col
                  style={{
                    textAlign: "left",
                    marginLeft: "1.4rem",
                    marginTop: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {item.content}
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                {parentId === item.id ? (
                  <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (me === null) {
                          alert("로그인이 필요한 기능입니다.");
                        } else {
                          addCommentReply(item, e.target.value);
                        }
                      }
                    }}
                    style={{
                      marginTop: "1rem",
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                    }}
                    placeholder="답글을 적어주세요"
                  ></Input>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
            {item.children.length === 0 ? (
              <></>
            ) : (
              <SchoolBoardDetailReplys
                info={item}
                me={me}
                removePostComment={removePostComment}
                updatePostComment={updatePostComment}
                loadPostComments={loadPostComments}
                linkLogin={linkLogin}
              />
            )}
          </List.Item>
        );
      }}
    />
  );
};

export default SchoolBoardDetailComments;
