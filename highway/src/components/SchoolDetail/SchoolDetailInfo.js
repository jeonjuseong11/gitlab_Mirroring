import { Button, Col, Modal, Row, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LOAD_SCHOOL_INFO_REQUEST } from "../../constants/actionTypes";
import SchoolDetailReview from "./SchoolDetailReview";
import { QuestionWrapper, SubPageWrapper } from "./SchoolDetailStyle";
import DescDept from "../DescriptDepartment/DescDept";
import { SearchOutlined } from "@ant-design/icons";

const SchoolDetailInfo = ({ rateAverages, roundedTotalRate, reviewCount }) => {
  const { singleSchool } = useSelector((state) => state.school);
  const { schoolCurris } = useSelector((state) => state.school);
  const [departsList, setDepartsList] = useState([]);

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const departs = singleSchool?.dept;
    const updatedDepartsList = departs?.map((v, idx) => ({
      key: `${idx}`,
      label: `${v.deptName}`,
      children: `${v.description}`,
    }));
    setDepartsList(updatedDepartsList);
  }, [singleSchool]);

  const [activeTab, setActiveTab] = useState("0");

  const onChange = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    console.log(schoolCurris);
  }, [schoolCurris]);

  return (
    <SubPageWrapper>
      <Row
        justify="center"
        gutter={[16, 16]}
        style={{
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <Col xs={23} md={9} style={{ width: "100%" }}>
          <QuestionWrapper style={{ textAlign: "left" }}>
            <h3 style={{ marginTop: "0", marginBottom: "0" }}>학교 정보</h3>
            <h4 style={{ marginBottom: "0.3rem" }}>주소</h4>
            <p style={{ marginTop: "0", marginBottom: "0" }}>{singleSchool?.sch?.streetAddress}</p>
            <h4 style={{ marginBottom: "0.3rem" }}>연락처</h4>
            <p style={{ marginTop: "0", marginBottom: "0" }}>{singleSchool?.sch?.phoneNumber}</p>
            {singleSchool?.sch?.adminPhone == -1 ? null : (
              <p style={{ marginTop: "0", marginBottom: "0" }}>
                {singleSchool?.sch?.adminPhone}(행정실)
              </p>
            )}
            {singleSchool?.sch?.officePhone == -1 ? null : (
              <p style={{ marginTop: "0", marginBottom: "0" }}>
                {singleSchool?.sch?.officePhone}(교무실)
              </p>
            )}
            <h4 style={{ marginBottom: "0.3rem" }}>홈페이지</h4>
            <a style={{ color: "black", textDecoration: "none" }} href={singleSchool?.sch?.website}>
              {singleSchool?.sch?.website}
            </a>
          </QuestionWrapper>
        </Col>
        <Col xs={23} md={15} style={{ width: "100%" }}>
          <QuestionWrapper style={{ textAlign: "left" }}>
            <p
              style={{
                float: "right",
                height: "18px",
                fontSize: "8px",
                marginTop: "0",
                marginBottom: "0",
                cursor: "pointer",
              }}
              type="text"
              onClick={showModal}
            >
              <SearchOutlined />
              자세히 보기
            </p>
            {schoolCurris.length !== undefined ? (
              <Modal
                title="세부과목"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
              >
                <DescDept />
              </Modal>
            ) : (
              <Modal
                title="아직 데이터가 준비되있지 않아요."
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                width={400}
              ></Modal>
            )}
            <h3 style={{ marginTop: "0", marginBottom: "0.5rem" }}>학과소개</h3>
            <Tabs
              activeKey={activeTab}
              onChange={onChange}
              tabBarStyle={{ marginBottom: "1.5rem" }}
              items={departsList}
            />
          </QuestionWrapper>
        </Col>
      </Row>
      {/* <Row gutter={[16, 16]} justify="center">
        <Col xs={22} md={14}>
          <SchoolDetailJob />
        </Col>
      </Row> */}
      <SchoolDetailReview
        reviewCount={reviewCount}
        rateAverages={rateAverages}
        roundedTotalRate={roundedTotalRate}
      />
    </SubPageWrapper>
  );
};

export default SchoolDetailInfo;
