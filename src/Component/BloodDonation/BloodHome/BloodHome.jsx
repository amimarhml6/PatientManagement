import './BloodHome.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const BloodHome = () => {
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
        <div className="slide-content" id="slide11">
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content" id="slide22">
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content" id="slide33">
          
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default BloodHome;