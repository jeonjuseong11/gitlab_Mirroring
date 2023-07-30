import { SearchOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import { BoardSearchInput } from "../../styles/BoardStyle";

const BoardMainSearchInput = () => {
  return (
    <Col xs={24} md={10}>
      <BoardSearchInput
        className="custom-inputs"
        prefix={<SearchOutlined />}
        placeholder="관심있는 내용을 검색해보세요"
      />
    </Col>
  );
};

export default BoardMainSearchInput;
