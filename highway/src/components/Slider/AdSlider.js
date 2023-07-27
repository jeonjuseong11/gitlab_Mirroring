import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AdSlider.css";
const banner1 = "/assets/banner1.png";
const banner2 = "/assets/banner2.png";
const banner3 = "/assets/banner3.png";
const banner4 = "/assets/banner4.png";
const banner5 = "/assets/banner5.png";

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
          centerPadding: "20%",
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
        <div className="slide-item">
          <img
            src={banner1}
            alt="banner1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
        <div className="slide-item">
          <img
            src={banner2}
            alt="banner2"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
        <div className="slide-item">
          <img
            src={banner3}
            alt="banner3"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
        <div className="slide-item">
          <img
            src={banner4}
            alt="banner4"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default AdSlider;
