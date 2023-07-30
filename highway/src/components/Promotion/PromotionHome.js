import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NewsDummyData as newsList } from "../../utils/NewsDummyData";
import PromotionHomeItem from "./PromotionHomeItem";
import { Col, Menu, Row } from "antd";
import RecommendList from "./RecommendList";
import { items } from "../../utils/PromotionList";
import { PromotionHomeUl, SideBarDiv } from "../../styles/PromotionStyle";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * newsList.length);
  const location = useLocation();
  return (
    <>
      <Row justify="center">
        <Col xs={23} md={10}>
          <PromotionHomeUl>
            <li>
              <PromotionHomeItem
                random={random}
                title={"이직을 준비하는 당신에게"}
                type={"news"}
                infoData={newsList}
                xs={23}
                md={10}
              />
            </li>
            <li>
              <PromotionHomeItem
                random={random}
                title={"세상의 모든 회사 이야기"}
                type={"news"}
                infoData={newsList}
                xs={23}
                md={10}
              />
            </li>
            <li>
              <PromotionHomeItem
                random={random}
                title={"직장 생활 치트키"}
                type={"news"}
                infoData={newsList}
                xs={23}
                md={10}
              />
            </li>
          </PromotionHomeUl>
        </Col>
        <Col xs={23} md={5}>
          <SideBarDiv>우측사이드</SideBarDiv>
        </Col>
      </Row>
    </>
  );
};

export default PromotionHome;
