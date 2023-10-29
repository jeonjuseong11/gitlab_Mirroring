import React, { useEffect, useState, useCallback } from "react";
import { Button, Col, Row } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

const SchoolBoard = () => {
  const { category } = useParams();
  const [title, setTitle] = useState("커뮤니티");
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/schoolboard/post");
  }, [navigate]);

  useEffect(() => {
    if (category === "0") {
      setTitle("자유게시판");
    } else if (category === "01") {
      setTitle("질문게시판");
    } else if (category === "02") {
      setTitle("프로젝트 모집");
    }
  }, [category]);

  return (
    <div
      style={{
        maxWidth: "65rem",
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Col xs={24} md={23}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ margin: "0", marginLeft: "1rem" }}>{title}</h1>
            <Button
              onClick={handleNavigate}
              type="primary"
              style={{
                width: "10rem",
                height: "3rem",
                display: "inline-block",
                borderRadius: "50px",
              }}
            >
              글쓰기
              <EditOutlined />
            </Button>
          </div>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]} style={{ textAlign: "center" }}>
        <Outlet />
      </Row>
    </div>
  );
};

export default React.memo(SchoolBoard);
