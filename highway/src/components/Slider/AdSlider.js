import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
const banner1 = {
  small: `/assets/Banner1_small.png`,
  large: `/assets/Banner1.png`,
};

const banner2 = {
  small: `/assets/Banner2_small.png`,
  large: `/assets/Banner2.png`,
};

const banner3 = {
  small: `/assets/Banner3_small.png`,
  large: `/assets/Banner3.png`,
};

const banner4 = {
  small: `/assets/Banner4_small.png`,
  large: `/assets/Banner4.png`,
};
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Slider {...settings}>
        <Link to={`/schoolRanking`}>
          <SlideItem backgroundColor="#f5efd0">
            <img
              src={windowWidth <= 1200 ? banner1.small : banner1.large}
              style={{ height: "100%", margin: "0 auto" }}
            />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#d0e3f7" secondBackgroundColor="#d0e3f7">
            <img
              src={windowWidth <= 1200 ? banner2.small : banner2.large}
              style={{ height: "100%", margin: "0 auto" }}
            />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#a6d8ba" secondBackgroundColor="#81cc9f">
            <img
              src={windowWidth <= 1200 ? banner3.small : banner3.large}
              style={{ height: "100%", margin: "0 auto" }}
            />
          </SlideItem>
        </Link>
        <Link to={`/schoolboard/0`}>
          <SlideItem backgroundColor="#d1c4db" secondBackgroundColor="#ba8bc7">
            <img
              src={windowWidth <= 1200 ? banner4.small : banner4.large}
              style={{ height: "100%", margin: "0 auto" }}
            />
          </SlideItem>
        </Link>
      </Slider>
    </div>
  );
}

export default AdSlider;
