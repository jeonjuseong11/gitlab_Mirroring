import { Menu } from "antd";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PromotionHome from "../components/Promotion/PromotionHome";
import RecommendList from "../components/Promotion/RecommendList";
import { PromotionWrapper } from "../styles/PromotionStyle";
import { items } from "../utils/PromotionList";

const Promotion = () => {
  const location = useLocation();

  return (
    <PromotionWrapper>
      <RecommendList />
      <Menu mode="horizontal" items={items} selectedKeys={location.pathname} />
      <Outlet />
      <PromotionHome />
    </PromotionWrapper>
  );
};

export default Promotion;
