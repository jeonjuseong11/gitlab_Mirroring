import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 50%;
  margin: 5rem auto;
`;
const SearchInput = styled(Input)`
  width: 60%;
`;
const SearchForm = () => {
  return (
    <SearchWrapper>
      <h3>나에게 맞는 분야는 무엇일까요?</h3>
      <SearchInput
        placeholder="검색"
        prefix={<SearchOutlined style={{ color: "black" }} />}
      />
    </SearchWrapper>
  );
};

export default SearchForm;
