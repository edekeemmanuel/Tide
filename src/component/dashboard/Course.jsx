import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
        

import Slider, {Slide} from "./Slider";
import {courses} from "../common/data.js";
//import {creativeEffect} from "../common/swipeModules.js"

const Courses = (props) => {
  const dynamicBullets = true ?? "clickable";
  const {heading, course} = props;
  const styleCourse = course ? "course": "";
  return (
<main className="">
    <div className={`${styleCourse} bg-primaryColor -z-12 overflow-hidden relative`}>
    <div className="bent-div absolute bottom-0 w-full left-0 right-0 "></div>
<div className="wrapper pb-[140px]">
    <div className="flex justify-start" >
        <h1 className="font-heading pt-4 text-neutral-50 ">{heading}</h1>
      </div>
  <div className="mt-12">
        <Slider
      settings={{
        spaceBetween: 40,
        slidesPerView: 3,
        centeredSlides: true,
        navigation: true,
        //effect: "creative",
        grabCursor:true,
        pagination: dynamicBullets,
        speed:600,
        parallax:true,
        //creativeEffect: creativeEffect
      }}
    >
      {courses.map((slide, index) => (
        <Slide 
          key={slide.id ? slide.id : index}
        >
        <div className="rounded-lg border-2 border-solid border-[#6a589d] outline outline-[#6a589d] outline-offset-2 outline-1 hover:outline-2 pb-10 "> 
            <img 
            data-swiper-parallax="-5"
            className="h-80 rounded-lg"
            src={slide?.image}
            alt={slide?.text}
          />
          <div className=" flex flex-col justify-center items-center">
            <h2 data-swiper-parallax="-5" className="text-neutral-50 pt-4 text-lg">{slide.text}</h2>
            <button data-swiper-parallax="-50"
              className="bg-purple-800 md:mt-4 rounded-md  mx-auto  md:mx-0 pt-4 md:pt-4 pb-3 md:pb-[13px] px-8 lg:px-[40px]  w-fit text-[#0F172B] font-bold cursor-pointer text-neutral-50"
              type="submit"
              name="Apply"
              value="Apply">Apply</button>
          </div>
        </div>
        </Slide>
      ))}
    </Slider>
  </div>
  </div>
  </div>
</main>
  );
};
export default Courses;
