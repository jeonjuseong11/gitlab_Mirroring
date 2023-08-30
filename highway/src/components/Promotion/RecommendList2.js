import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";
import { VideoDummyData as videosItems } from "../../utils/VideoDummyData";
import {
  RecommnedSideTopDiv,
  RecommnedSideBottomDiv,
  RecommendSideImg,
  RecommendMainImg,
  RecommnedSideWrapper,
} from "../../styles/PromotionStyle";
const RecommendList2 = ({ type, infoData }) => {
  // const random = Math.floor(Math.random() * infoData.length);
  const randomOne = Math.floor(Math.random() * videosItems.length);
  const randomTwo = Math.floor(Math.random() * videosItems.length);
  const randomThree = Math.floor(Math.random() * videosItems.length);

  return (
    <>
      <Col xs={23} md={8} justify="center">
        <h2 style={{ color: "black" }}>{videosItems[randomOne].title}</h2>
        <Link to={`${type}/${randomOne}`}>
          {/* <RecommnedListCol xs={23} md={23} src={`${infoData[random].src}`} /> */}
          <Col xs={23} md={23}>
            <RecommendMainImg src={videosItems[randomOne].image} />
          </Col>
        </Link>
      </Col>
    </>
  );
};

export default RecommendList2;
