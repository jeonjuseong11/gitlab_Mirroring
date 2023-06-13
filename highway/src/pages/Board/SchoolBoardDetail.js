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
import ToggleInput from "../../components/schoolBoardDetail/ToggleInput";

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
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const schoolBoardPostCommentsData = schoolBoardPostComments.data;
  const [replyComment, setReplyCommnet] = useState([]);
  const { postId } = useParams();
  const [parentId, setParentId] = useState(null);
  const [commentNum, setCommentNum] = useState(false);
  const [commnetCount, setCommentCount] = useState(0);

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
              <ToggleInput />
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
