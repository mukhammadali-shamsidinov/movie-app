import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://zetfix.online/uploads/posts/2022-11/1668718524_ast2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://daryo.uz/cache/2019/05/Qasosrorlar-680x340-680x340.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freekino.net/movieposter/tinch-okean-daxshatlari-1_1666072899.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.dailycamera.com/wp-content/uploads/migration/2011/0629/20110629_072744_01dcfmv1w.jpg?w=1024" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
