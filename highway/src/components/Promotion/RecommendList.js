import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";
import {
  RecommnedListBetweenOne,
  RecommnedListBetweenTwo,
  RecommnedListCol,
  RecommnedListImage,
  RecommnedListTItle,
} from "../../styles/BoardDetailUpdateStyle";

const RecommendList = ({ type, infoData }) => {
  const random = Math.floor(Math.random() * infoData.length);
  return (
    <>
      <Col xs={23} md={10} justify="center">
        <h1>HIGHWAY TIMES</h1>
        <Link to={`${type}/${random}`}>
          <RecommnedListCol xs={23} md={23} src={`${infoData[random].src}`} />
        </Link>
      </Col>
      <Col xs={23} md={5} justify="center">
        <div>
          <RecommnedListBetweenOne>
            <Link to={`${type}/${random}`}>
              <RecommnedListImage src={`${infoData[random].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[random].title}</h4>
              </RecommnedListTItle>
            </Link>
          </RecommnedListBetweenOne>
          <RecommnedListBetweenTwo>
            <Link to={`${type}/${random}`}>
              <RecommnedListImage src={`${infoData[random].src}`} />
              <RecommnedListTItle>
                <h4>{infoData[random].title}</h4>
              </RecommnedListTItle>
            </Link>
          </RecommnedListBetweenTwo>
        </div>
      </Col>
    </>
  );
};

export default RecommendList;
