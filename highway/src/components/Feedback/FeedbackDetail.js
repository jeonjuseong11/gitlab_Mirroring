import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  LOAD_FEEDBACK_LIST_REQUEST,
  REMOVE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_REQUEST,
} from "../../constants/actionTypes";

const FeedbackDetail = () => {
  const { id } = useParams();
  const { feedbackList } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const feedbackListMap = feedbackList.map((item) => {
    if (item.id === parseInt(id)) {
      return item;
    }
  });

  const feedbackItem = feedbackListMap.filter((it) => it !== undefined)[0];
  console.log(feedbackItem);

  const onUpdateFeedback = () => {
    dispatch({
      type: UPDATE_FEEDBACK_REQUEST,
      data: {
        id: id,
        title: feedbackItem.title,
        content: feedbackItem.content,
        category: feedbackItem.category,
        response: "임시 수정내용",
      },
    });
  };

  const onRemoveFeedback = (values) => {
    console.log(id);
    dispatch({
      type: REMOVE_FEEDBACK_REQUEST,
      data: {
        id: id,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: LOAD_FEEDBACK_LIST_REQUEST,
    });
  }, []);
  return (
    <div>
      <div>제목 : {feedbackItem?.title}</div>
      <div>내용 : {feedbackItem?.content}</div>
      <div>카테고리 : {feedbackItem?.category}</div>
      <div>답변 : {feedbackItem?.response}</div>
      <div>
        <button
          onClick={() => {
            onUpdateFeedback();
          }}
        >
          업데이트
        </button>
        <button
          onClick={() => {
            onRemoveFeedback();
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default FeedbackDetail;
