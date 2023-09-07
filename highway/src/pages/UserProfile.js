import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ProfileRow,
  ProfileSchoolName,
  ProfileUserName,
  ProfileUserWrapper,
  ProfileWrapper,
} from "../styles/ProfileStyle";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const access = localStorage.getItem("ACCESSTOKEN");
  useEffect(() => {
    if (access === null) {
      navigate("/");
    }
  }, [access, me, navigate]);
  const renderUserRole = () => {
    if (me?.userRole === 1) {
      return " 학생";
    } else if (me?.userRole === 2) {
      return " 선생님";
    } else if (me?.userRole === 3) {
      return " 학부모";
    } else {
      return "";
    }
  };
  return (
    <ProfileWrapper>
      <ProfileRow gutter={[16, 16]} justify="center">
        <Col xs={24} md={4}>
          <ProfileUserWrapper>
            <Avatar size={100} icon={<UserOutlined />} />
            <ProfileUserName>
              {me?.userName}
              {renderUserRole()}
            </ProfileUserName>
            <ProfileSchoolName>{me?.schoolName}</ProfileSchoolName>
            <div style={{ display: "flex" }}>
              <span style={{ width: "50%" }}>아이디</span>
              <span>{me?.userId}</span>
            </div>
            <div style={{ display: "flex" }}>
              <span style={{ width: "50%" }}>이메일</span>
              <span>{me?.userEmail}</span>
            </div>
          </ProfileUserWrapper>
        </Col>
        <Outlet />
      </ProfileRow>
    </ProfileWrapper>
  );
};

export default UserProfile;
