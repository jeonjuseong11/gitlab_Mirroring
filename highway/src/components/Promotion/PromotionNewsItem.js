import React from "react";
import newsList from "../../utils/NewsDummyData";
import { Link } from "react-router-dom";
import { List } from "antd";
import { PromotionNewsDetailItemDiv } from "../../styles/PromotionStyle";

const PromotionNewsItem = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={newsList}
      renderItem={(item) => (
        <List.Item>
          <PromotionNewsDetailItemDiv preview={false} src={item.src} />
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
  );
};

export default PromotionNewsItem;
