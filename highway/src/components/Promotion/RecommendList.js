import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";

const RecommendList = ({ type, infoData }) => {
  const random = Math.floor(Math.random() * infoData.length);
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h1 style={{ marginLeft: "25rem" }}>HIGHWAY TIMES</h1>
          <Link to={`${type}/${random}`}>
            <div
              src={`${infoData[random].src}`}
              style={{
                width: "45rem",
                height: "27rem",
                borderRadius: "5%",
                marginLeft: "5rem",
                background: "#f2f2f2",
              }}
            />
          </Link>
        </Col>
        <Col span={12}>
          <div style={{ width: "80rem", marginLeft: "-15rem" }}>
            <div
              style={{
                marginLeft: "30rem",
                marginTop: "5rem",
              }}
            >
              <Link to={`${type}/${random}`}>
                <div
                  src={`${infoData[random].src}`}
                  style={{
                    width: "18rem",
                    height: "10rem",
                    background: "#f2f2f2",
                    borderRadius: "5%",
                  }}
                />
                <div
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h4>{infoData[random].title}</h4>
                </div>
              </Link>
            </div>
            <div
              style={{
                marginLeft: "30rem",
                marginTop: "2rem",
              }}
            >
              <Link to={`${type}/${random}`}>
                <div
                  src={`${infoData[random].src}`}
                  style={{
                    width: "18rem",
                    height: "10rem",
                    background: "#f2f2f2",
                    borderRadius: "5%",
                  }}
                />
                <div
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  <h4>{infoData[random].title}</h4>
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RecommendList;
