import React from "react";
import Slider from "react-slick";
import "./FocusOnSelect.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardServices from "../CardServices/CardServices";

import dentist from '../../../../assets/dentist.jpg';
import generaliste from '../../../../assets/generalistes.jpg';
import chirurgie from '../../../../assets/chirurgie.jpg';
import hematology from '../../../../assets/hématology .jpg';
import radiologue from '../../../../assets/radiologue.jpg';

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    afterChange: function(index) {
      console.log(`Slider Changed to: ${index + 1}`);
    }
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <CardServices image={dentist} name="Dentist Service" desc="Our Dentist team is highly skilled and experienced in providing comprehensive oral care. They are always ready to assist you with your dental health needs."/>
        </div>
        <div>
          <CardServices image={generaliste} name="Generalist Service" desc="Our General Practitioner team is highly skilled and experienced in providing comprehensive primary care. They are always ready to assist you with your health concerns."/>
        </div>
        <div>
          <CardServices image={chirurgie} name="Surgery Service" desc="Our Surgery team consists of expert surgeons dedicated to performing precise and effective procedures. They are always prepared to provide the best surgical care."/>
        </div>
        <div>
          <CardServices image={hematology} name="Hematology Service" desc="Our Hematology team is highly skilled and experienced in diagnosing and treating blood disorders. They are always ready to assist you with your health concerns."/>
        </div>
        <div> 
          <CardServices image={radiologue} name="Radiologist Service" desc="Our Radiology team is highly skilled and experienced in performing advanced medical imaging. They are always ready to assist you with your health concerns."/>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
