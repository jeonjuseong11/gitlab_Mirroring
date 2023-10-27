import styled, { keyframes } from "styled-components";
import { Button, Form, Input, Select } from "antd";

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SchoolSelector = styled(Select)`
  animation: ${slideDownAnimation} 0.5s ease-in-out;
`;

export const SignUpWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fbfbfb;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SignUpBtn = styled(Button)`
  width: 10rem;
  height: 10rem;
  font-size: 1.5rem;
  margin-left: 5px;
  margin-right: 5px;
`;

export const SignUpForm = styled(Form)`
  background-color: white;
  width: 80%;
  min-width: 30rem;
  border: 1px solid #efefef;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 1.25rem;
  text-align: left;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const SignUpInput = styled(Input)`
  height: 3rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: #f2f2f2;
`;

export const SignUpInputPassword = styled(Input.Password)`
  height: 3rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: #f2f2f2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StudentSignUpBtn = styled(Button)`
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

export const BackToLogin = styled(Button)`
  width: 40%;
  margin-top: 7%;
  color: #ffffff;
  height: 3rem;
  background-color: #8282ff;
  font-weight: 700;
`;

export const SmallFormItem = styled(Form.Item)`
  display: inline-block;
  width: 50%;
`;

export const DoubleCheckButton = styled(Button)`
  height: 3rem;
  border-color: #f2f2f2;
`;

export const IdValidTrueP = styled.p`
  color: green;
  margin-top: -1.5rem;
  margin-bottom: 0rem;
`;

export const IdValidFalseP = styled.p`
  color: red;
  margin-top: -1.5rem;
  margin-bottom: 0rem;
`;

export const GenderValidWrapper = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
`;

export const TermsCheckWrapper = styled.div`
  color: ${(props) => (!props.value ? "#a2a2a2" : "black")};
  cursor: pointer;
  margin-top: 0.3rem;
`;
