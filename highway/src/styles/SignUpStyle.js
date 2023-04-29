import styled from "styled-components";
import { Button, Form, Input } from "antd";

export const SignUpWrapper = styled.div`
  height: 100%;
  background-color: #fbfbfb;
  height: 100vh;
`;
export const SignUpStudentWrapper = styled.div`
  background-color: #fbfbfb;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
export const SignUpForm = styled(Form)`
  background-color: white;
  width: 30%;
  margin: 0 auto;
  border: 1px solid #efefef;
  padding: 3rem;
  border-radius: 1.25rem;
  text-align: left;
`;
export const SignUpInput = styled(Input, Input.Password)`
  height: 3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SignUpBtn = styled(Button)`
  background-color: #8282ff;
  width: 45%;
  height: 3rem;
  display: inline-block;
`;
export const CancelBtn = styled(Button)`
  border: 1px solid #8282ff;
  color: #8282ff;
  width: 45%;
  height: 3rem;
  display: inline-block;
`;
