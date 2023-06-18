import { Col, Input, List, Button, Row } from "antd";
import React, { useState } from "react";
import {
  ADD_COMMENT_REQUEST,
  ADD_POST_COMMENT_REPLY_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import CommentDummyDatas from "../../utils/CommentDummyDatas";
import ToggleGoodAndCommentBtn from "./ToggleGoodAndCommentBtn";

export const formatDate = (dateString) => {
  const currentTime = moment();
  const targetTime = moment(dateString);
  const duration = moment.duration(currentTime.diff(targetTime));

  if (duration.asSeconds() < 60) {
    return "방금 전";
  } else if (duration.asMinutes() < 60) {
    const minutes = Math.floor(duration.asMinutes());
    return `${minutes}분 전`;
  } else if (duration.asHours() < 24) {
    const hours = Math.floor(duration.asHours());
    return `${hours}시간 전`;
  } else if (duration.asDays() < 2) {
    return "어제";
  } else if (duration.asMonths() < 1) {
    const days = Math.floor(duration.asDays());
    return `${days}일 전`;
  } else {
    const months = Math.floor(duration.asMonths());
    return `${months}달 전`;
  }
};

const ToggleComment = () => {
  const dispatch = useDispatch();
  // const { me } = useSelector((state) => state.user);
  const me = { userId: "Lee" };
  // const { schoolBoardPostComments } = useSelector((state) => state.post);
  // const schoolBoardPostCommentsData = schoolBoardPostComments.data;
  console.log(CommentDummyDatas);
  const { postId } = useParams();
  const [replyCommentNum, setReplyCommnetNum] = useState([]);
  const [commentNum, setCommentNum] = useState(false);
  const [commnetCount, setCommentCount] = useState(0);
  const [parentId, setParentId] = useState(false);
  const [InputContent, setInputContent] = useState("");
  const [checkReply, setCheckReply] = useState(false);
  const [toggle, setToggle] = useState(false);

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
  const updatePostComment = (item) => {
    dispatch({
      type: UPDATE_POST_COMMENT_REQUEST,
      data: {
        id: item.id,
        content: InputContent,
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
  };

  const addCommentReply = () => {
    console.log("addCommentReply");
    dispatch({
      type: ADD_POST_COMMENT_REPLY_REQUEST,
      data: {
        content: InputContent,
        createData: moment(),
        modifiedDate: moment(),
        userId: me.userId,
        boardId: postId,
        parentId: parentId,
      },
    });
  };

  const onCheckReply = (item) => {
    if (item > 0) {
      setCheckReply(true);
    } else {
      setCheckReply(false);
    }
  };

  const onFinish = (values) => {
    if (values === undefined) {
      alert("빈칸이 있습니다.");
      return;
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        content: values.content,
        createData: moment(),
        modifiedDate: moment(),
        userId: me.userId,
        boardId: postId,
        parentId: parentId,
      },
    });
  };

  return (
    <>
      {!toggle ? (
        <>
          <Col xs={23} md={11} offset={4} justify="center">
            <ToggleGoodAndCommentBtn toggle={toggle} setToggle={setToggle} />
          </Col>
        </>
      ) : (
        <>
          <Col xs={23} md={11} offset={4} justify="center">
            <Col xs={23} md={23}>
              <ToggleGoodAndCommentBtn toggle={toggle} setToggle={setToggle} />
              <Input
                placeholder="댓글을 적어주세요."
                style={{
                  height: "5rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              />
              <List
                size="large"
                bordered
                dataSource={CommentDummyDatas.data}
                renderItem={(item) => {
                  const CommentUserChecked = userCheck(item);
                  return (
                    <List.Item style={{ padding: "0px" }}>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              xs={4}
                              md={4}
                              style={{
                                textAlign: "left",
                                width: "10rem",
                                marginLeft: "1.4rem",
                                marginTop: "1rem",
                                color: "blue",
                              }}
                            >
                              {item.userId}
                            </Col>
                            {CommentUserChecked ? (
                              <Col
                                xs={16}
                                md={19}
                                style={{
                                  textAlign: "right",
                                  width: "33rem",
                                  marginTop: "1rem",
                                }}
                              >
                                {commentNum !== item.id ? (
                                  <>
                                    {parentId !== item.id ? (
                                      <>
                                        <Button
                                          onClick={() => {
                                            setParentId(item.id);
                                            setCommentNum(false);
                                          }}
                                        >
                                          답
                                        </Button>
                                        <Button
                                          style={{
                                            marginLeft: "0.5rem",
                                          }}
                                          onClick={() => {
                                            setCommentNum(item.id);
                                            setParentId(false);
                                          }}
                                        >
                                          수
                                        </Button>
                                        <Button
                                          style={{
                                            marginLeft: "0.5rem",
                                          }}
                                        >
                                          삭
                                        </Button>
                                      </>
                                    ) : (
                                      <Button
                                        onClick={() => {
                                          setCommentNum(false);
                                          setParentId(false);
                                        }}
                                      >
                                        취
                                      </Button>
                                    )}
                                  </>
                                ) : (
                                  <Button
                                    onClick={() => {
                                      setCommentNum(false);
                                      setParentId(false);
                                    }}
                                  >
                                    취
                                  </Button>
                                )}
                              </Col>
                            ) : (
                              <Col
                                xs={16}
                                md={19}
                                style={{
                                  textAlign: "right",
                                  width: "33rem",
                                }}
                              >
                                {parentId !== item.id ? (
                                  <Button
                                    style={{ marginTop: "1rem" }}
                                    onClick={() => {
                                      setParentId(item.id);
                                      setCommentNum(false);
                                    }}
                                  >
                                    답
                                  </Button>
                                ) : (
                                  <Button
                                    style={{ marginTop: "1rem" }}
                                    onClick={() => {
                                      setCommentNum(false);
                                      setParentId(false);
                                    }}
                                  >
                                    취
                                  </Button>
                                )}
                              </Col>
                            )}
                          </Row>
                          <Row>
                            {commentNum === item.id ? (
                              <Col xs={23} md={23}>
                                <Input
                                  style={{
                                    marginTop: "0.5rem",
                                    marginLeft: "1rem",
                                  }}
                                  placeholder="수정 내용을 적어주세요"
                                ></Input>
                              </Col>
                            ) : (
                              <Col
                                xs={23}
                                md={23}
                                style={{
                                  textAlign: "left",
                                  marginLeft: "1.4rem",
                                }}
                              >
                                {item.content}
                              </Col>
                            )}
                          </Row>
                          <Row>
                            <Col xs={23} md={23}>
                              {parentId === item.id ? (
                                <Input
                                  style={{
                                    marginTop: "0.5rem",
                                    marginLeft: "1rem",
                                  }}
                                  placeholder="답장을 적어주세요"
                                ></Input>
                              ) : (
                                <></>
                              )}
                            </Col>
                          </Row>
                          <List
                            dataSource={item.children}
                            renderItem={(v) => {
                              const ReplyCheck = userCheck(v);
                              return (
                                <List.Item
                                  style={{
                                    padding: "0px",
                                    background: "#f2f2f2",
                                  }}
                                >
                                  <Row>
                                    <Col>
                                      <Row>
                                        <Col
                                          xs={4}
                                          md={4}
                                          style={{
                                            textAlign: "left",
                                            width: "10rem",
                                            marginLeft: "1.4rem",
                                            marginTop: "1rem",
                                            color: "blue",
                                          }}
                                        >
                                          {v.userId}
                                        </Col>
                                        {ReplyCheck ? (
                                          <Col
                                            xs={16}
                                            md={19}
                                            style={{
                                              textAlign: "right",
                                              width: "33rem",
                                              marginTop: "1rem",
                                            }}
                                          >
                                            {commentNum !== v.id ? (
                                              <>
                                                {parentId !== v.id ? (
                                                  <>
                                                    <Button
                                                      onClick={() => {
                                                        setParentId(v.id);
                                                        setCommentNum(false);
                                                      }}
                                                    >
                                                      답
                                                    </Button>
                                                    <Button
                                                      style={{
                                                        marginLeft: "0.5rem",
                                                      }}
                                                      onClick={() => {
                                                        setCommentNum(v.id);
                                                        setParentId(false);
                                                      }}
                                                    >
                                                      수
                                                    </Button>
                                                    <Button
                                                      style={{
                                                        marginLeft: "0.5rem",
                                                      }}
                                                    >
                                                      삭
                                                    </Button>
                                                  </>
                                                ) : (
                                                  <Button
                                                    onClick={() => {
                                                      setCommentNum(false);
                                                      setParentId(false);
                                                    }}
                                                  >
                                                    취
                                                  </Button>
                                                )}
                                              </>
                                            ) : (
                                              <Button
                                                onClick={() => {
                                                  setCommentNum(false);
                                                  setParentId(false);
                                                }}
                                              >
                                                취
                                              </Button>
                                            )}
                                          </Col>
                                        ) : (
                                          <Col
                                            xs={16}
                                            md={19}
                                            style={{
                                              textAlign: "right",
                                              width: "33rem",
                                            }}
                                          >
                                            {parentId !== v.id ? (
                                              <Button
                                                onClick={() => {
                                                  setParentId(v.id);
                                                  setCommentNum(false);
                                                }}
                                              >
                                                답
                                              </Button>
                                            ) : (
                                              <Button
                                                onClick={() => {
                                                  setCommentNum(false);
                                                  setParentId(false);
                                                }}
                                              >
                                                취
                                              </Button>
                                            )}
                                          </Col>
                                        )}
                                      </Row>
                                      <Row>
                                        {commentNum === v.id ? (
                                          <Col xs={23} md={23}>
                                            <Input
                                              style={{
                                                marginTop: "0.5rem",
                                                marginLeft: "1rem",
                                              }}
                                              placeholder="수정 내용을 적어주세요"
                                            ></Input>
                                          </Col>
                                        ) : (
                                          <Col
                                            xs={23}
                                            md={23}
                                            style={{
                                              textAlign: "left",
                                              marginLeft: "1.4rem",
                                            }}
                                          >
                                            {v.content}
                                          </Col>
                                        )}
                                      </Row>
                                      <Row>
                                        <Col xs={23} md={23}>
                                          {parentId === v.id ? (
                                            <Input
                                              style={{
                                                marginTop: "0.5rem",
                                                marginLeft: "1rem",
                                              }}
                                              placeholder="답장을 적어주세요"
                                            ></Input>
                                          ) : (
                                            <></>
                                          )}
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </List.Item>
                              );
                            }}
                          />
                        </Col>
                      </Row>
                    </List.Item>
                  );
                }}
              />
            </Col>
          </Col>
        </>
      )}
    </>
  );
};

export default ToggleComment;
