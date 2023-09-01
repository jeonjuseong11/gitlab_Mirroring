import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Row } from "antd";
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

export const SearchTitle = styled.h2``;

export const SearchFormWrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  min-width: 20rem;
`;

export const SearchButtonWrapper = styled.div`
  margin-top: 1.5rem;
  overflow-x: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  min-width: 20rem;
`;
export const SearchInputIcon = styled(SearchOutlined)`
  color: black;
  font-size: 1rem;
`;
export const SearchButton = styled(Button)`
  border-radius: 10px;
  padding-top: 0.5rem;
  height: 6rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "")};
  background-color: ${({ isActive }) => (isActive ? "#8282ff" : "")};
`;
export const SearchButtonDiv = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  min-width: 20rem;
`;
export const SliderWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin-top: 1rem;
  width: 35rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;
