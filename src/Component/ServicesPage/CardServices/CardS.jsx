import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardS.css";
import CardDoctor from "../CardServices/CardDoc/CardDoc";

function SwipeToSlide({ doctors }) {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: doctors.length > 4 ? 4 : doctors.length,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}`);
        }
    };
    console.log("Doctors data:", doctors);

    return (
        <div className="slider-containerS">
            <Slider {...settings}>
                {doctors.map((doctor, index) => (
                    <div key={index} style={{ height: "100px" }}>
                        <CardDoctor
                            image={doctor.image}
                            name={doctor.name}
                            experiences={doctor.experiences}
                            
                        />
                        
                    </div>
                ))}
                

            </Slider>
        </div>
    );
}

export default SwipeToSlide;
