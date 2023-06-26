import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NewsDummyData as newsList } from "../utils/NewsDummyData";
import { Col, Menu, Row } from "antd";
import { items } from "../utils/PromotionList";
import PromotionHomeItem from "../components/Promotion/PromotionHomeItem";
import RecommendList from "../components/Promotion/RecommendList";

const Promotion = () => {
  const random = Math.floor(Math.random() * newsList.length);
  const location = useLocation();
  return (
    <>
      <Row justify="center">
        <RecommendList type={"news"} infoData={newsList} />
      </Row>
      <Row justify="center">
        <Col xs={10} md={15}>
          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={location.pathname}
          />
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Promotion;
