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
    <Row justify="center">
      <Col xs={23} md={14} justify="center">
        <Link to={`${type}/${randomOne}`}>
          {/* <RecommnedListCol xs={23} md={23} src={`${infoData[random].src}`} /> */}
          <Col xs={23} md={23}>
            <img
              style={{ width: "100%", marginTop: "2rem", marginLeft: "1rem" }}
              src={videosItems[randomOne].image}
            />
          </Col>
        </Link>
      </Col>
    </Row>
  );
};

export default RecommendList2;
