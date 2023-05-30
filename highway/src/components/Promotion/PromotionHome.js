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
        <li style={{ float: "left", width: "100%" }}>
          <PromotionHomeItem random={random} title={"첫 번째 test 제목"} />
          <PromotionHomeItem random={random} title={"두 번째 test 제목"} />
          <PromotionHomeItem random={random} title={"세 번째 test 제목"} />
        </li>
        <li
          style={{
            float: "left",
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
