import Hero from '../component/homepage/Hero';
import TopCategories from '../component/homepage/TopCategories';
import Courses from '../component/dashboard/Course.jsx';
import {heading} from "../component/common/data.js";
import Footer from '../component/homepage/footer/Footer.jsx';
//import TidePages from '../component/homepage/footer/TidePages.jsx';

const Home = () => {
  const newHeading = [...heading];
  return (
    <>
      <Hero />
      <TopCategories />
      <Courses heading={newHeading[1]}/>
    <div className="bg-[#6a589d]">
      <div className="flex justify-center items-center max-w-[32em] md:mt-0 relative z-10 md:flex-1 md:max-w-full w-full mx-auto md:mx-0 justify-center flex-col md:pr-6  md:pl-5 text-center md:text-left text-white py-[200px]">
          <h1 className="font-heading mb-4 ">
            Gain knowledge, develop and achieve success.
          </h1>
          <button
            className="bg-yellow-400 md:mt-4 rounded-md  mx-auto  md:mx-0 pt-3 md:pt-4 pb-3 md:pb-[13px] px-8 lg:px-[40px]  w-fit text-[#0F172B] font-bold cursor-pointer"
            onClick={() => {
              // navigate('/register');
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
