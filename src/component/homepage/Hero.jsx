import heroImg from '../../assets/images/imgione.png';

const Hero = () => {
  return (
    <section className=" bg-primaryColor  mt-2">
      <div className="grid wrapper hero gap-4 pt-7 md:pt-0 items-center max-w-[80rem] w-full mx-auto pb-5 lg:pt-8">
        <div className="flex max-w-[32em] md:max-w-full w-full mx-auto md:mx-0 justify-center flex-col md:pr-6  md:pl-5 text-white text-center md:text-left">
          <h1 className="font-heading mb-4">
            Get the necessary abilities right now.
          </h1>
          <p className=" md:text-lg lg:text-xl pb-[18px] lg:w-[65%]">
            Our top-notch classes prepare you for high-paying jobs.
          </p>
          <button
            className="bg-yellow-400 md:mt-4 rounded-md  mx-auto  md:mx-0 pt-3 md:pt-4 pb-3 md:pb-[13px] uppercase px-8 lg:px-[40px]  w-fit text-[#0F172B] font-bold"
            onClick={() => {
              // navigate('/register');
            }}
          >
            Get Started
          </button>
        </div>
        <div className="relative  hero-img h-[283px] md:h-[470px] overflow-hidden px-5 md:px-0">
          {/* {heroImgs.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`slider-image h-[400px] md:h-[100%] object-contain w-[90%] md:w-full mx-auto ${
                index === currentImageIndex ? 'active' : ''
              }`}
            />
          ))} */}
          <img
            src={heroImg}
            alt=""
            className="h-[400px] md:h-[100%] object-contain w-[90%] md:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
