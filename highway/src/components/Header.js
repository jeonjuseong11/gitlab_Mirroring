import {
  CommentOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, FloatButton, Modal, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT_REQUEST } from "../constants/actionTypes";
import { info } from "../utils/Message";

const imgUrl = {
  large: `/assets/TitleIcon.png`,
  small: `/assets/SmallLogo.png`,
};

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
`;

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // const userInfo = localStorage.getItem("USERINFO");
  const onLogOut = () => {
    info("로그아웃");
    dispatch({
      type: LOGOUT_REQUEST,
    });
    // navigate(-1);
    window.localStorage.clear();
    // window.location.replace(`/`);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };
  const showLogoutModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onLogOut();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const handleFeedbackOk = () => {
    setIsFeedbackModalOpen(false);
  };

  const handleFeedbackCancel = () => {
    setIsFeedbackModalOpen(false);
  };

  return (
    <>
      <Row justify="center" gutter={[16, 16]} style={{ margin: "0 auto" }}>
        <Col
          style={{
            textAlign: "left",
            padding: "10px",
            maxWidth: "65rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title to="/">
            <img
              src={window.innerWidth <= 900 ? imgUrl.small : imgUrl.large}
              alt="Logo"
              style={{
                width: "auto",
                height: "40px",
                marginTop: ".5rem",
              }}
            />
          </Title>
          {me !== null ? (
            <div
              style={{
                alignItems: "center",
                display: "inline-block",
                height: "40px",
              }}
            >
              <Button onClick={handleProfileClick} type="link">
                <Avatar size={28}>{me?.userName[0]}</Avatar>
                <span style={{ marginLeft: "0.2rem" }}>{me?.userName}</span>
              </Button>
              <Button onClick={showLogoutModal} danger>
                로그아웃
              </Button>
            </div>
          ) : (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                height: "40px",
              }}
            >
              <Link to="/login" style={{ marginRight: "1rem", color: "black" }}>
                로그인
              </Link>
              <Link to="/signup" style={{ color: "black" }}>
                회원가입
              </Link>
            </div>
          )}
        </Col>
      </Row>
      <FloatButton
        href="https://www.work.go.kr/consltJobCarpa/jobPsyExamNew/jobPsyExamYouthList.do"
        type="primary"
        icon={<FileTextOutlined />}
        tooltip={<div>적성검사 하러가기</div>}
        style={{
          right: 40,
        }}
      />
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 40, bottom: 100 }}
        icon={<CustomerServiceOutlined />}
      >
        {/* <FloatButton
          icon={<CommentOutlined />}
          tooltip={<div>서비스에 대한 생각을 남겨주세요</div>}
        /> */}
        <FloatButton
          icon={<QuestionCircleOutlined />}
          tooltip={<div>버그 리포트 및 문의</div>}
          onClick={() => {
            navigate(`/feedback/post`);
          }}
        />
        {me?.userRole === 1 ? (
          <FloatButton
            onClick={() => {
              navigate(`/feedback`);
            }}
            icon={<UnorderedListOutlined />}
            tooltip={<div>문의 리스트</div>}
          />
        ) : (
          <></>
        )}
      </FloatButton.Group>
      <Modal
        title="로그아웃 확인"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "red", borderColor: "red" },
        }}
        centered={true}
      >
        <p>정말 로그아웃하시겠습니까?</p>
      </Modal>
    </>
  );
};

export default Header;
