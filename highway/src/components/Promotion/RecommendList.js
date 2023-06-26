import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";

const RecommendList = ({ type, infoData }) => {
  const random = Math.floor(Math.random() * infoData.length);
  return (
    <>
      <Col xs={23} md={10} justify="center">
        <h1>HIGHWAY TIMES</h1>
        <Link to={`${type}/${random}`}>
          <Col
            xs={23}
            md={23}
            src={`${infoData[random].src}`}
            style={{
              height: "27rem",
              marginLeft: "0.5rem",
              borderRadius: "10px",
              background: "#f2f2f2",
            }}
          />
        </Link>
      </Col>
      <Col xs={23} md={5} justify="center">
        <div>
          <div
            style={{
              marginTop: "5rem",
              marginLeft: "2.5rem",
            }}
          >
            <Link to={`${type}/${random}`}>
              <div
                src={`${infoData[random].src}`}
                style={{
                  width: "18rem",
                  height: "10rem",
                  background: "#f2f2f2",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  width: "18rem",
                  color: "black",
                  textAlign: "left",
                  marginLeft: "3rem",
                }}
              >
                <h4>{infoData[random].title}</h4>
              </div>
            </Link>
          </div>
          <div
            style={{
              marginTop: "2rem",
              marginLeft: "2.5rem",
            }}
          >
            <Link to={`${type}/${random}`}>
              <div
                src={`${infoData[random].src}`}
                style={{
                  width: "18rem",
                  height: "10rem",
                  background: "#f2f2f2",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  width: "18rem",
                  color: "black",
                  textAlign: "left",
                  marginLeft: "3rem",
                }}
              >
                <h4>{infoData[random].title}</h4>
              </div>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default RecommendList;
