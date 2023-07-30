import React, { useEffect, useState } from "react";
import newsList from "../../utils/NewsDummyData";
import { Link, useLocation } from "react-router-dom";
import { Button, Col, List, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  PromotionNewsCol,
  PromotionNewsImageDiv,
  PromotionNewsListItem,
  PromotionNewsListItemMetaDiv,
  PromotionNewsMoreButton,
  PromotionNewsTitle,
  PromotionNewsWriter,
  SideBarDiv,
} from "../../styles/PromotionStyle";

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
      <Row justify="center">
        <Col xs={24} md={10}>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            renderItem={(item) => {
              if (item.id < count)
                return (
                  <PromotionNewsListItem>
                    <PromotionNewsCol xs={24} md={8}>
                      <Link to={`/promotion/news/${item.id}`}>
                        <PromotionNewsImageDiv src={item.src} />
                      </Link>
                    </PromotionNewsCol>
                    <Col xs={24} md={15}>
                      <List.Item.Meta
                        title={
                          <PromotionNewsListItemMetaDiv>
                            <Link to={`/promotion/news/${item.id}`}>
                              <PromotionNewsTitle>
                                {item.title}
                              </PromotionNewsTitle>
                            </Link>
                          </PromotionNewsListItemMetaDiv>
                        }
                        description={
                          <PromotionNewsListItemMetaDiv>
                            <Link to={`/promotion/news/${item.id}`}>
                              <PromotionNewsWriter>
                                {item.content}
                              </PromotionNewsWriter>
                            </Link>
                          </PromotionNewsListItemMetaDiv>
                        }
                      />
                    </Col>
                  </PromotionNewsListItem>
                );
            }}
          />
        </Col>
        <Col xs={23} md={5} justify="center">
          <SideBarDiv>우측사이드</SideBarDiv>
        </Col>
      </Row>
      <Row>
        <Col xs={23} md={23} justify="center">
          <PromotionNewsMoreButton onClick={onMore} disabled={disable}>
            <DownOutlined />더 보기
          </PromotionNewsMoreButton>
        </Col>
      </Row>
    </>
  );
};

export default PromotionNews;
