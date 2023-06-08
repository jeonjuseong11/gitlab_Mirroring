import React, { useEffect, useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link } from "react-router-dom";
import { Button, Image, List } from "antd";
import { DownOutlined } from "@ant-design/icons";

const PromotionNews = () => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
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
      <ul style={{ listStyle: "none", width: "100%" }}>
        <li>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => {
              if (item.newsId < count)
                return (
                  <List.Item
                    style={{ width: "70%", padding: "3%", marginLeft: "-4%" }}
                  >
                    <Link to={`/promotion/news/${item.newsId}`}>
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
                          <Link to={`/promotion/news/${item.newsId}`}>
                            <h2 style={{ color: "black" }}>{item.newsTitle}</h2>
                          </Link>
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "left", marginLeft: "5%" }}>
                          <Link to={`/promotion/news/${item.newsId}`}>
                            <p style={{ color: "gray" }}>{item.newsContent}</p>
                          </Link>
                        </div>
                      }
                    />
                  </List.Item>
                );
            }}
          />
        </li>
        <li
          style={{
            width: "25%",
            height: "500px",
            backgroundColor: "#d2d2d2",
            marginLeft: "75%",
            marginTop: "-51%",
            borderRadius: "5%",
          }}
        >
          우측사이드
        </li>
      </ul>
      <Button
        onClick={onMore}
        disabled={disable}
        style={{ marginBottom: "2%", marginTop: "2%" }}
      >
        <DownOutlined />더 보기
      </Button>
    </>
  );
};

export default PromotionNews;
