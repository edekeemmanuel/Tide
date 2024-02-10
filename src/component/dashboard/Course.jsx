import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
        

import Slider, {Slide} from "./Slider";
import {courses} from "../common/data.js";
import {coverflowEffect} from "../common/swipeModules.js"
import TopCategories from "../homepage/TopCategories.jsx"

const Courses = () => {
  const dynamicBullets =true
  return (
<main className="mt-12 ps-4">
    <section className="wrapper">
      <div className=" flex justify-start" >
        <h1 className="font-medium ">Welcome Samir 🖐</h1>
      </div>
  <div className="mt-12">
        <Slider
      settings={{
        spaceBetween: 40,
        slidesPerView: 3,
        centeredSlides: true,
        //effect: "creative",
        grabCursor:true,
        pagination: dynamicBullets,
        //creativeEffect: creativeEffect
      }}
    >
      {courses.map((slide, index) => (
        <Slide 
          key={slide.id ? slide.id : index}
        >
        <div className="rounded-lg border-2 border-solid border-neutral-400 outline outline-neutral-400 outline-offset-2 outline-1 hover:outline-2 pb-10 "> 
            <img 
            className="h-80 rounded-lg"
            src={slide?.image}
            alt={slide?.text}
          />
          <div className=" flex flex-col justify-center">
            <h2 className="p-8">{slide.text}</h2>
            <button
              className="bg-purple-800 md:mt-4 rounded-md  mx-auto  md:mx-0 pt-3 md:pt-4 pb-3 md:pb-[13px] px-8 lg:px-[40px]  w-fit text-[#0F172B] font-bold cursor-pointer text-neutral-50"
              type="submit"
              name="Apply"
              value="Apply">Apply</button>
          </div>
        </div>
        </Slide>
      ))}
    </Slider>
  </div>
  </section>
  <TopCategories />
</main>
  );
};
export default Courses;
