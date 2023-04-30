import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";
import styled from "styled-components";
const SliderWrapper = styled.div`
  margin: 2px auto;
`;

function AdSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Slider>
    </SliderWrapper>
  );
}

export default AdSlider;
