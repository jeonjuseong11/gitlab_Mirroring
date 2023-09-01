import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ProfileRow,
  ProfileSchoolName,
  ProfileTable,
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
            <ProfileTable>
              <tbody>
                <tr>
                  <th style={{ fontSize: ".8rem" }}>아이디</th>
                  <td style={{ fontSize: ".7rem" }}>{me?.userId}</td>
                </tr>
                <tr>
                  <th style={{ fontSize: ".8rem" }}>이메일</th>
                  <td style={{ fontSize: ".7rem" }}>{me?.userEmail}</td>
                </tr>
                {/* <tr>
                  <th>성별</th>
                  <td>{me?.userGender}</td>
                </tr> */}
                {/* <tr>
                  <th>소속학교</th>
                  <td>{me?.schoolName}</td>
                </tr> */}
              </tbody>
            </ProfileTable>
          </ProfileUserWrapper>
        </Col>
        <Outlet />
      </ProfileRow>
    </ProfileWrapper>
  );
};

export default UserProfile;
