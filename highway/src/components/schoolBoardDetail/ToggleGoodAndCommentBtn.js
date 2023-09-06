import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartTwoTone, MessageOutlined, MessageTwoTone } from "@ant-design/icons";
import { Button, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";

const ToggleGoodAndCommentBtn = () => {
  const navigate = useNavigate();
  const { schoolBoardPost } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const { likePostLoading, unlikePostLoading, schoolBoardPostComments } = useSelector(
    (state) => state.post
  );
  const filteredComments = schoolBoardPostComments.filter((item) => !item.isDeleted);

  const [good, setGood] = useState(false);
  const { postId } = useParams();
  useEffect(() => {
    if (schoolBoardPost) {
      setGood(schoolBoardPost.heart == null ? false : true);
    }
  }, [schoolBoardPost]);
  const likePost = () => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: { boardId: postId },
    });
    setGood(true);
  };
  const unlikePost = () => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: { boardId: postId, heartId: schoolBoardPost.heart.id },
    });
    setGood(false);
  };
  const handleButtonClick = () => {
    // 이 버튼을 클릭할 때 원하는 페이지로 이동하도록 navigate 함수를 호출합니다.
    navigate(`/schoolboard/${schoolBoardPost?.board.category}`); // '/your-desired-route'는 이동하고 싶은 경로에 맞게 변경하세요.
  };
  return (
    <>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 15 }} style={{ textAlign: "left" }}>
        {good ? (
          <Button type="text" onClick={unlikePost} loading={likePostLoading}>
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" />
            좋아요
          </Button>
        ) : (
          <Button type="text" onClick={likePost} loading={unlikePostLoading}>
            <HeartOutlined key="heart" /> 좋아요
          </Button>
        )}
        <Button style={{ marginLeft: "1rem" }} type="text" icon={<MessageOutlined />}>
          댓글 {filteredComments.length}
        </Button>
        <Button style={{ float: "right" }} onClick={handleButtonClick}>
          목록
        </Button>
      </Col>
    </>
  );
};

export default ToggleGoodAndCommentBtn;
