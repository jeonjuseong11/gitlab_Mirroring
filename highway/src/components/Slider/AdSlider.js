import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
const banner1 = `/assets/Banner1.png`;
const banner2 = `/assets/Banner2.png`;
const banner3 = `/assets/Banner3.png`;
const banner4 = `/assets/Banner4.png`;
const SlideItem = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${(props) => props.backgroundColor || "#ffffff"} 50%,
    ${(props) => props.secondBackgroundColor || "#ffffff"} 50%
  );
  display: flex;
`;
function AdSlider() {
  const settings = {
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    infinite: true,
    lazyLoad: true,
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
        },
      },
    ],
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[next].classList.add("active");
    },
  };
  return (
    <div>
      <Slider {...settings}>
        <Link to={`/schoolRanking`}>
          <SlideItem backgroundColor="#f5efd0">
            <img src={banner1} style={{ height: "100%", margin: "0 auto" }} />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#d0e3f7" secondBackgroundColor="#d0e3f7">
            <img src={banner2} style={{ height: "100%", margin: "0 auto" }} />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#a6d8ba" secondBackgroundColor="#81cc9f">
            <img src={banner3} style={{ height: "100%", margin: "0 auto" }} />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#d1c4db" secondBackgroundColor="#ba8bc7">
            <img src={banner4} style={{ height: "100%", margin: "0 auto" }} />
          </SlideItem>
        </Link>
      </Slider>
    </div>
  );
}

export default AdSlider;
