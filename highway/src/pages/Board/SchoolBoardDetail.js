import {
  CommentOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Button, Col, Descriptions, Input, List, Row, Form } from "antd";
import React, { useCallback, useEffect } from "react";
import BoardMenu from "../../components/Board/BoardMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COMMENT_REQUEST,
  LOAD_POST_COMMENTS_REQUEST,
} from "../../constants/actionTypes";
import moment from "moment";
import { useParams } from "react-router-dom";
import BoardProfile from "../../components/Board/BoardProfile";

const dummyboardData = [
  {
    postId: 1,
    title: "테스트1",
    userName: "홍길동",
    userId: "admin",
    content: "테스트 내용1",
    views: "10",
    good: 24,
    Date: "1시간전",
  },
  {
    postId: 2,
    title: "테스트2",
    userName: "이순신",
    userId: "test",
    content: "테스트 내용2",
    views: "13",
    good: 20,
    Date: "2시간전",
  },
  {
    postId: 3,
    title: "테스트3",
    userName: "김유신",
    userId: "test",
    content: "테스트 내용3",
    views: "14",
    good: 14,
    Date: "2시간전",
  },
];

const dummyCommentData = [
  {
    commentListId: 1,
    commentId: 1,
    schoolName: "ㅇㅇ인터넷고등학교",
    userName: "김빵빵",
    content: "댓글 내용1",
    good: 15,
    recommned: ["좋은글이네요", "좋아요"],
    Date: "1시간전",
  },
  {
    commentListId: 1,
    commentId: 2,
    schoolName: "ㅇㅇ디자인고등학교",
    userName: "테스트",
    content: "댓글 내용2",
    good: 2,
    recommned: ["좋은글인듯합니다", "좋네요"],
    Date: "2시간전",
  },
  {
    commentListId: 1,
    commentId: 3,
    schoolName: "ㅇㅇ회계고등학교",
    userName: "김예시",
    content: "댓글 내용3",
    good: 3,
    recommned: ["좋은글감사합니다", "정말 좋네요"],
    Date: "58분전",
  },
  {
    commentListId: 1,
    commentId: 4,
    schoolName: "ㅇㅇ회계고등학교",
    userName: "김예시",
    content: "댓글 내용4",
    good: 3,
    recommned: ["좋은글감사합니다", "정말 좋네요"],
    Date: "58분전",
  },
];

const dummyReCommentData = [
  {
    reCommnedId: 1,
    reCommnedContent: "대댓글1",
    userName: "김뿡뿡",
    good: 1,
    Date: "1시간전",
  },
  {
    reCommnedId: 2,
    reCommnedContent: "대댓글2",
    userName: "김말숙",
    good: 1,
    Date: "1시간전",
  },
];

const SchoolBoardDetail = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPostComments } = useSelector((state) => state.post);
  const { postId } = useParams();
  const loadPostComments = () => {
    dispatch({
      type: LOAD_POST_COMMENTS_REQUEST,
      data: {
        boardId: postId,
      },
    });
  };
  const onFinish = (values) => {
    console.log(values);
    if (!values) {
      alert("빈칸이 있습니다.");
      return;
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        content: values.content,
        boardId: postId,
      },
    });
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
            <Descriptions title={dummyboardData[postId - 1].title}>
              <Descriptions.Item label="작성자">
                {dummyboardData[postId - 1].userName}
              </Descriptions.Item>
              <Descriptions.Item style={{ color: "red" }}>
                <FieldTimeOutlined style={{ marginLeft: "2%" }} />
                {dummyboardData[postId - 1].Date}
                <EyeOutlined style={{ marginLeft: "2%" }} />
                {dummyboardData[postId - 1].views}
                <LikeOutlined style={{ marginLeft: "2%" }} />
                {dummyboardData[postId - 1].good}
                <CommentOutlined style={{ marginLeft: "2%" }} />
                {dummyCommentData.length}
              </Descriptions.Item>
            </Descriptions>
            <hr />
            <Descriptions>
              <Descriptions.Item>
                {dummyboardData[postId - 1].content}
              </Descriptions.Item>
              <Descriptions.Item>
                <LikeOutlined style={{ marginLeft: "2%" }} />
                {dummyboardData[postId - 1].good}
                <CommentOutlined style={{ marginLeft: "2%" }} />
                {dummyCommentData.length}
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
                          marginLeft: "2%",
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
                dataSource={dummyCommentData}
                renderItem={(item) => (
                  <List.Item>
                    {item.schoolName}
                    <br />
                    {item.userName}
                    <br />
                    {item.content}
                    <br />
                    <FieldTimeOutlined />
                    {item.Date}
                    <br />
                    <LikeOutlined />
                    {item.good}
                    <br />
                    {me ? (
                      <>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            alert("답글");
                          }}
                        >
                          답글
                        </button>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            alert("수정");
                          }}
                        >
                          수정
                        </button>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            alert("삭제");
                          }}
                        >
                          삭제
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          style={{ background: "none", border: "none" }}
                          onClick={() => {
                            alert("답글");
                          }}
                        >
                          대댓글달기
                        </button>
                      </>
                    )}
                  </List.Item>
                )}
              />
            </div>
            <Button>더 보기</Button>
          </li>
        </ul>
      </Row>
    </>
  );
};
export default SchoolBoardDetail;
