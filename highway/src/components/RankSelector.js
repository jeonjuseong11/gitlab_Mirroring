import {
  AppstoreOutlined,
  DesktopOutlined,
  ExperimentOutlined,
  HighlightOutlined,
  LineChartOutlined,
  MedicineBoxOutlined,
  SettingOutlined,
  TeamOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Col, Row, Segmented, Space } from "antd";
import React from "react";

export const RankTopic = [
  {
    icon: <AppstoreOutlined />,
    content: <div>전체보기</div>,
    value: [
      "체육",
      "스포츠",
      "의학",
      "보건",
      "물리학",
      "화학",
      "생물학",
      "지구과학",
      "건축",
      "기계",
      "전자",
      "컴퓨터",
      "정보통신",
      "소프트웨어",
      "네트워크",
      "시스템",
      "IT",
      "예술",
      "디자인",
      "음악",
      "영상",
      "애니메이션",
      "연극",
      "역사",
      "경제",
      "정치",
      "사회",
      "경제 ",
      "경학",
      "경영",
      "심리",
      "한국어",
      "영어",
      "독일어",
      "중국어",
      "일본어",
      "1",
      "프랑스어",
    ],
  },
  {
    icon: <ExperimentOutlined />,
    content: <div>자연과학</div>,
    value: ["물리학", "화학", "생물학", "지구과학"],
  },
  {
    icon: <SettingOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>공학 및</span>
        <span style={{ marginTop: "-.5rem" }}>기술</span>
      </div>
    ),
    value: ["건축", "기계", "전자", "컴퓨터"],
  },
  {
    icon: <DesktopOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>정보통신</span>
        <span style={{ marginTop: "-.5rem" }}>및 SW</span>
      </div>
    ),
    value: ["정보통신", "소프트웨어", "네트워크", "시스템", "IT"],
  },
  {
    icon: <HighlightOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>예술 및</span>
        <span style={{ marginTop: "-.5rem" }}>디자인</span>
      </div>
    ),
    value: ["예술", "디자인", "음악", "영상", "애니메이션", "연극"],
  },
  {
    icon: <TeamOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>인문사회</span>
        <span style={{ marginTop: "-.5rem" }}>과학</span>
      </div>
    ),
    value: ["역사", "경제", "정치", "사회", "심리"],
  },
  {
    icon: <TranslationOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>언어 및</span>
        <span style={{ marginTop: "-.5rem" }}>문학</span>
      </div>
    ),
    value: ["한국어", "영어", "독일어", "중국어", "일본어", "프랑스어"],
  },
  {
    icon: <LineChartOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>경제 및</span>
        <span style={{ marginTop: "-.5rem" }}>경영</span>
      </div>
    ),
    value: ["경제 ", "경학", "경영"],
  },
  {
    icon: <MedicineBoxOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>의학 및</span>
        <span style={{ marginTop: "-.5rem" }}>보건</span>
      </div>
    ),
    value: ["의학", "보건"],
  },
  {
    icon: <MedicineBoxOutlined />,
    content: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>체육 및</span>
        <span style={{ marginTop: "-.5rem" }}>스포츠</span>
      </div>
    ),
    value: ["체육", "스포츠"],
  },
];

const RankSelector = ({ setFilterValue }) => {
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <Row justify="center">
      <Space direction="vertical" style={{ overflowX: "auto" }}>
        <Segmented
          onChange={handleFilterChange}
          options={RankTopic.map((item) => ({
            label: (
              <Col
                key={item.value}
                style={{
                  width: "5rem",
                  height: "5rem",
                  paddingTop: "1rem",
                  marginBottom: "1rem",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1rem",
                }}
              >
                {item.icon}
                {item.content}
              </Col>
            ),
            value: item.value,
          }))}
        />
      </Space>
    </Row>
  );
};

export default RankSelector;
