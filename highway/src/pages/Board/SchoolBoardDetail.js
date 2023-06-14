import {
  CommentOutlined,
  FieldTimeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Button, Descriptions, Input, List, Row, Form, Col } from "antd";
import React, { useEffect, useState } from "react";
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
import CommentDummyData, {
  CommentDummyDatas,
} from "../../utils/CommentDummyDatas";
import SchoolBoardMenu from "../../components/schoolBoardDetail/SchoolBoardMenu";
import ToggleComment from "../../components/schoolBoardDetail/ToggleComment";

const dummyboardData = [
  {
    id: 1,
    category: 1,
    content: "테스트 내용1",
    createData: moment,
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
  const [parentId, setParentId] = useState(null);
  const postId = 1;
  const loadPostComments = () => {
    console.log("loadPostCommnets");
    dispatch({
      type: LOAD_POST_COMMENTS_REQUEST,
      data: {
        boardId: postId,
      },
    });
  };

  return (
    <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
      <SchoolBoardMenu />
      <Col xs={23} md={11} style={{ textAlign: "left" }}>
        <h2>{dummyboardData[postId - 1].title}</h2>
        <ul
          style={{
            listStyle: "none",
            marginLeft: "-2.5rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>
            작성자 : {dummyboardData[postId - 1].userId}
          </li>
          <li style={{ float: "left" }}>
            {dummyboardData[postId - 1].createData}
          </li>
          <li style={{ float: "left" }}>{CommentDummyData.length}</li>
          <li style={{ marginBottom: "2.5rem" }}>
            {dummyboardData[postId - 1].good}
          </li>
          <hr />
          {dummyboardData[postId - 1].content}
        </ul>
      </Col>
      <ToggleComment />
    </Row>
  );
};
export default SchoolBoardDetail;
