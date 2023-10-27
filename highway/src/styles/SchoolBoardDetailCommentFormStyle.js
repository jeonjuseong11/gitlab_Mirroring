import { Input, List } from "antd";
import styled from "styled-components";

export const SchoolBoardDetailCommentListItem = styled(List.Item)`
  border-bottom: 1px solid #d2d2d2;
  text-align: left;
`;

export const SchoolBoardDetailCommentInputTextArea = styled(Input.TextArea)`
  padding: 1rem;
  resize: none;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;
