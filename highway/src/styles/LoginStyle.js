import styled from "styled-components";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

const BaseInput = styled(Input)`
  width: 100%;
  font-weight: 700;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  background-color: #f2f2f2;
  border: none;
`;

export const LoginWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f7f9;
`;

export const LoginForm = styled(Form)`
  margin-top: auto;
  text-align: left;
  width: 25%;
  min-width: 15rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  margin-bottom: auto;
`;

export const LoginFormTitle = styled.h1`
  text-align: center;
`;

export const LoginInput = styled(BaseInput)`
  height: 3rem;
`;

export const LoginBtn = styled(Button)`
  width: 100%;
  height: 3rem;
  background-color: #8282ff;
  font-weight: 700;
`;

export const LoginMenu = styled.p`
  text-align: left;
`;

export const LoginMenuItem = styled(Link)`
  text-decoration: none;
  color: #737881;
  font-weight: 500;
  letter-spacing: -0.6px;
  vertical-align: baseline;
  margin-right: 1rem;
`;

export const LoginTitleImage = styled.img`
  width: 10rem;
`;
