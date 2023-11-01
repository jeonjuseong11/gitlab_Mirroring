import axios from "axios";
import { Col, List, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOAD_FEEDBACK_LIST_REQUEST } from "../../constants/actionTypes";
import { ListCol } from "../../styles/\bFeedbackStyle";

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
    <div
      style={{
        maxWidth: "64rem",
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Row
        justify={"center"}
        style={{
          borderBottom: "2px solid black",
          alignItems: "center",
        }}
      >
        <ListCol
          xs={2}
          md={2}
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          작성자
        </ListCol>
        <ListCol
          xs={19}
          md={19}
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          제목
        </ListCol>
        <ListCol
          xs={2}
          md={2}
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          답변 여부
        </ListCol>
      </Row>
      <List
        pagination={{ align: "center" }}
        dataSource={feedbackList}
        renderItem={(item) => {
          return (
            <Row justify={"center"} style={{ borderBottom: "1px solid gray" }}>
              <ListCol
                xs={2}
                md={2}
                onClick={() => {
                  navigate(`/feedback/${item.id}`);
                }}
              >
                {item.userName}
              </ListCol>
              <ListCol
                xs={19}
                md={19}
                onClick={() => {
                  navigate(`/feedback/${item.id}`);
                }}
              >
                {item.title}
              </ListCol>
              <ListCol
                xs={2}
                md={2}
                onClick={() => {
                  navigate(`/feedback/${item.id}`);
                }}
              >
                {item.response ? <>ㅇ</> : <>x</>}
              </ListCol>
            </Row>
          );
        }}
      />
    </div>
  );
};

export default FeedbackList;
