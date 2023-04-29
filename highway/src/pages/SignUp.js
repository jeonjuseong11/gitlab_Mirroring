import { UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SignUpWrapper } from "../styles/SignUpStyle";

const SignUpBtn = styled(Button)`
  width: 10rem;
  height: 10rem;
  font-size: 1.5rem;
  margin-left: 5px;
  margin-right: 5px;
`;
const SignUpTitle = styled.h1`
  margin: 0;
  margin-bottom: 3rem;
  padding-top: 15rem;
`;
const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpTitle>어떤 사용자 인가요?</SignUpTitle>
      <Link to="/signup/student">
        <SignUpBtn icon={<UserOutlined />}>
          <br />
          재학생
        </SignUpBtn>
      </Link>
      <Link to="/signup/other">
        <SignUpBtn icon={<UsergroupAddOutlined />}>
          <br />
          이외의 사용자
        </SignUpBtn>
      </Link>
    </SignUpWrapper>
  );
};

export default SignUp;
