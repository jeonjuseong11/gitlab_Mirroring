import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const {isLogIn} = useSelector((state)=>state.user);
  const {me}= useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch({
      type:LOGOUT_REQUEST
    })
  }

  useEffect(()=>{
  },[isLogIn])

  return (
    <HeaderWrapper>
      <Title to="/">HIGHWAY</Title>
      <ProfileWrapper>
        {isLogIn ? (
          <BlackLink to="/profile">
            <Avatar
              size={28}
              icon={<UserOutlined />}
              style={{ marginRight: "5px" }}
            />
            {me.userName}
            <Link to = "/"
              onClick={onLogOut}
            >
            로그아웃
            </Link>
          </BlackLink>
        ) : (
          <BlackLink to="/login">로그인</BlackLink>
        )}
      </ProfileWrapper>
    </HeaderWrapper>
  );
};

export default Header;
