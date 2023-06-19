import { Button, Col, Empty, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import {
  SchoolDetailWrapper,
  SchoolImg,
  SchoolInfo,
  SchoolLogo,
} from "../components/SchoolDetail/SchoolDetailStyle";
import { SubWrapper } from "../styles/PageStyle";
import { useDispatch, useSelector } from "react-redux";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import DepartsTags from "../components/DepartsTags";
import SchoolDetailInfo from "../components/SchoolDetail/SchoolDetailInfo";
import { LOAD_SCHOOL_REVIEWS_REQUEST } from "../constants/actionTypes";

const SchoolDetail = () => {
  const { schoolId } = useParams();
  const { schools } = useSelector((state) => state.school);
  // console.log(school[schoolId - 1]);
  const dispatch = useDispatch();
  const loadSchoolReviews = () => {
    dispatch({
      type: LOAD_SCHOOL_REVIEWS_REQUEST,
      data: {
        schoolId: schoolId,
      },
    });
  };
  useEffect(() => {
    loadSchoolReviews();
  }, []);
  const school = schools[schoolId - 1];
  const totalStarRate =
    (school.trafficRate +
      school.facilityRate +
      school.cafeteriaRate +
      school.educationRate +
      school.employmentRate) /
    5;
  return (
    <div>
      <SchoolDetailWrapper>
        <SchoolImg>
          <Empty
            imageStyle={{
              height: 60,
            }}
            description={<span>학교 배경이미지를 설정해주세요</span>}
          >
            <Button type="primary">배경 이미지 추가하기</Button>
          </Empty>
          {school.logoURL !== null ? (
            <SchoolLogo>
              <img
                src={school.logoURL}
                alt="학교로고"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SchoolLogo>
          ) : (
            <SchoolLogo>
              <p>Logo</p>
            </SchoolLogo>
          )}
        </SchoolImg>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={22} md={15}>
            <SchoolInfo>
              <h2 style={{ margin: "0" }}>{school.schul_NM}</h2>
              <div>
                {totalStarRate === 0 ? (
                  <StarOutlined />
                ) : (
                  <StarFilled style={{ color: "#FFDC82" }} />
                )}
                <span style={{ marginRight: "10px" }}>{totalStarRate}</span>
                <DepartsTags schoolInfo={school} />
                <a style={{ color: "black", textDecoration: "none" }} href={school.hmpg_ADRES}>
                  {school.hmpg_ADRES}
                </a>
              </div>
            </SchoolInfo>
          </Col>
        </Row>

        <SubWrapper>
          <SchoolDetailInfo />
        </SubWrapper>
      </SchoolDetailWrapper>
    </div>
  );
};

export default SchoolDetail;
