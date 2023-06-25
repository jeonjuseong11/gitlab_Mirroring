import { Col, Input, List, Row } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { needLogin } from "../../utils/Message";
import CommentCancleBtn from "../CommnetBtn/CommentCancleBtn";
import CommentRUBtn from "../CommnetBtn/CommentRUBtn";

const SchoolBoardDetailReplys = ({
  info,
  removePostComment,
  updatePostComment,
  linkLogin,
}) => {
  const { me } = useSelector((state) => state.user);
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
    <List
      dataSource={info.children}
      renderItem={(v) => {
        const ReplyCheck = userCheck(v);
        return (
          <List.Item
            style={{
              padding: "0px",
              background: "#f2f2f2",
              borderTop: "1px solid #d2d2d2",
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
                {v.userId}
              </Col>
              {ReplyCheck ? (
                <Col
                  style={{
                    textAlign: "right",
                    marginTop: "1rem",
                  }}
                >
                  {commentNum !== v.id ? (
                    <ul style={{ listStyle: "none" }}>
                      {parentId !== v.id ? (
                        <CommentRUBtn
                          item={v}
                          setCommentNum={setCommentNum}
                          setParentId={setParentId}
                          removePostComment={removePostComment}
                        />
                      ) : (
                        <CommentCancleBtn
                          setCommentNum={setCommentNum}
                          setParentId={setParentId}
                        />
                      )}
                    </ul>
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
                  {parentId !== v.id ? (
                    <></>
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
              {commentNum === v.id ? (
                <Col>
                  <Input
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (me === null) {
                          needLogin(linkLogin);
                        } else {
                          updatePostComment(e.target.value);
                        }
                      }
                    }}
                    name="InputContent"
                    style={{
                      marginTop: "1rem",
                      marginLeft: "1rem",
                      marginBottom: "1rem",
                    }}
                    placeholder="수정 내용을 적어주세요"
                  />
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
                  {v.content}
                </Col>
              )}
            </Row>
          </List.Item>
        );
      }}
    />
  );
};

export default SchoolBoardDetailReplys;
