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
const RecommendList = ({ type, infoData }) => {
  // const random = Math.floor(Math.random() * infoData.length);
  const randomOne = Math.floor(Math.random() * videosItems.length);
  const randomTwo = Math.floor(Math.random() * videosItems.length);
  const randomThree = Math.floor(Math.random() * videosItems.length);
  console.log(randomOne);
  console.log(randomTwo);
  console.log(randomThree);
  return (
    <>
      <Col xs={23} md={8} justify="center">
        <h1>HIGHWAY TIMES</h1>
        <Link to={`${type}/${randomOne}`}>
          {/* <RecommnedListCol xs={23} md={23} src={`${infoData[random].src}`} /> */}
          <Col xs={23} md={23}>
            <RecommendMainImg src={videosItems[randomOne].image} />
          </Col>
        </Link>
      </Col>
      <Col xs={23} md={5} justify="center">
        <RecommnedSideWrapper>
          <RecommnedSideTopDiv>
            <Link to={`${type}/${randomTwo}`}>
              {/* <RecommnedListImage src={`${infoData[randomTwo].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[randomTwo].title}</h4>
              </RecommnedListTItle> */}
              <RecommendSideImg src={`${videosItems[randomTwo].image}`} />
              <h4 style={{ color: "black" }}>{videosItems[randomTwo].title}</h4>
            </Link>
          </RecommnedSideTopDiv>
          <RecommnedSideBottomDiv>
            <Link to={`${type}/${randomThree}`}>
              {/* <RecommnedListImage src={`${infoData[randomThree].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[randomThree].title}</h4>
              </RecommnedListTItle> */}
              <RecommendSideImg src={`${videosItems[randomThree].image}`} />
              <h4 style={{ color: "black" }}>
                {videosItems[randomThree].title}
              </h4>
            </Link>
          </RecommnedSideBottomDiv>
        </RecommnedSideWrapper>
      </Col>
    </>
  );
};

export default RecommendList;
