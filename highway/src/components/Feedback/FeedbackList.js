import { List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOAD_FEEDBACK_LIST_REQUEST } from "../../constants/actionTypes";

const FeedbackList = () => {
  const { feedbackList } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: LOAD_FEEDBACK_LIST_REQUEST,
    });
  }, []);
  return (
    <div>
      <List
        dataSource={feedbackList}
        renderItem={(item) => {
          return (
            <div
              onClick={() => {
                navigate(`/feedback/${item.id}`);
              }}
            >
              {item.title}
            </div>
          );
        }}
      />
    </div>
  );
};

export default FeedbackList;
