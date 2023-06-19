import { Col, ConfigProvider, Empty, Input, List, Row } from "antd";
import React, { useState } from "react";

const SchoolBoardDetailReplys = ({ info, me }) => {
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

  const [customize, setCustomize] = useState(true);
  const customizeRenderEmpty = () => <div style={{ height: "0px" }}></div>;
  return (
    <>
      <ConfigProvider
        renderEmpty={customize ? customizeRenderEmpty : undefined}
      >
        <List
          dataSource={info.children}
          renderItem={(v) => {
            const ReplyCheck = userCheck(v);
            return (
              <List.Item
                style={{
                  padding: "0px",
                  background: "#f2f2f2",
                  borderBottom: "1px solid #d2d2d2",
                  borderTop: "1px solid #d2d2d2",
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
                            <ul style={{ listStyle: "none" }}>
                              {parentId !== v.id ? (
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
                                      setCommentNum(v.id);
                                      setParentId(false);
                                    }}
                                  >
                                    수정
                                  </li>
                                  {/* <li
                                  style={{
                                    float: "right",
                                  }}
                                  onClick={() => {
                                    setParentId(v.id);
                                    setCommentNum(false);
                                  }}
                                >
                                  답
                                </li> */}
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
                          {parentId !== v.id ? (
                            <></>
                          ) : (
                            //   <li
                            //     style={{
                            //       float: "right",
                            //     }}
                            //     onClick={() => {
                            //       setParentId(v.id);
                            //       setCommentNum(false);
                            //     }}
                            //   >
                            //     답
                            //   </li>
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
                      )}
                    </Row>
                    <Row>
                      {commentNum === v.id ? (
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
                          {v.content}
                        </Col>
                      )}
                    </Row>
                    {/* <Row>
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
                  </Row> */}
                  </Col>
                </Row>
              </List.Item>
            );
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default SchoolBoardDetailReplys;
