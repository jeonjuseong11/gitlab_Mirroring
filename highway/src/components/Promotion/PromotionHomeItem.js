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
          <ul style={{ listStyle: "none", width: "75%", marginLeft: "7%" }}>
            <li>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "90%", marginLeft: "-30%" }}>
                  <h2 style={{ width: "100%" }}>{title}</h2>
                </div>
                <div style={{ marginLeft: "12.5%", marginTop: "2.5%" }}>
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
              style={{ width: "100%", marginLeft: "-15%", textAlign: "left" }}
            >
              <List
                itemLayout="horizontal"
                dataSource={infoData}
                renderItem={(item) => {
                  console.log(item);
                  if (item.id < count) {
                    return (
                      <List.Item style={{ marginLeft: "67.5%" }}>
                        <List.Item.Meta
                          title={
                            <Link to={`/promotion/${type}/${item.id}`}>
                              <p>{item.title}</p>
                            </Link>
                          }
                          style={{ marginLeft: "15%" }}
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
