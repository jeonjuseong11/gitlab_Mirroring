import React, { useState } from "react";
import {
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  MessageTwoTone,
} from "@ant-design/icons";
import { Button, Col } from "antd";
import CommentDummyDatas from "../../utils/CommentDummyDatas";

const ToggleGoodAndCommentBtn = ({ toggle, setToggle }) => {
  const [good, setGood] = useState(false);
  const onToggleGoods = () => {
    setGood(!good);
  };
  return (
    <Col xs={23} md={11}>
      <div style={{ display: "inline-block", float: "left" }}>
        {good ? (
          <Button type="text" onClick={onToggleGoods}>
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleGoods}
            />
            좋아요{" "}
            {good
              ? CommentDummyDatas.data.length + 1
              : CommentDummyDatas.data.length}
          </Button>
        ) : (
          <Button type="text" onClick={onToggleGoods}>
            <HeartOutlined key="heart" /> 좋아요{" "}
            {good
              ? CommentDummyDatas.data.length + 1
              : CommentDummyDatas.data.length}
          </Button>
        )}
        {!toggle ? (
          <Button
            style={{ marginLeft: "1rem" }}
            type="text"
            onClick={() => {
              setToggle(!toggle);
            }}
            icon={<MessageOutlined />}
          >
            댓글 {CommentDummyDatas.data.length}
          </Button>
        ) : (
          <Button
            style={{ marginLeft: "1rem" }}
            type="text"
            onClick={() => {
              setToggle(!toggle);
            }}
            icon={<MessageTwoTone twoToneColor="#8282ff" />}
          >
            <span
              style={{
                color: !toggle ? "black" : "#8282ff",
                fontWeight: !toggle ? "" : "700",
              }}
            >
              댓글 {CommentDummyDatas.data.length}
            </span>
          </Button>
        )}
      </div>
    </Col>
  );
};

export default ToggleGoodAndCommentBtn;
