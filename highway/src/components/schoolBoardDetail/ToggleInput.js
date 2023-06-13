import { Button, Form, Input, List } from "antd";
import React, { useState } from "react";
import {
  REMOVE_POST_COMMENT_REQUEST,
  UPDATE_POST_COMMENT_REQUEST,
} from "../../constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const ToggleInput = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  console.log(schoolBoardPostComments);
  const schoolBoardPostCommentsData = schoolBoardPostComments.data;
  const [replyCommentNum, setReplyCommnetNum] = useState([]);
  const [commentNum, setCommentNum] = useState(false);
  const [commnetCount, setCommentCount] = useState(0);
  const [parentId, setParentId] = useState(false);
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
  return (
    <List
      size="large"
      bordered
      dataSource={schoolBoardPostCommentsData}
      renderItem={(item) => {
        const CommentUserChecked = userCheck(item);
        console.log(item);
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
                  {item.content}
                </li>
                {item.id === commentNum ? (
                  <ul style={{ listStyle: "none" }}>
                    <li
                      onClick={() => {
                        setCommentNum(false);
                      }}
                    >
                      <button>취소</button>
                    </li>
                    <li
                      style={{
                        float: "left",
                        width: "38rem",
                        marginTop: "2rem",
                        marginLeft: "-2.5rem",
                      }}
                    >
                      <Form onFinish={updatePostComment(item)}>
                        <Form.Item name="content">
                          <Input
                            rows={3}
                            value={item.content}
                            style={{
                              width: "37rem",
                              height: "5rem",
                            }}
                          />
                        </Form.Item>
                      </Form>
                    </li>
                    <li style={{ width: "45rem" }}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={() => {
                            setCommentNum(false);
                          }}
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
                ) : (
                  <li>
                    {CommentUserChecked ? (
                      <li>
                        <button
                          onClick={() => {
                            setParentId(item.id);
                          }}
                        >
                          답글
                        </button>
                        <button
                          onClick={() => {
                            setCommentNum(item.id);
                          }}
                        >
                          수정
                        </button>
                        <button
                          onClick={() => {
                            removePostComment(item);
                          }}
                        >
                          삭제
                        </button>
                      </li>
                    ) : (
                      <li>
                        <button
                          onClick={() => {
                            setParentId(item.id);
                          }}
                        >
                          답글
                        </button>
                      </li>
                    )}
                  </li>
                )}
              </li>
              <List
                dataSource={item.children}
                renderItem={(v) => {
                  return (
                    <List.Item>
                      {v === [] ? (
                        <></>
                      ) : (
                        <List.Item>
                          <li>
                            {v.id}
                            {v.content}
                          </li>
                        </List.Item>
                      )}
                    </List.Item>
                  );
                }}
              />
              {parentId === item.id ? (
                <ul style={{ listStyle: "none" }}>
                  <li
                    onClick={() => {
                      setParentId(false);
                    }}
                  >
                    <button>취소</button>
                  </li>
                  <li
                    style={{
                      float: "left",
                      width: "38rem",
                      marginTop: "2rem",
                      marginLeft: "-2.5rem",
                    }}
                  >
                    <Form onFinish={updatePostComment(item)}>
                      <Form.Item name="content">
                        <Input
                          rows={3}
                          value={item.content}
                          style={{
                            width: "37rem",
                            height: "5rem",
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </li>
                  <li style={{ width: "45rem" }}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                          setCommentNum(false);
                        }}
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
              ) : (
                <></>
              )}
            </ul>
          </List.Item>
        );
      }}
    />
  );
};

export default ToggleInput;
