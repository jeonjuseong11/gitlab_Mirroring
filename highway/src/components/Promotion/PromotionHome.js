import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NewsDummyData as newsList } from "../../utils/NewsDummyData";
import PromotionHomeItem from "./PromotionHomeItem";
import { Col, Menu, Row } from "antd";
import RecommendList from "./RecommendList";
import { items } from "../../utils/PromotionList";

const PromotionHome = () => {
  const random = Math.floor(Math.random() * newsList.length);
  const location = useLocation();
  return (
    <>
      <Row justify="center">
        <Col xs={23} md={10}>
          <ul style={{ listStyle: "none", padding: "0px" }}>
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
          </ul>
        </Col>
        <Col xs={23} md={5}>
          <div
            style={{
              marginTop: "2rem",
              width: "20rem",
              height: "30rem",
              marginLeft: "1.5rem",
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
            }}
          >
            우측사이드
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PromotionHome;
