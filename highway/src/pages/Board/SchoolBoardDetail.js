import {
  CommentOutlined,
  FieldTimeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Button, Descriptions, Input, List, Row, Form } from "antd";
import React, { useEffect, useState } from "react";
import BoardMenu from "../../components/Board/BoardMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COMMENT_REQUEST,
  LOAD_POST_COMMENTS_REQUEST,
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";
import { useParams } from "react-router-dom";
import BoardProfile from "../../components/Board/BoardProfile";
import moment from "moment";

const dummyboardData = [
  {
    id: 1,
    category: 1,
    content: "테스트 내용1",
    createData: "1시간전",
    modifiedDate: "1시간전",
    title: "테스트1",
    userId: "admin",
    school_id: 1,
    good: 18,
  },
];

const SchoolBoardDetail = () => {
  const [commentNum, setCommentNum] = useState(false);

  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const schoolBoardPostCommentsData = schoolBoardPostComments.data;
  const { postId } = useParams();
  const [parentId, setParentId] = useState(null);

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
  const loadPostComments = () => {
    console.log("loadPostCommnets");
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
  };
  const updatePostComment = (item, values) => {
    dispatch({
      type: UPDATE_POST_COMMENT_REQUEST,
      data: {
        id: item.id,
        content: values,
      },
    });
    setCommentNum(null);
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
  const onReplyComment = () => {
    setParentId(schoolBoardPostComments.id);
  };

  useEffect(() => {
    loadPostComments();
  }, []);
  return (
    <>
      <BoardMenu />
      <Row gutter={[16, 16]} justify="center">
        <ul
          style={{
            width: "75rem",
            listStyle: "none",
          }}
        >
          <div
            style={{
              width: "125rem",
              marginLeft: "-0.5rem",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <BoardProfile />
          </div>
          <li
            style={{
              width: "20rem",
              height: "30rem",
              marginRight: "1rem",
              borderRadius: "5%",
              backgroundColor: "#f2f2f2",
              float: "left",
            }}
          >
            광고
          </li>
          <li
            style={{
              width: "51rem",
              marginLeft: "24rem",
              marginTop: "-9.5rem",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                textAlign: "left",
                marginLeft: "-2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <li>
                <div>
                  <h1>{dummyboardData[postId - 1].title}</h1>
                </div>
              </li>
              <li>
                <div>작성자 : {dummyboardData[postId - 1].userId}</div>
              </li>
              <li style={{ marginTop: "1rem", marginRight: "1rem" }}>
                <FieldTimeOutlined />
                {dummyboardData[postId - 1].createData}
                <CommentOutlined
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                />
                {schoolBoardPostCommentsData.length}
                <LikeOutlined
                  style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
                />
                {dummyboardData[postId - 1].good}
              </li>
            </ul>
            <hr />
            <Descriptions>
              <Descriptions.Item>
                {dummyboardData[postId - 1].content}
              </Descriptions.Item>
            </Descriptions>
            <div
              style={{
                width: "51rem",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  width: "51rem",
                  marginTop: "2.5rem",
                  marginBottom: "1.5rem",
                  marginLeft: "-2.5rem",
                }}
              >
                <Form onFinish={onFinish}>
                  <li style={{ float: "left", width: "42rem" }}>
                    <Form.Item name="content">
                      <Input
                        rows={3}
                        placeholder="댓글을 적어주세요."
                        style={{
                          width: "40rem",
                          height: "5rem",
                          marginLeft: "-2rem",
                        }}
                      />
                    </Form.Item>
                  </li>
                  <li style={{ width: "51rem" }}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "9rem",
                          marginLeft: "-0.5rem",
                          height: "5rem",
                        }}
                      >
                        등록
                      </Button>
                    </Form.Item>
                  </li>
                </Form>
              </ul>
              <List
                size="large"
                bordered
                dataSource={schoolBoardPostCommentsData}
                renderItem={(item) => {
                  const CommentUserChecked = userCheck(item);
                  return (
                    <List.Item style={{ padding: "0px" }}>
                      <ul
                        style={{
                          listStyle: "none",
                          textAlign: "left",
                          marginLeft: "-2rem",
                          width: "50rem",
                        }}
                      >
                        <li style={{ color: "blue" }}>
                          <li
                            style={{
                              float: "left",
                              marginLeft: "1rem",
                            }}
                          >
                            {item.userId}
                          </li>
                          <li
                            style={{
                              width: "15rem",
                              textAlign: "right",
                              marginLeft: "34rem",
                              marginTop: "1rem",
                              marginRight: "1rem",
                            }}
                          >
                            {CommentUserChecked ? (
                              <div style={{ marginLeft: "1rem" }}>
                                <button
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                  onClick={() => {
                                    alert("답글");
                                  }}
                                >
                                  답글
                                </button>
                                <button
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                  onClick={() => {
                                    setCommentNum(item.id);
                                  }}
                                >
                                  수정
                                </button>
                                <button
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                  onClick={() => {
                                    alert("삭제");
                                    // removePostComment(item);
                                  }}
                                >
                                  삭제
                                </button>
                              </div>
                            ) : (
                              <>
                                <button
                                  style={{
                                    background: "none",
                                    border: "none",
                                    marginTop: "0.5rem",
                                  }}
                                  onClick={() => {
                                    alert("답글");
                                  }}
                                >
                                  답글
                                </button>
                              </>
                            )}
                          </li>
                        </li>
                        <li
                          name={item.id}
                          value={item.id}
                          style={{
                            marginTop: "-1rem",
                            marginBottom: "-1rem",
                            marginLeft: "1rem",
                          }}
                        >
                          {item.id === commentNum ? (
                            <Form
                              onFinish={(values) => {
                                console.log(values);
                                dispatch({
                                  type: UPDATE_POST_COMMENT_REQUEST,
                                  data: {
                                    id: item.id,
                                    content: values.content,
                                  },
                                });
                              }}
                            >
                              <ul style={{ listStyle: "none" }}>
                                <li
                                  style={{
                                    float: "left",
                                    width: "38rem",
                                    marginTop: "2rem",
                                    marginLeft: "-2.5rem",
                                  }}
                                >
                                  <Form.Item name="content">
                                    <Input
                                      rows={3}
                                      placeholder="댓글을 적어주세요."
                                      style={{
                                        width: "37rem",
                                        height: "5rem",
                                      }}
                                    />
                                  </Form.Item>
                                </li>
                                <li style={{ width: "45rem" }}>
                                  <Form.Item>
                                    <Button
                                      type="primary"
                                      htmlType="submit"
                                      style={{
                                        width: "9rem",
                                        marginLeft: "1rem",
                                        height: "5rem",
                                        marginTop: "2rem",
                                      }}
                                    >
                                      수정
                                    </Button>
                                  </Form.Item>
                                </li>
                              </ul>
                            </Form>
                          ) : (
                            <h4>{item.content}</h4>
                          )}
                        </li>
                        <li
                          style={{
                            marginTop: "2%",
                            marginLeft: "2%",
                            marginBottom: "2%",
                          }}
                        >
                          <FieldTimeOutlined />
                          {item.createData}
                        </li>
                        <li
                          style={{
                            width: "100.25%",
                            marginLeft: "0.25%",
                            paddingBottom: "-16px",
                          }}
                        >
                          <List
                            style={{
                              background: "#dfdfdf",
                            }}
                            size="large"
                            bordered={false}
                            dataSource={schoolBoardPostCommentsData}
                            renderItem={(v) => {
                              const ReplyUserCheck = userCheck(v);
                              if (v.parentId === item.id) {
                                return (
                                  <List.Item style={{ padding: "0px" }}>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        textAlign: "left",
                                        width: "100%",
                                        marginTop: "2%",
                                      }}
                                    >
                                      <li
                                        style={{
                                          width: "50%",
                                          float: "left",
                                          marginLeft: "-3%",
                                          color: "blue",
                                        }}
                                      >
                                        {v.userId}
                                      </li>
                                      <li
                                        style={{
                                          width: "50%",
                                          textAlign: "right",
                                          marginLeft: "47%",
                                        }}
                                      >
                                        {ReplyUserCheck ? (
                                          <div style={{ marginLeft: "20%" }}>
                                            <button
                                              style={{
                                                background: "none",
                                                border: "none",
                                              }}
                                              onClick={() => {
                                                alert("답글");
                                              }}
                                            >
                                              답글
                                            </button>
                                            <button
                                              style={{
                                                background: "none",
                                                border: "none",
                                              }}
                                              onClick={() => {
                                                setCommentNum(v.id);
                                              }}
                                            >
                                              수정
                                            </button>
                                            <button
                                              style={{
                                                background: "none",
                                                border: "none",
                                              }}
                                              onClick={() => {
                                                removePostComment(v);
                                              }}
                                            >
                                              삭제
                                            </button>
                                          </div>
                                        ) : (
                                          <>
                                            <button
                                              style={{
                                                background: "none",
                                                border: "none",
                                              }}
                                              onClick={() => {
                                                alert("답글");
                                              }}
                                            >
                                              답글
                                            </button>
                                          </>
                                        )}
                                      </li>
                                      <li
                                        style={{
                                          width: "100%",
                                          marginTop: "-2%",
                                          marginLeft: "-3%",
                                        }}
                                      >
                                        {v.id === commentNum ? (
                                          <Form onFinish={updatePostComment}>
                                            <ul style={{ listStyle: "none" }}>
                                              <li
                                                style={{
                                                  float: "left",
                                                  width: "80%",
                                                }}
                                              >
                                                <Form.Item name="content">
                                                  <Input
                                                    rows={3}
                                                    placeholder="댓글을 적어주세요."
                                                    style={{
                                                      width: "100%",
                                                      height: "80px",
                                                    }}
                                                  />
                                                </Form.Item>
                                              </li>
                                              <li style={{ width: "100%" }}>
                                                <Form.Item>
                                                  <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    style={{
                                                      width: "96%",
                                                      marginLeft: "5%",
                                                      height: "80px",
                                                    }}
                                                  >
                                                    수정
                                                  </Button>
                                                </Form.Item>
                                              </li>
                                            </ul>
                                          </Form>
                                        ) : (
                                          <h4>{item.content}</h4>
                                        )}
                                      </li>
                                      <li
                                        style={{
                                          width: "100%",
                                          marginTop: "-2%",
                                          marginLeft: "-3%",
                                          marginBottom: "2%",
                                        }}
                                      >
                                        <FieldTimeOutlined />
                                        {v.createData}
                                      </li>
                                    </ul>
                                  </List.Item>
                                );
                              }
                            }}
                          />
                        </li>
                      </ul>
                    </List.Item>
                  );
                }}
              />
            </div>
            <li style={{ marginTop: "5%" }}>
              <Button>더 보기</Button>
            </li>
          </li>
        </ul>
      </Row>
    </>
  );
};
export default SchoolBoardDetail;
