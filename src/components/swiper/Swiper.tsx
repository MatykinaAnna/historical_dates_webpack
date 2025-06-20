import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { interfaceEventComponent } from '../../shared/interface';
import EventComponent from '../event/event';

export default function ComponentSwiper( props: {array: interfaceEventComponent[]} ) {

const listEvent = props.array.map((item)=>{
    return (
        <SwiperSlide>
            <EventComponent {
            ...{
                year: item.year,
                description: item.description
            }} ></EventComponent>
        </SwiperSlide>
    )
})

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {listEvent}
      </Swiper>
    </>
  );
}
