import React from "react";
import { Link } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import { Col, Image, Row } from "antd";

const RecommendList = () => {
  const random = Math.floor(Math.random() * items.length);
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h1 style={{ marginLeft: "35%" }}>HIGHWAY TIMES</h1>
          <Link to={`news/${random}`}>
            <Image
              width={"45rem"}
              height={"25rem"}
              preview={false}
              src={`${items[random].src}`}
              style={{
                borderRadius: "5%",
              }}
            />
          </Link>
        </Col>
        <Col span={12} style={{ marginTop: "0.5%" }}>
          <div style={{ width: "80%", marginLeft: "-35%" }}>
            <div
              style={{
                marginLeft: "100%",
                marginTop: "18.5%",
              }}
            >
              <Link to={`news/${random}`}>
                <Image
                  width={"18rem"}
                  height={"10rem"}
                  preview={false}
                  src={`${items[random].src}`}
                  style={{
                    borderRadius: "5%",
                  }}
                />
                <div
                  style={{ width: "18rem", color: "black", textAlign: "left" }}
                >
                  <h4>{items[random].newsTitle}</h4>
                </div>
              </Link>
            </div>
            <div style={{ marginLeft: "100%", marginTop: "5%" }}>
              <Link to={`news/${random}`}>
                <Image
                  width={"18rem"}
                  height={"10rem"}
                  preview={false}
                  src={`${items[random].src}`}
                  style={{
                    borderRadius: "5%",
                  }}
                />
                <div
                  style={{ width: "18rem", color: "black", textAlign: "left" }}
                >
                  <h4>{items[random].newsTitle}</h4>
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
