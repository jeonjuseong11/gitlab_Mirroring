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
import PromotionHomeItem from "./PromotionHomeItem";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * items.length);
  const location = useLocation();
  return (
    <div>
      <PromotionHomeItem random={random} />
    </div>
  );
};

export default PromotionHome;
