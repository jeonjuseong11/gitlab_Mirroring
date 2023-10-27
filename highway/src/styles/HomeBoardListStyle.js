import { Col, List, Row } from "antd";
import styled from "styled-components";

export const HomeBoardRow = styled(Row)`
  margin-top: 1rem;
  text-align: left;
`;

export const CustomListItem = styled(List.Item)`
  text-align: left;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${(props) => (props.hovered ? "#f5f5f5" : "transparent")};
  transition: background 0.3s;
  cursor: pointer;
`;

export const HomeBoardListWrapper = styled.div`
  border-top: 1px solid #f2f2f2;
  padding: 1rem;
`;

export const HomeBoardCol = styled(Col)`
  margin-bottom: 2rem;
`;
