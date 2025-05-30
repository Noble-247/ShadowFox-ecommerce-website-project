import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className='flex flex-col sm:flex-row border border-gray-400 rounded-md mt-4'>
      {/* Left Hero Section */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-700'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'><Link to={"/collections"}>SHOP NOW</Link></p>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
          </div>
        </div>
      </div>
      {/* Right Hero Section */}
      <img
        src={assets.hero_img}
        alt='Hero Section Image'
        className='w-full sm:w-1/2'
      />
    </section>
  );
};

export default Hero;
