import React from "react";
import { Col, Rate, Row } from "antd";
import { ResponsiveRate, ResponsiveRow, StarRateWrapper } from "./SchoolDetailStyle";
import ReviewDetail from "../ReviewDetail";

const SchoolDetailReview = ({ reviewCount, rateAverages, roundedTotalRate }) => {
  return (
    <ResponsiveRow
      justify="center"
      gutter={[16, 16]}
      style={{ margin: "0 auto", textAlign: "center", paddingTop: "1rem" }}
    >
      <Col xs={23} md={17}>
        <StarRateWrapper>
          <div>
            <p style={{ margin: "0", fontSize: "100%" }}>전체 리뷰 통계 ({reviewCount})</p>
            {reviewCount === 0 ? (
              <p style={{ fontSize: "100%" }}>리뷰가 없습니다.</p>
            ) : (
              <>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "500",
                  }}
                >
                  {roundedTotalRate.toFixed(1)}
                </h1>
                <Rate
                  disabled
                  allowHalf
                  value={roundedTotalRate}
                  style={{
                    fontSize: "100%",
                  }}
                />
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1rem",
              gap: "5px",
            }}
          >
            <h4 style={{ margin: "0", fontWeight: "500" }}>교통</h4>
            <ResponsiveRate disabled allowHalf value={rateAverages.traffic} />

            <h4 style={{ margin: "0", fontWeight: "500" }}>시설만족도</h4>
            <ResponsiveRate disabled allowHalf value={rateAverages.facility} />

            <h4 style={{ margin: "0", fontWeight: "500" }}>급식</h4>
            <ResponsiveRate disabled allowHalf value={rateAverages.cafeteria} />

            <h4 style={{ margin: "0", fontWeight: "500" }}>수업만족도</h4>
            <ResponsiveRate disabled allowHalf value={rateAverages.education} />

            <h4 style={{ margin: "0", fontWeight: "500" }}>취업</h4>
            <ResponsiveRate disabled allowHalf value={rateAverages.employment} />
          </div>
        </StarRateWrapper>
        <ReviewDetail />
      </Col>
    </ResponsiveRow>
  );
};

export default SchoolDetailReview;
