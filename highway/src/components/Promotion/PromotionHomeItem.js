import React, { useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, List, Card } from "antd";
import {
  PromotionHomeSection,
  PromotionHomeWrapper,
  PromtionHomeSectionImage,
  PromotionHomeItemUl,
  PromotionHomeItemLi,
} from "../../styles/PromotionStyle";
import { RightCircleFilled } from "@ant-design/icons";

const PromotionHomeItem = ({ random }) => {
  const [count, setCount] = useState(6);
  const location = useLocation();
  return (
    <PromotionHomeWrapper>
      <PromotionHomeSection>
        <h2>첫 번째 test 제목</h2>
        <Link to={`/promotion/news`}>
          <Button icon={<RightCircleFilled />}>더보기</Button>
        </Link>
        <PromotionHomeItemUl>
          <PromotionHomeItemLi>
            <div>
              <Link to={`news/${random}`}>
                <PromtionHomeSectionImage
                  width={280}
                  height={210}
                  preview={false}
                  src={`${newsList[random].src}`}
                />
              </Link>
            </div>
          </PromotionHomeItemLi>
          <PromotionHomeItemLi>
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
                      />
                    </List.Item>
                  );
                }
              }}
            />
          </PromotionHomeItemLi>
        </PromotionHomeItemUl>
      </PromotionHomeSection>
    </PromotionHomeWrapper>
  );
};

export default PromotionHomeItem;
