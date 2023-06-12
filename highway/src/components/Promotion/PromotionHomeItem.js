import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, List, Row, Col, Image } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

const PromotionHomeItem = ({ random, title, type, infoData }) => {
  const [count, setCount] = useState(4);
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={24}>
          <ul style={{ listStyle: "none", width: "60rem", marginLeft: "6rem" }}>
            <li>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "55rem", marginLeft: "-18rem" }}>
                  <h2 style={{ width: "100%" }}>{title}</h2>
                </div>
                <div style={{ marginLeft: "8rem", marginTop: "1.2rem" }}>
                  <Link to={`/promotion/${type}`}>
                    <Button icon={<RightCircleFilled />}>더보기</Button>
                  </Link>
                </div>
              </div>
            </li>
            <li style={{ float: "left" }}>
              <div>
                <Link to={`/promotion/${type}/${random}`}>
                  <Image
                    width={100 * 4}
                    height={100 * 3}
                    preview={false}
                    src={`${infoData[random].src}`}
                    style={{
                      borderRadius: "5%",
                      marginLeft: "1rem",
                    }}
                  />
                </Link>
              </div>
            </li>
            <li
              style={{
                width: "60rem",
                marginLeft: "-9rem",
                textAlign: "left",
              }}
            >
              <List
                itemLayout="horizontal"
                dataSource={infoData}
                renderItem={(item) => {
                  console.log(item);
                  if (item.id < count) {
                    return (
                      <List.Item style={{ marginLeft: "40rem" }}>
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
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default PromotionHomeItem;
