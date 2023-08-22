import { Button, Col, Form, Input, Select } from "antd";
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
  margin-bottom: 3rem;
`;

export const BoardDetailPostButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  margin-right 1rem;
  border-radius: 50px;
  float: right;

`;
export const CustomQuillWrapper = styled(Form.Item)`
  .ql-container {
    border-color: ${(props) => (props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important")};
    border-radius: 0 0 10px 10px;
  }

  .ql-toolbar {
    border-color: ${(props) => (props.isFocused ? "#a8a8fe !important" : "#f2f2f2 !important")};
    border-radius: 10px 10px 0 0;
  }
  .ql-container::placeholder {
    color: #c2c2c2;
    font-weight: 700;
  }
  .ql-container:focus::placeholder {
    color: #a8a8fe;
  }
`;
