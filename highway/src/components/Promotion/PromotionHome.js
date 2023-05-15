import React from "react";
import AppLayout from "../AppLayout";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Image, List } from "antd";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import {
  PromotionHomeSection,
  PromotionHomeTitleListWrapper,
  PromotionHomeWrapper,
  PromtionHomeSectionImage,
} from "../../styles/PromotionStyle";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * items.length);
  const location = useLocation();
  return (
    <PromotionHomeWrapper>
      <PromotionHomeSection>
        <h2>첫 번째 test 제목</h2>
        <div>
          <PromtionHomeSectionImage
            width={280}
            height={210}
            src={`${items[random].src}`}
          />
        </div>
        <PromotionHomeTitleListWrapper>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => (
              <List.Item>
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
        </PromotionHomeTitleListWrapper>
      </PromotionHomeSection>
    </PromotionHomeWrapper>
  );
};

export default PromotionHome;
