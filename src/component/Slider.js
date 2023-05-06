import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../img/img_1.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
      
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
