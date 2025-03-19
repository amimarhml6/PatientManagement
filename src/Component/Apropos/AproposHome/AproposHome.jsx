import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './AproposHome.css';

const AproposHome = () => {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay:3000,
        disableOnInteraction: false,
      }}
      loop
    >
       
      <SwiperSlide>
        <div className="slide-content" id="slide1">
          <h1>About MedLink</h1>
          <p>MedLink is an innovative platform dedicated to managing patients, appointments, and clinics efficiently.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content" id="slide2">
          <h1>Our Mission</h1>
          <p>To facilitate access to healthcare by seamlessly connecting patients and medical professionals.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content" id="slide3">
          <h1>Our Vision</h1>
          <p>To revolutionize healthcare management through technology and become the industry leader by 2030.</p>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default AproposHome;