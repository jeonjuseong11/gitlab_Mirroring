import { Button, Col, Row } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { needLoginError } from "../utils/Message";

const SchoolBoard = () => {
  const { category } = useParams();
  const [title, setTItle] = useState("커뮤니티");
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (me === null) {
  //     navigate("/schoolboard/10");
  //   }
  // }, []);

  useEffect(() => {
    if (category === "0") {
      setTItle("자유게시판");
    } else if (category === "1") {
      setTItle("질문게시판");
    } else if (category === "2") {
      setTItle("프로젝트 모집");
    }
  }, [category]);
  // useEffect(() => {
  //   console.log(me);
  // }, [me]);

  return (
    <div>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Col xs={24} md={15}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ margin: "0", marginLeft: "1rem" }}>{title}</h1>
            {/* <Link to="/schoolboard/post"> */}
            <Button
              onClick={() => {
                if (me === null) {
                  needLoginError("글쓰기는 로그인 후에 가능합니다.", navigate);
                  return;
                } else {
                  navigate("/schoolboard/post");
                }
              }}
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
            {/* </Link> */}
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Outlet />
      </Row>
    </div>
  );
};

export default SchoolBoard;
