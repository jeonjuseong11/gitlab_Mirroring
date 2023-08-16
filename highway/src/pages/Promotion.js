import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NewsDummyData as newsList } from "../utils/NewsDummyData";
import { Col, Menu, Row } from "antd";
import { items } from "../utils/PromotionList";
import { VideoDummyData as videoItems } from "../utils/VideoDummyData";
import PromotionHomeItem from "../components/Promotion/PromotionHomeItem";
import RecommendList from "../components/Promotion/RecommendList";

const Promotion = () => {
  const random = Math.floor(Math.random() * videoItems.length);
  const location = useLocation();
  return (
    <>
      <Row justify="center">
        <RecommendList type={"videos"} infoData={videoItems} />
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
