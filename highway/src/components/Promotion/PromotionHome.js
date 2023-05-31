import React from "react";
import { useLocation } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import PromotionHomeItem from "./PromotionHomeItem";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * items.length);
  const location = useLocation();
  return (
    <>
      <ul style={{ listStyle: "none", width: "100%" }}>
        <li style={{ float: "left", width: "100%", marginLeft: "-15%" }}>
          <PromotionHomeItem
            random={random}
            title={"이직을 준비하는 당신에게"}
          />
        </li>
        <li style={{ float: "left", width: "100%", marginLeft: "-15%" }}>
          <PromotionHomeItem
            random={random}
            title={"세상의 모든 회사 이야기"}
          />
        </li>
        <li style={{ float: "left", width: "100%", marginLeft: "-15%" }}>
          <PromotionHomeItem random={random} title={"직장 생활 치트키"} />
        </li>
        <li
          style={{
            width: "20%",
            height: "300px",
            backgroundColor: "#d2d2d2",
            marginLeft: "85%",
          }}
        >
          우측사이드
        </li>
      </ul>
    </>
  );
};

export default PromotionHome;
