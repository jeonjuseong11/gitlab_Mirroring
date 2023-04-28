import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useInput from "../hooks/useInput";

const Login = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  return (
    <div className="loginPage">
      <div className="loginWrap">
        <div className="login-header">
          <h1>웹 이름</h1>
          <div>서비스를 이용하려면 로그인이 필요합니다.</div>
        </div>
        <form className="login-form">
          <div className="form-id">
            <input
              type="text"
              value={id}
              onChange={onChangeId}
              placeholder="아이디"
              maxLength="12"
            />
          </div>
          <div className="form-password">
            <input
              type="password"
              value={pw}
              onChange={onChangePw}
              placeholder="비밀번호"
            />
          </div>
          <div className="form-check">
            <div className="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" />
              <label htmlFor="rememberMeCheckbox">이 계정 기억하기</label>
            </div>
          </div>
          <button type="button" className="loginBtn">
            로그인
          </button>
        </form>
        <div className="login-footer">
          <a href="#">비밀번호 찾기</a>|<Link to="/signup">신규회원 가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
