import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NewsDummyData as newsList } from "../../utils/NewsDummyData";
import PromotionHomeItem from "./PromotionHomeItem";
import { PromotionHomeItemLi } from "../../styles/PromotionStyle";
import { Col, Menu } from "antd";
import RecommendList from "./RecommendList";
import { items } from "../../utils/PromotionList";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * newsList.length);
  const location = useLocation();
  return (
    <>
      <RecommendList type={"news"} infoData={newsList} />
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={location.pathname}
        style={{ width: "73rem", marginLeft: "3.5rem" }}
      />
      <Outlet />
      <Col xs={24} md={24}>
        <ul style={{ listStyle: "none", width: "80rem", marginTop: "3rem" }}>
          <PromotionHomeItemLi>
            <PromotionHomeItem
              random={random}
              title={"이직을 준비하는 당신에게"}
              type={"news"}
              infoData={newsList}
            />
          </PromotionHomeItemLi>
          <PromotionHomeItemLi>
            <PromotionHomeItem
              random={random}
              title={"세상의 모든 회사 이야기"}
              type={"news"}
              infoData={newsList}
            />
          </PromotionHomeItemLi>
          <PromotionHomeItemLi>
            <PromotionHomeItem
              random={random}
              title={"직장 생활 치트키"}
              type={"news"}
              infoData={newsList}
            />
          </PromotionHomeItemLi>
          <li
            style={{
              width: "20rem",
              height: "30rem",
              backgroundColor: "#f2f2f2",
              marginLeft: "54rem",
              borderRadius: "10px",
            }}
          >
            우측사이드
          </li>
        </ul>
      </Col>
    </>
  );
};

export default PromotionHome;
