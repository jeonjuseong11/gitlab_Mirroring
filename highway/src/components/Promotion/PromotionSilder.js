import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { VideoDummyData as videosItems } from "../../utils/VideoDummyData";

// const PromotionSilder = ({infoData}) => {
//   const randomOne = Math.floor(Math.random() * infoData.length);
//   const randomTwo = Math.floor(Math.random() * infoData.length);
//   const randomThree = Math.floor(Math.random() * infoData.length);
const PromotionSilder = () => {
  // const [randomOne, setRandomOne] = useState(
  //   Math.floor(Math.random() * videosItems.length)
  // );
  // const [randomTwo, setRandomTwo] = useState(
  //   Math.floor(Math.random() * videosItems.length)
  // );
  // const [randomThree, setRandomThree] = useState(
  //   Math.floor(Math.random() * videosItems.length)
  // );
  // const prevSlide = () => {
  //   setRandomOne(randomTwo);
  //   setRandomTwo(randomThree);
  //   setRandomThree(randomThree - 1);
  // };
  // const nextSlide = () => {
  //   setRandomOne(randomOne + 1);
  //   setRandomTwo(randomOne);
  //   setRandomThree(randomTwo);
  // };
  const [random, setRandom] = useState(
    Math.floor(Math.random() * videosItems.length)
  );
  const prevSlide = () => {
    setRandom(random - 1);
  };
  const nextSlide = () => {
    setRandom(random + 1);
  };
  return (
    <>
      <Row justify="center">
        <LeftOutlined
          style={{ backgroundColor: "rgb(220, 220, 225)" }}
          onClick={() => {
            prevSlide();
          }}
        />
        <Col md={4} style={{ backgroundColor: "red" }}>
          <img
            src={videosItems[random - 1]?.image}
            style={{ width: "18rem" }}
          />
        </Col>
        <Col md={4} style={{ backgroundColor: "green" }}>
          <img src={videosItems[random]?.image} style={{ width: "18rem" }} />
        </Col>
        <Col md={4} style={{ backgroundColor: "orange" }}>
          <img
            src={videosItems[random + 1]?.image}
            style={{ width: "18rem" }}
          />
        </Col>
        <RightOutlined
          style={{ backgroundColor: "rgb(220, 220, 225)" }}
          onClick={() => {
            nextSlide();
          }}
        />
      </Row>
    </>
  );
};

export default PromotionSilder;
