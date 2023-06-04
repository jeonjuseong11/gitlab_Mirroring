import React, { useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, List, Row, Col, Image } from "antd";
import { RightCircleFilled } from "@ant-design/icons";

const PromotionHomeItem = ({ random, title }) => {
  const [count, setCount] = useState(6);
  const location = useLocation();
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <ul style={{ listStyle: "none", width: "75%" }}>
          <li>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "90%", marginLeft: "-30%" }}>
                <h2 style={{ width: "100%" }}>{title}</h2>
              </div>
              <div style={{ marginLeft: "12.5%", marginTop: "2.5%" }}>
                <Link to={`/promotion/news`}>
                  <Button icon={<RightCircleFilled />}>더보기</Button>
                </Link>
              </div>
            </div>
          </li>
          <li style={{ float: "left" }}>
            <div>
              <Link to={`news/${random}`}>
                <Image
                  width={100 * 4}
                  height={100 * 3}
                  preview={false}
                  src={`${newsList[random].src}`}
                  style={{
                    borderRadius: "5%",
                  }}
                />
              </Link>
            </div>
          </li>
          <li style={{ width: "100%", marginLeft: "-15%" }}>
            <List
              itemLayout="horizontal"
              dataSource={newsList}
              renderItem={(item) => {
                if (item.newsId < count) {
                  return (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <Link to={`/promotion/news/${item.newsId}`}>
                            {item.newsTitle}
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
      </Row>
    </>
  );
};

export default PromotionHomeItem;
