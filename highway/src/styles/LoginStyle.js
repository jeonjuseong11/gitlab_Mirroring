import styled from "styled-components";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  margin: 0 auto;
  width: 30%;
  padding-top: 15rem;
  text-align: left;
`;
export const LoginInput = styled(Input)`
  width: 100%;
  height: 3rem;
  font-weight: 700;
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
