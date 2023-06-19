import { Col, Input, List, Row } from "antd";
import React, { useState } from "react";
import CommentDummyDatas from "../../utils/CommentDummyDatas";
import SchoolBoardDetailReplys from "./SchoolBoardDetailReplys";

const SchoolBoardDetailComments = () => {
  const me = { userId: "admin" };
  const [commentNum, setCommentNum] = useState(false);
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
  return (
    <Col style={{ marginBottom: "2rem" }}>
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
                          <ul style={{ listStyle: "none" }}>
                            {parentId !== item.id ? (
                              <ul
                                style={{
                                  listStyle: "none",
                                  color: "#a2a2a2",
                                  fontSize: "0.8rem",
                                  marginRight: "1rem",
                                }}
                              >
                                <li
                                  style={{
                                    float: "right",
                                    marginLeft: "0.5rem",
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
                                <li
                                  style={{
                                    float: "right",
                                    color: "#a2a2a2",
                                    fontSize: "0.8rem",
                                    marginRight: "1rem",
                                  }}
                                  onClick={() => {
                                    setParentId(item.id);
                                    setCommentNum(false);
                                  }}
                                >
                                  답장
                                </li>
                              </ul>
                            ) : (
                              <li
                                style={{
                                  float: "right",
                                  color: "#a2a2a2",
                                  fontSize: "0.8rem",
                                  marginRight: "1rem",
                                }}
                                onClick={() => {
                                  setCommentNum(false);
                                  setParentId(false);
                                }}
                              >
                                취소
                              </li>
                            )}
                          </ul>
                        ) : (
                          <li
                            style={{
                              float: "right",
                              color: "#a2a2a2",
                              fontSize: "0.8rem",
                              marginRight: "1rem",
                            }}
                            onClick={() => {
                              setCommentNum(false);
                              setParentId(false);
                            }}
                          >
                            취소
                          </li>
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
                          <li
                            style={{
                              float: "right",
                              marginTop: "1rem",
                              color: "#a2a2a2",
                              fontSize: "0.8rem",
                              marginRight: "1rem",
                            }}
                            onClick={() => {
                              setParentId(item.id);
                              setCommentNum(false);
                            }}
                          >
                            답장
                          </li>
                        ) : (
                          <li
                            style={{
                              marginTop: "1rem",
                              color: "#a2a2a2",
                              fontSize: "0.8rem",
                              marginRight: "1rem",
                            }}
                            onClick={() => {
                              setCommentNum(false);
                              setParentId(false);
                            }}
                          >
                            취소
                          </li>
                        )}
                      </Col>
                    )}
                  </Row>
                  <Row>
                    {commentNum === item.id ? (
                      <Col xs={23} md={23}>
                        <Input
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
                        xs={23}
                        md={23}
                        style={{
                          textAlign: "left",
                          marginLeft: "1.4rem",
                          marginTop: "1rem",

                          marginBottom: "1rem",
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
                            marginTop: "1rem",
                            marginLeft: "1rem",
                            marginBottom: "1rem",
                          }}
                          placeholder="답장을 적어주세요"
                        ></Input>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                  <SchoolBoardDetailReplys info={item} me={me} />
                </Col>
              </Row>
            </List.Item>
          );
        }}
      />
    </Col>
  );
};

export default SchoolBoardDetailComments;
