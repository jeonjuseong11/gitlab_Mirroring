import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, List, Row, Col } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

const PromotionHomeItem = ({ random, title, type, infoData, xs, md }) => {
  const [count, setCount] = useState(4);
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={xs} md={md} justify="center">
          <h2>{title}</h2>
        </Col>
        <Col xs={xs} md={md}>
          <Link to={`/promotion/${type}`}>
            <Button
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
              icon={<RightCircleFilled />}
            >
              더보기
            </Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={xs} md={md}>
          <Link to={`/promotion/${type}/${random}`}>
            <div
              style={{
                width: "21rem",
                height: "18rem",
                borderRadius: "10px",
                background: "#f2f2f2",
                padding: "0px",
              }}
            />
          </Link>
        </Col>
        <Col xs={xs} md={md} justify="center">
          <List
            itemLayout="horizontal"
            dataSource={infoData}
            renderItem={(item) => {
              if (item.id < count) {
                return (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <Link to={`/promotion/${type}/${item.id}`}>
                          <p>{item.title}</p>
                        </Link>
                      }
                    />
                  </List.Item>
                );
              }
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PromotionHomeItem;
