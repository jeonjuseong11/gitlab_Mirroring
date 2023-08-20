import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { RankTopic } from "./RankSelector";
import {
  SearchButton,
  SearchButtonCol,
  SearchButtonWrapper,
  SearchFormWrapper,
  SearchInput,
  SearchInputIcon,
  SearchTitle,
  SearchTitleRow,
} from "../styles/SearchFormStyle";

const SearchForm = ({ setFilterValue, filterValue }) => {
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    setFilterValue(filterValue);
  }, [filterValue, setFilterValue]);

  const handleButtonClick = (value) => {
    if (activeButton === value) {
      setFilterValue("");
      setActiveButton("");
    } else {
      setFilterValue(value);
      setActiveButton(value);
    }
  };

  return (
    <>
      <SearchTitleRow justify="center" gutter={[16, 16]}>
        <Col xs={24} md={15}>
          <SearchTitle>나에게 맞는 분야는 무엇일까요?</SearchTitle>
        </Col>
      </SearchTitleRow>
      <SearchFormWrapper>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={22} md={9}>
            <SearchInput
              placeholder="검색"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setFilterValue(searchText);
                }
              }}
              prefix={<SearchInputIcon />}
            />
          </Col>
        </Row>
      </SearchFormWrapper>
      <SearchButtonWrapper>
        <Row justify="center" gutter={[16, 16]}>
          <SearchButtonCol xs={24} md={9}>
            {RankTopic.map((item) => (
              <SearchButton
                key={item.value}
                onClick={() => handleButtonClick(item.value)}
                shape="square"
                isActive={item.value === activeButton}
              >
                <span style={{ marginBottom: "1rem" }}>{item.icon}</span>
                {item.content}
              </SearchButton>
            ))}
          </SearchButtonCol>
        </Row>
      </SearchButtonWrapper>
    </>
  );
};

export default SearchForm;
