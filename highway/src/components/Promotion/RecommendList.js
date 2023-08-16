import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";
import { VideoDummyData as videosItems } from "../../utils/VideoDummyData";
import {
  RecommnedListBetweenOne,
  RecommnedListBetweenTwo,
  RecommnedListCol,
  RecommnedListImage,
  RecommnedListTItle,
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
      <Col xs={23} md={10} justify="center">
        <h1>HIGHWAY TIMES</h1>
        <Link to={`${type}/${randomOne}`}>
          {/* <RecommnedListCol xs={23} md={23} src={`${infoData[random].src}`} /> */}
          <Col xs={23} md={23}>
            <img
              style={{
                height: "27rem",
                marginLeft: "0.5rem",
                // borderRadius: "10px",
              }}
              src={videosItems[randomOne].image}
            />
          </Col>
        </Link>
      </Col>
      <Col xs={23} md={5} justify="center">
        <div>
          <RecommnedListBetweenOne>
            <Link to={`${type}/${randomTwo}`}>
              {/* <RecommnedListImage src={`${infoData[randomTwo].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[randomTwo].title}</h4>
              </RecommnedListTItle> */}
              <Col>
                <img
                  style={{ width: "18rem", height: "10rem" }}
                  src={`${videosItems[randomTwo].image}`}
                />
              </Col>
              <RecommnedListTItle>
                <h4>{videosItems[randomTwo].title}</h4>
              </RecommnedListTItle>
            </Link>
          </RecommnedListBetweenOne>
          <RecommnedListBetweenTwo>
            <Link to={`${type}/${randomThree}`}>
              {/* <RecommnedListImage src={`${infoData[randomThree].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[randomThree].title}</h4>
              </RecommnedListTItle> */}
              <Col>
                <img
                  style={{ width: "18rem", height: "10rem" }}
                  src={`${videosItems[randomThree].image}`}
                />
              </Col>
              <RecommnedListTItle>
                <h4>{videosItems[randomThree].title}</h4>
              </RecommnedListTItle>
            </Link>
          </RecommnedListBetweenTwo>
        </div>
      </Col>
    </>
  );
};

export default RecommendList;
