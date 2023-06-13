import React, { useEffect, useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, List, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import RecommendList from "./RecommendList";
import { items } from "../../utils/PromotionList";

const PromotionNews = () => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const onMore = () => {
    setCount(count + 3);
  };
  useEffect(() => {
    if (count >= newsList.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [count]);
  return (
    <>
      <RecommendList type={"news"} infoData={newsList} />
      <Menu mode="horizontal" items={items} selectedKeys={location.pathname} />
      <ul style={{ listStyle: "none", width: "78.5rem" }}>
        <li
          style={{
            width: "20rem",
            height: "30rem",
            backgroundColor: "#f2f2f2",
            marginLeft: "59rem",
            marginTop: "3rem",
            borderRadius: "10px",
          }}
        >
          우측사이드
        </li>
        <li style={{ marginTop: "-31rem" }}>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => {
              if (item.id < count)
                return (
                  <List.Item
                    style={{
                      width: "60rem",
                      padding: "2rem",
                      marginLeft: "-4rem",
                    }}
                  >
                    <Link to={`/promotion/news/${item.id}`}>
                      <div
                        preview={false}
                        src={item.src}
                        style={{
                          width: "15rem",
                          height: "9rem",
                          borderRadius: "10px",
                          background: "#f2f2f2",
                        }}
                      />
                    </Link>
                    <List.Item.Meta
                      title={
                        <div
                          style={{
                            textAlign: "left",
                            marginLeft: "2rem",
                          }}
                        >
                          <Link to={`/promotion/news/${item.id}`}>
                            <h2 style={{ color: "black" }}>{item.title}</h2>
                          </Link>
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "left", marginLeft: "2rem" }}>
                          <Link to={`/promotion/news/${item.id}`}>
                            <p style={{ color: "gray" }}>{item.content}</p>
                          </Link>
                        </div>
                      }
                    />
                  </List.Item>
                );
            }}
          />
        </li>
      </ul>
      <Button
        onClick={onMore}
        disabled={disable}
        style={{ marginBottom: "2rem", marginTop: "2rem" }}
      >
        <DownOutlined />더 보기
      </Button>
    </>
  );
};

export default PromotionNews;
