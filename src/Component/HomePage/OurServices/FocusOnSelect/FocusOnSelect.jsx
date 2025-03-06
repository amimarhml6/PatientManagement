import React, { Component } from "react";
import Slider from "react-slick";
import "./FocusOnSelect.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardServices from "../CardServices/CardServices";
function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <CardServices/>
        </div>
        <div>
        <CardServices/>
        </div>
        <div>
        <CardServices/>
        </div>
        <div>
        <CardServices/>
        </div>
        <div>
        <CardServices/>
        </div>
        <div>
        <CardServices/>
        </div>

      </Slider>
    </div>
  );
}

export default SwipeToSlide;
