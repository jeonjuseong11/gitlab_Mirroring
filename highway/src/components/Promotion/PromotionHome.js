import React from "react";
import AppLayout from "../AppLayout";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Image, List, Menu } from "antd";

const PromotionHome = () => {
  const location = useLocation();
  return (
    <div>
      <AppLayout>
        <h2>첫 번째 test 제목</h2>
        <List
          itemLayout="horizontal"
          dataSource={newsList}
          renderItem={(item) => (
            <List.Item>
              <Image preview={false} width={277} height={122} src={item.src} />
              <List.Item.Meta
                title={
                  <Link to={`/promotion/news/${item.newsId}`}>
                    {item.newsTitle}
                  </Link>
                }
                description={item.newsContent}
              />
            </List.Item>
          )}
        />
      </AppLayout>
    </div>
  );
};

export default PromotionHome;
