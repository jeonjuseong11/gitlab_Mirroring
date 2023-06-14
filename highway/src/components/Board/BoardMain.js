import React from "react";
import { SearchOutlined } from "@ant-design/icons";

import BoardMiddleList from "../../components/Board/BoardMiddleList";
import BoardSmallList from "../../components/Board/BoardSmallList";
import { Col, Input, Row } from "antd";

export const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const BoardMain = () => {
  return (
    <>
      <Col xs={24} md={10}>
        <BoardMiddleList data={data} />
      </Col>
    </>
  );
};
export default BoardMain;
