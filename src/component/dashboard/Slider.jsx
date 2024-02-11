//import {SliderWrap} from "./swiper.style";
// styled-component wrap
import {Swiper, SwiperSlide} from 'swiper/react';
// SwiperSlide is pretty self-explantory. it is one slide that would contain
// one of data you want to show
import {Navigation, Pagination, Scrollbar, EffectFade, Autoplay, A11y, EffectCoverflow, EffectCreative, FreeMode, Thumbs} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import "swiper/css/a11y";
import "swiper/css/effect-fade";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// install Swiper modules
//SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);


const Slider = ({children, settings}) => {
  const sliderOptions = {
    //pagination: true,
    //scrollbar: true,
    //navigation: true,
    loop: true,
    // autoplay: {
    //  delay: 1000,
    //  disableOnInteraction: false,
    // },
    ...settings
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };
  // swiper takes options as props
  // you can find more about options on the website link above

  return (
   //  <SliderWrap
//       dots={sliderOptions?.pagination}
//       arrows={sliderOptions?.navigation}
//       // I pass dots and arrow props to custom pagination and navigation in styled-component
//     >
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCreative, FreeMode, Thumbs]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        {...sliderOptions}
      >
        {children}
      </Swiper>
    //</SliderWrap>
  );
};

export {SwiperSlide as Slide};
export default Slider;