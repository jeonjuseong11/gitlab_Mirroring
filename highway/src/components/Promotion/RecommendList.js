import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "antd";

const RecommendList = ({ type, infoData }) => {
  const random = Math.floor(Math.random() * infoData.length);
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h1 style={{ marginLeft: "50%" }}>HIGHWAY TIMES</h1>
          <Link to={`${type}/${random}`}>
            <Image
              width={"45rem"}
              height={"25rem"}
              preview={false}
              src={`${infoData[random].src}`}
              style={{
                borderRadius: "5%",
                marginLeft: "15%",
              }}
            />
          </Link>
        </Col>
        <Col span={12} style={{ marginTop: "0.5%" }}>
          <div style={{ width: "80%", marginLeft: "-15rem" }}>
            <div
              style={{
                marginLeft: "95%",
                marginTop: "16%",
              }}
            >
              <Link to={`${type}/${random}`}>
                <Image
                  width={"18rem"}
                  height={"10rem"}
                  preview={false}
                  src={`${infoData[random].src}`}
                  style={{
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
                marginLeft: "95%",
                marginTop: "5%",
              }}
            >
              <Link to={`${type}/${random}`}>
                <Image
                  width={"18rem"}
                  height={"10rem"}
                  preview={false}
                  src={`${infoData[random].src}`}
                  style={{
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
