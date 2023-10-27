import styled from "styled-components";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  min-height: 90vh;
`;

export const LoginForm = styled(Form)`
  margin-top: 2rem;
  text-align: left;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const LoginFormTitle = styled.h1`
  text-align: center;
`;

export const LoginInput = styled(Input)`
  width: 100%;
  height: 2.5rem;
  font-weight: 700;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
`;

export const LoginBtn = styled(Button)`
  width: 100%;
  height: 2.5rem;
  background-color: #8282ff;
  font-weight: 700;
  border: none;
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
