import { Button, Col, Select } from "antd";
import ReactQuill from "react-quill";
import styled from "styled-components";

export const BoardDetailUpdateCol = styled(Col)`
  text-align: left;
  margin-top: 1rem;
  padding: 1rem;
  height: 3.5rem;
  margin-top: 2rem;
`;
export const BoardDetailUpdateSelect = styled(Select)`
  width: 30%;
  border-radius: 0;
`;
export const BoardDetailUpdateReactQuill = styled(ReactQuill)`
  height: 20rem;
`;

export const UpdateBoardDetailButton = styled(Button)`
  width: 10rem;
  margin-top: 2rem;
  height: 3rem;
  margin-right 1rem;
  border-radius: 50px;
  float: right;
`;
export const CancelUpdateBoardDetailButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 50px;
  float: right;
`;
