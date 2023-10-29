import { Button, Col, Form, Select } from "antd";
import ReactQuill from "react-quill";
import styled, { css } from "styled-components";

// 반응형 버튼 스타일
const responsiveButtonStyles = css`
  width: 100%;
  height: 3rem;
  border-radius: 50px;
`;

export const BoardDetailPostFormCol = styled(Col)`
  text-align: left;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BoardDetailPostSelect = styled(Select)`
  width: 100%;
  border-radius: 0;
`;

export const BoardDetailPostReactQuill = styled(ReactQuill)`
  height: 20rem;
  margin-bottom: 4rem;
`;

export const BoardDetailPostButton = styled(Button)`
  ${responsiveButtonStyles}

  @media (min-width: 768px) {
    width: 10rem;
    float: right;
  }
`;

export const CustomQuillWrapper = styled(Form.Item)`
  position: relative;
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

  @media (max-width: 768px) {
    .ql-container {
      border-radius: 0;
    }
    .ql-toolbar {
      border-radius: 0;
    }
    margin-bottom: 50px;
  }
`;

export const ImageUploadWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const ImageUpload = styled.div``;

export const ImageUploadButton = styled(Button)`
  ${responsiveButtonStyles}

  @media (min-width: 768px) {
    width: auto;
    margin-top: 0;
  }
`;
