import { UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { SignUpWrapper, SignUpBtn } from "../styles/SignUpStyle";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <div>
        <h2>어떤 사용자 인가요?</h2>
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
      </div>
    </SignUpWrapper>
  );
};

export default SignUp;
