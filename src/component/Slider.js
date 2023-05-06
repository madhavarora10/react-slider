
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../img/img_1.jpg'
import img2 from '../img/img_2.jpg'
import img3 from '../img/img_3.jpg'
import img4 from '../img/img_4.jpg'
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider(props) {

 
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            
          },
          640: {
            slidesPerView: 4,
          
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 5,
          }
        }}
      initialSlide={props.index}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 300,
          modifier: 1,
          slideShadows: false,
          
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
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        
       
      </Swiper>
     
    </div>
  );
}
