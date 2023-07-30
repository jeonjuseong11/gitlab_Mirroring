import { Button, Col, Input, Select } from "antd";
import ReactQuill from "react-quill";
import styled from "styled-components";

export const BoardDetailPostFormCol = styled(Col)`
  text-align: left;
  margin-top: 1rem;
  padding: 1rem;
`;
export const BoardDetailPostSelect = styled(Select)`
  width: 30%;
  border-radius: 0;
`;
export const BoardDetailPostReactQuill = styled(ReactQuill)`
  height: 20rem;
`;

export const BoardDetailPostButton = styled(Button)`
  width: 10rem;
  margin-top: 2rem;
  height: 3rem;
  margin-right 1rem;
  border-radius: 50px;
  float: right;
`;
