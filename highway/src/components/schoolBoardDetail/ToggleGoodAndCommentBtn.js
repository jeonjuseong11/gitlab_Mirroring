import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartTwoTone, MessageOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";

const ToggleGoodAndCommentBtn = () => {
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const [good, setGood] = useState(false);
  const { likePostLoading, unlikePostLoading, schoolBoardPostComments, schoolBoardPost, Likers } =
    useSelector((state) => state.post);
  useEffect(() => {
    const isLikedByUser = Likers.some((liker) => {
      return liker.uid === me.userId;
    });

    setGood(isLikedByUser);
  }, [Likers, schoolBoardPost, me]);
  const dispatch = useDispatch();
  const filteredComments = schoolBoardPostComments.filter((item) => !item.isDeleted);

  const { postId } = useParams();

  const likePost = () => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: { boardId: postId },
    });
    setGood(true);
  };
  const unlikePost = () => {
    const userLiker = Likers.find((liker) => liker.uid === me.userId);
    if (!userLiker) return; // 현재 사용자가 좋아요 목록에 없으면 함수 종료

    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: { boardId: postId, heartId: userLiker.heartId },
    });
    setGood(false);
  };
  const handleButtonClick = () => {
    navigate(`/schoolboard/${schoolBoardPost?.board.category}`);
  };
  return (
    <>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 15 }} style={{ textAlign: "left" }}>
        {good ? (
          <Button type="text" onClick={unlikePost} loading={likePostLoading}>
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" />
            좋아요 {Likers?.length}
          </Button>
        ) : (
          <Button type="text" onClick={likePost} loading={unlikePostLoading}>
            <HeartOutlined key="heart" /> 좋아요 {Likers?.length}
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
