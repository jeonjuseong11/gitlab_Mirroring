import React, { useEffect, useState } from "react";
import { RankTopic } from "./RankSelector";
import {
  SearchButton,
  SearchFormWrapper,
  SearchInput,
  SearchInputIcon,
  SearchTitle,
  SearchButtonWrapper,
  SliderWrapper,
  Container,
  ContentContainer,
} from "../styles/SearchFormStyle"; // Make sure to import SliderControls from the appropriate path
import { Button } from "antd";

export const SliderControls = ({
  totalCount,
  currentIndex,
  onChange,
  isPrevButtonDisabled,
  isNextButtonDisabled,
}) => {
  const nextIndex = (currentIndex + 1) % totalCount;
  const prevIndex = (currentIndex - 1 + totalCount) % totalCount;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", gap: "1rem" }}>
      <Button shape="circle" onClick={() => onChange(prevIndex)} disabled={isPrevButtonDisabled}>
        ←
      </Button>
      <Button shape="circle" onClick={() => onChange(nextIndex)} disabled={isNextButtonDisabled}>
        →
      </Button>
    </div>
  );
};

const SearchForm = ({ setFilterValue, filterValue }) => {
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);
  const [buttonsPerSlide, setButtonsPerSlide] = useState(5); // Initialize with 5 buttons per slide

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

  const handleSliderChange = (currentIndex) => {
    setSliderIndex(currentIndex);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      setButtonsPerSlide(3);
    } else {
      setButtonsPerSlide(5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleButtons = RankTopic.slice(
    sliderIndex * buttonsPerSlide,
    (sliderIndex + 1) * buttonsPerSlide
  );

  // const isPrevButtonDisabled = sliderIndex === 0;
  // const isNextButtonDisabled = (sliderIndex + 1) * buttonsPerSlide >= RankTopic.length;

  return (
    <Container>
      <ContentContainer>
        <SearchTitle>나에게 맞는 분야는 무엇일까요?</SearchTitle>
        <SearchFormWrapper>
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
        </SearchFormWrapper>
        <SearchButtonWrapper>
          <SliderWrapper>
            {visibleButtons.map((item) => (
              <SearchButton
                key={item.value}
                onClick={() => handleButtonClick(item.value)}
                shape="square"
                active={item.value === activeButton ? item.value : ""}
              >
                <span style={{ marginBottom: ".5rem", marginTop: ".5rem" }}>{item.icon}</span>
                {item.content}
              </SearchButton>
            ))}
          </SliderWrapper>
        </SearchButtonWrapper>
        <SliderControls
          totalCount={Math.ceil(RankTopic.length / buttonsPerSlide)}
          currentIndex={sliderIndex}
          onChange={handleSliderChange}
          // isPrevButtonDisabled={isPrevButtonDisabled}
          // isNextButtonDisabled={isNextButtonDisabled}
        />
      </ContentContainer>
    </Container>
  );
};

export default SearchForm;
