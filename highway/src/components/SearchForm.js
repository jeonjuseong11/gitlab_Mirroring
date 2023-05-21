import {
  BankFilled,
  DesktopOutlined,
  DollarCircleOutlined,
  DribbbleOutlined,
  ExperimentOutlined,
  FormatPainterOutlined,
  MedicineBoxOutlined,
  ReloadOutlined,
  SearchOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import {
  FilterButton,
  SearchInput,
  SearchWrapper,
} from "../styles/SearchFormStyle";
import { Space, Tag } from "antd";
const tagsData = [
  "체육",
  "IT",
  "의료",
  "회계",
  "과학",
  "디자인",
  "전자",
  "경영",
  "미디어",
];
const { CheckableTag } = Tag;

const SearchForm = ({ setSelectedTags, selectedTags }) => {
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {}, [inputValue]);
  return (
    <SearchWrapper>
      <h3>나에게 맞는 분야는 무엇일까요?</h3>
      <SearchInput
        placeholder="검색"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
        prefix={
          <SearchOutlined
            style={{ color: "black" }}
            onClick={(e) => {
              setSelectedTags(inputValue);
              console.log(inputValue);
            }}
          />
        }
      />
      <br />
      <span
        style={{
          marginRight: 8,
        }}
      ></span>
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </SearchWrapper>
  );
};

export default SearchForm;
