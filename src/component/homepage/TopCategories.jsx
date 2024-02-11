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
import vectorDots from './../../assets/images/Vector.svg';

const TopCategories = () => {
  const clickable =true;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const autoplayTime={
          delay: 4167,
          disableOnInteraction: false,
        };
  
  return (
    <main className="">
    <div className=" bg-[#6a589d] -z-12 overflow-hidden relative">
    <div className="bent-divI absolute bottom-0 w-full left-0 right-0 "></div>
<div className="wrapper pb-[140px]">
    <div className="flex justify-start" >
        <h1 className="font-heading pt-4 text-neutral-50">Top Categories</h1>
      </div>
  <div className="pt-10 z-10 relative">
        <Slider
      settings={{
        spaceBetween: 20,
        slidesPerView: 3,
        effect: "coverflow",
        lazy:true,
        //navigation: true,
        autoplay: autoplayTime,
        onAutoplayTimeLeft:onAutoplayTimeLeft,
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
          <div className="flex items-center justify-center pb-5">
            <img 
            className="h-60 rounded-lg"
            src={slide?.image}
            alt={slide?.text}
            loading="lazy"
          />
          </div>
          <div className="">
            <h2 className="text-center text-3xl">{slide.text}</h2>
          </div>
        </div>
        </Slide>
      ))}
      <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="text-neutral-50 font-bold cursor-pointer" ref={progressContent}></span>
        </div>
    </Slider>
     <div className="absolute sm:left-[-10px] w-[50%] sm:bottom-[-80px] -z-14">
        <img src={vectorDots} alt="vector dots" />
      </div>
      <div className="absolute sm:right-[-310px] w-[50%] sm:top-[-70px] -z-14">
        <img src={vectorDots} alt="vector dots" />
      </div>
  </div>
</div>
  </div>
  </main>
  );
};
export default TopCategories;
