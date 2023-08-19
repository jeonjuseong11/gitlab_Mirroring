import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";
import styled from "styled-components";
const banner1 = `/assets/banner1.png`;
const banner2 = `/assets/banner2.png`;
const banner3 = `/assets/banner3.png`;
const banner4 = `/assets/banner4.png`;
const SlideItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
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
        <SlideItem image={banner1} />
        <SlideItem image={banner2} />
        <SlideItem image={banner3} />
        <SlideItem image={banner4} />
      </Slider>
    </div>
  );
}

export default AdSlider;
