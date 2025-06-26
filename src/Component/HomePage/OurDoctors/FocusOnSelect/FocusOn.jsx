import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FocusOn.css'
import CardDoctor from "../CardDoctor/CardDoctor";
import DocGeniralist from '../../../../assets/DocGeneralist.svg'
import DocDentist from '../../../../assets/DocDentist.svg'
import DocHematologue from '../../../../assets/DocHematologue.svg'
import DocRadiologue from '../../../../assets/DocRadiologue.svg'
import DocSurgery from '../../../../assets/DocSurgery.svg'

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
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-containerD">
      <Slider {...settings}>
        <div>
          <CardDoctor image={DocDentist} name="Dentist doctors"  Exp1="12 years exp"  Exp2="Dental surgery" Exp3="Aesthetic orthodontics" Exp4="Dental care" />
        </div>
        <div>
          <CardDoctor image={DocGeniralist} name="generalist doctors" Exp1="30 years exp" Exp2="Chronic diseases" Exp3="Medical emergencies" />
        </div>
        <div>
          <CardDoctor image={DocSurgery} name="surgery doctors" Exp1="35 years exp" Exp2="Advanced surgery" Exp3="Procedures" />
        </div>
        <div>
          <CardDoctor image={DocHematologue} name="hematology doctors" Exp1="15 years exp" Exp3="Blood diseases" Exp4="Assessment analysis"/>
        </div>
        <div> 
           
          <CardDoctor image={DocRadiologue} name="radiologist doctors"  Exp1="10 years exp" Exp2="Medical Imaging" Exp3="Fracture Diagnosis"  Exp4="MRI & CT Scan"/>
        </div>
        

      </Slider>
    </div>
  );
}

export default SwipeToSlide;
