import React from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, List } from "antd";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import {
  PromotionHomeSection,
  PromotionHomeTitleListWrapper,
  PromotionHomeWrapper,
  PromtionHomeSectionImage,
  testUl,
  testLi,
} from "../../styles/PromotionStyle";
import { RightCircleFilled } from "@ant-design/icons";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * items.length);
  const location = useLocation();
  return (
    <PromotionHomeWrapper>
      <PromotionHomeSection>
        <div>
          <h2>첫 번째 test 제목</h2>
          <Link to={`/promotion/news`}>
            <Button icon={<RightCircleFilled />}>더보기</Button>
          </Link>
        </div>
        <div>
          <Link to={`news/${random}`}>
            <PromtionHomeSectionImage
              width={280}
              height={210}
              preview={false}
              src={`${items[random].src}`}
            />
          </Link>
        </div>
        <PromotionHomeTitleListWrapper>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => {
              return (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link to={`/promotion/news/${item.newsId}`}>
                        {item.newsTitle}
                      </Link>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </PromotionHomeTitleListWrapper>
      </PromotionHomeSection>
    </PromotionHomeWrapper>
  );
};

export default PromotionHome;
