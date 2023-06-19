import React from 'react';
import "./Portifolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png";

import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
const Portifolio = () => {
  return (
    <div className='portifolio' id='Portifolio'>
<span> Recent Projects  </span>
<span>Portfolio</span>
<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='portifolio-slider'
>
    <SwiperSlide>
<img src={Sidebar}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={''}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={HOC}alt=''/>
    </SwiperSlide>
    <SwiperSlide>
<img src={MusicApp}alt=''/>
    </SwiperSlide>
</Swiper>
    </div>
  )
}

export default Portifolio