import React from 'react';
import Heroimg from "../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-[550px] bg-cover bg-center flex flex-col items-center justify-end text-center px-4 cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: `url(${Heroimg})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 pb-16">
       
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-lg">
          Shop
        </button>
      </div>
    </div>
  );
};

export default Hero;