import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import styled from "styled-components";

export const SearchInput = styled(Input)`
  background-color: #f2f2f2;
  border-radius: 10px;
  border: #f2f2f2;
  height: 3.5rem;
`;

export const SearchTitleRow = styled(Row)`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const SearchTitle = styled.h2`
  margin: 0;
`;

export const SearchFormWrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const SearchButtonWrapper = styled.div`
  margin-top: 1.5rem;
  overflow-x: auto;
  flex-wrap: nowrap;
`;
export const SearchInputIcon = styled(SearchOutlined)`
  color: black;
  font-size: 1rem;
`;
export const SearchButton = styled(Button)`
  border-radius: 10px;
  padding-top: 1rem;
  height: 6.5rem;
  width: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "")};
  background-color: ${({ isActive }) => (isActive ? "#8282ff" : "")};
`;
export const SearchButtonCol = styled(Col)`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;
`;
