import React from "react";
import { useLocation } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import PromotionHomeItem from "./PromotionHomeItem";
import { PromotionHomeItemLi } from "../../styles/PromotionStyle";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * items.length);
  const location = useLocation();
  return (
    <>
      <ul style={{ listStyle: "none", width: "100%" }}>
        <PromotionHomeItemLi>
          <PromotionHomeItem
            random={random}
            title={"이직을 준비하는 당신에게"}
          />
        </PromotionHomeItemLi>
        <PromotionHomeItemLi>
          <PromotionHomeItem
            random={random}
            title={"세상의 모든 회사 이야기"}
          />
        </PromotionHomeItemLi>
        <PromotionHomeItemLi>
          <PromotionHomeItem random={random} title={"직장 생활 치트키"} />
        </PromotionHomeItemLi>
        <li
          style={{
            width: "20%",
            height: "300px",
            backgroundColor: "#d2d2d2",
            marginLeft: "76.5%",
          }}
        >
          우측사이드
        </li>
      </ul>
    </>
  );
};

export default PromotionHome;
