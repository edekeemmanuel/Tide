import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
        
import React, { useRef, useState } from 'react';
import Slider, {Slide} from "../dashboard/Slider.jsx";
import {topCourses} from "../common/data.js";
import {coverflowEffect} from "../common/swipeModules.js"

const TopCategories = () => {
  const clickable =true
  return (
    <section className="mt-20 wrapper bg-fuchsia-50">
    <div className=" flex justify-start" >
        <h1 className="font-medium pt-4">Top Categories</h1>
      </div>
  <div className="pt-10 pb-16">
        <Slider
      settings={{
        spaceBetween: 20,
        slidesPerView: 3,
        effect: "coverflow",
        lazy:true,
        //navigation: true,
        grabCursor:true,
        pagination: clickable,
        centeredSlides: true,
        coverflowEffect:coverflowEffect,
      }}
    >
      {topCourses.map((slide, index) => (
        <Slide 
          key={slide.id ? slide.id : index}
        >
        <div className="rounded-lg border-2 border-solid border-neutral-400 outline outline-neutral-400 outline-offset-2 outline-1 hover:outline-2 p-10 bg-neutral-50"> 
            <img 
            className="h-60 rounded-lg"
            src={slide?.image}
            alt={slide?.text}
            loading="lazy"
          />
          <div className=" flex flex-col justify-center">
            <h2 className="pt-2 font-medium">{slide.text}</h2>
          </div>
        </div>
        </Slide>
      ))}
    </Slider>
  </div>
  </section>
  );
};
export default TopCategories;
