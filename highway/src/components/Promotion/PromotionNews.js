import React, { useEffect, useState } from "react";
import AppLayout from "../AppLayout";
import newsList from "../../utils/NewsDummyData";
import { Link } from "react-router-dom";
import { Button, Image, List } from "antd";

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
    <AppLayout>
      <List
        itemLayout="horizontal"
        dataSource={newsList}
        renderItem={(item) => {
          if (item.newsId < count)
            return (
              <List.Item>
                <Image
                  preview={false}
                  width={277}
                  height={122}
                  src={item.src}
                  style={{
                    borderRadius: "5%",
                  }}
                />
                <List.Item.Meta
                  title={
                    <Link to={`/promotion/news/${item.newsId}`}>
                      {item.newsTitle}
                    </Link>
                  }
                  description={item.newsContent}
                />
              </List.Item>
            );
        }}
      />
      <button onClick={onMore} disabled={disable}>
        더 보기
      </button>
    </AppLayout>
  );
};

export default PromotionNews;
