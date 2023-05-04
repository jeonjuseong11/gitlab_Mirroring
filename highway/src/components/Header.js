import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//사이트 로고 부분
const Title = styled(Link)`
  text-decoration: none;
  text-align: right;
  color: black;
  font-size: 2rem;
`;
const HeaderWrapper = styled.div`
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const ProfileWrapper = styled.div`
  padding-top: 5px;
  float: right;
  text-decoration: none;
  color: black;
`;
const BlackLink = styled(Link)`
  floatl: right;
  text-decoration: none;
  color: black;
`;
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //임시로 로그인 여부 상태 생성
  return (
    <HeaderWrapper>
      <Title to="/">HIGHWAY</Title>
      <ProfileWrapper>
        {isLoggedIn ? (
          <BlackLink to="/profile">
            <Avatar
              size={28}
              icon={<UserOutlined />}
              style={{ marginRight: "5px" }}
            />
            userid
          </BlackLink>
        ) : (
          <BlackLink to="/login">로그인</BlackLink>
        )}
      </ProfileWrapper>
    </HeaderWrapper>
  );
};

export default Header;
