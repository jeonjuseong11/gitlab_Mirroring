import { CommentOutlined, FieldTimeOutlined } from "@ant-design/icons";
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
            width: "57.5%",
            listStyle: "none",
          }}
        >
          <div style={{ width: "160%", marginLeft: "-1%", marginBottom: "2%" }}>
            <BoardProfile />
          </div>
          <li
            style={{
              width: "25%",
              height: "300px",
              marginRight: "2%",
              borderRadius: "10px",
              backgroundColor: "#f2f2f2",
              float: "left",
            }}
          >
            광고
          </li>
          <li style={{ width: "70%", marginLeft: "30%", marginTop: "-13%" }}>
            <ul
              style={{
                listStyle: "none",
                textAlign: "left",
                marginLeft: "-4.5%",
                marginBottom: "2%",
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
              <li style={{ marginTop: "2%", marginRight: "1%" }}>
                <FieldTimeOutlined />
                {dummyboardData[postId - 1].createData}
                <CommentOutlined
                  style={{ marginLeft: "2%", marginRight: "1%" }}
                />
                {schoolBoardPostCommentsData.length}
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
                width: "100%",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  width: "100%",
                  marginTop: "5%",
                  marginBottom: "3%",
                  marginLeft: "-5%",
                }}
              >
                <Form onFinish={onFinish}>
                  <li style={{ float: "left", width: "80%" }}>
                    <Form.Item name="content">
                      <Input
                        rows={3}
                        placeholder="댓글을 적어주세요."
                        style={{ width: "100%", height: "80px" }}
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
                          marginLeft: "-5%",
                          width: "100%",
                        }}
                      >
                        <li style={{ color: "blue" }}>
                          <li
                            style={{
                              width: "78%",
                              float: "left",
                              marginLeft: "2%",
                            }}
                          >
                            {item.userId}
                          </li>
                          <li
                            style={{
                              width: "30%",
                              textAlign: "right",
                              marginLeft: "68%",
                              marginTop: "2%",
                              marginRight: "2%",
                            }}
                          >
                            {CommentUserChecked ? (
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
                                    marginTop: "5%",
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
                            marginTop: "-2%",
                            marginBottom: "-2%",
                            marginLeft: "2%",
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
