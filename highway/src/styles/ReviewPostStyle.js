import { Button, Form } from "antd";
import styled from "styled-components";

export const FormItemWrapper = styled.div`
  display: flex;
  width: 100%;
  line-height: 2.3rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormTitle = styled.h2`
  text-align: left;
  margin-top: 0;
`;

export const FormItem = styled(Form.Item)`
  margin: 0;
`;

export const FormItemP = styled.p`
  margin: 0px;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ReviewWriteBtnWrapper = styled(Form.Item)`
  float: right;
  margin-top: 1rem;
  width: 100%;
  text-align: right;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const MessageWrapper = styled.div`
  margin-left: 1rem;
`;

export const ReviewWriteForm = styled(Form)`
  width: 100%;
  text-align: left;
  margin-bottom: 3rem;
`;

export const ReviewCancelBtn = styled(Button)`
  margin-left: 1rem;
`;
