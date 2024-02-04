import img1 from './../../assets/images/heroImg1.jpeg';
import img2 from './../../assets/images/heroImg2.jpeg';
import img3 from './../../assets/images/heroImg3.jpeg';
import vectorDots from './../../assets/images/Vector.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className="hero bg-primaryColor mb-10 -z-12 overflow-hidden relative">
      <div className="bent-div absolute bottom-0 w-full left-0 right-0 "></div>

      <div className="wrapper  pt-[50px] pb-[60px]  md:pt-[100px] md:pb-[140px] gap-6 items-center md:flex md:flex-row-reverse">
        <div className="hero_img grid gap-5 md:flex-[1.2] z-10 relative md:w-[60%]">
          <div className="absolute right-[-10px] w-[50%] top-[-20px] md:top-[-50px] -z-10">
            <img src={vectorDots} alt="vector dots" />
          </div>
          <img
            className="hero-img1 rounded-md h-full"
            src={img1}
            alt="hero image"
          />
          <img
            className="hero-img2  rounded-md h-full"
            src={img2}
            alt="hero image"
          />
          <img className="hero-img3  rounded-md" src={img3} alt="hero image" />
          <div className="absolute left-[-10px] w-[50%] bottom-[20px] md:bottom-[-50px] -z-10">
            <img src={vectorDots} alt="vector dots" />
          </div>
        </div>
        <div className="flex max-w-[32em] mt-8 md:mt-0 relative z-10 md:flex-1 md:max-w-full w-full mx-auto md:mx-0 justify-center flex-col md:pr-6  md:pl-5 text-center md:text-left text-white">
          <h1 className="font-heading mb-4 ">
            Get the necessary abilities right now.
          </h1>
          <p className=" md:text-lg lg:text-xl pb-[18px] lg:w-[65%]">
            Our top-notch classes prepare you for high-paying jobs.
          </p>
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
    </div>
  );
};
export default Hero;
