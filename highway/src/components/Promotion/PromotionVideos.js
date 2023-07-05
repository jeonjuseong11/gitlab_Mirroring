import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, List, Row } from "antd";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const PromotionVideos = () => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const onMore = () => {
    setCount(count + 3);
  };
  useEffect(() => {
    if (count >= videoList.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [count]);
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={10}>
          <List
            itemLayout="horizontal"
            dataSource={videoList}
            renderItem={(item) => {
              if (item.id < count)
                return (
                  <List.Item
                    style={{
                      padding: "2rem",
                      marginLeft: "1rem",
                      borderBottom: "1px solid #f2f2f2",
                    }}
                  >
                    <Link to={`/promotion/videos/${item.id}`}>
                      <img
                        src={item.image}
                        style={{
                          height: "9rem",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>

                    <Col xs={24} md={15}>
                      <List.Item.Meta
                        title={
                          <div
                            style={{
                              textAlign: "left",
                              marginLeft: "2rem",
                            }}
                          >
                            <Link to={`/promotion/videos/${item.id}`}>
                              <h2 style={{ color: "black" }}>{item.title}</h2>
                            </Link>
                          </div>
                        }
                        description={
                          <div
                            style={{ textAlign: "left", marginLeft: "2rem" }}
                          >
                            <Link to={`/promotion/videos/${item.id}`}>
                              <p style={{ color: "gray" }}>{item.content}</p>
                            </Link>
                          </div>
                        }
                      />
                    </Col>
                  </List.Item>
                );
            }}
          />
        </Col>
        <Col xs={23} md={5} justify="center">
          <div
            style={{
              width: "20rem",
              height: "30rem",
              backgroundColor: "#f2f2f2",
              marginTop: "2rem",
              marginLeft: "1.5rem",
              borderRadius: "10px",
            }}
          >
            우측사이드
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={23} md={23} justify="center">
          <Button
            onClick={onMore}
            disabled={disable}
            style={{ marginBottom: "2rem", marginTop: "2rem" }}
          >
            <DownOutlined />더 보기
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PromotionVideos;
