import React, { useEffect, useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, Image, List, Menu } from "antd";
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
      <ul style={{ listStyle: "none", width: "100%" }}>
        <li
          style={{
            width: "20rem",
            height: "500px",
            backgroundColor: "#d2d2d2",
            marginLeft: "75%",
            marginTop: "3%",
            borderRadius: "5%",
          }}
        >
          우측사이드
        </li>
        <li style={{ marginTop: "-41%" }}>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => {
              if (item.id < count)
                return (
                  <List.Item
                    style={{
                      width: "70%",
                      padding: "3%",
                      marginLeft: "-4%",
                    }}
                  >
                    <Link to={`/promotion/news/${item.id}`}>
                      <Image
                        preview={false}
                        width={277}
                        height={122}
                        src={item.src}
                        style={{
                          borderRadius: "5%",
                        }}
                      />
                    </Link>
                    <List.Item.Meta
                      title={
                        <div
                          style={{
                            textAlign: "left",
                            marginLeft: "5%",
                          }}
                        >
                          <Link to={`/promotion/news/${item.id}`}>
                            <h2 style={{ color: "black" }}>{item.title}</h2>
                          </Link>
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "left", marginLeft: "5%" }}>
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
        style={{ marginBottom: "2%", marginTop: "5%" }}
      >
        <DownOutlined />더 보기
      </Button>
    </>
  );
};

export default PromotionNews;
