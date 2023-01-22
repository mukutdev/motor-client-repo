import React from 'react';
import './Hero.css'
const Hero = () => {
    return (
        <div className="flex items-center h-[400px] md:h-[700px] w-full" style={{backgroundImage : `url(https://i.ibb.co/YWB0sdD/3ecde-01.jpg)`}} bg-cover='true' bg-center='true'>
    <div className='container mx-auto pl-4'>
      <h4 className="text-lg tracking-wider font-semibold text-white">Top Brands Cars </h4>
      <h1 className="md:text-4xl hero-heading text-2xl mt-4  font-bold text-white">Used Cars for Sale<br/> Find Your Next Ride Here</h1>
      <p className="py-6 text-white text-lg">Looking for a reliable used car at a great price? </p>
      <a href='#categories' className='btn bg-yellow-400 px-6 text-base text-slate-600 hover:text-white rounded border-yellow-400'>Get Started</a>
    </div>
</div>

);
};

export default Hero;