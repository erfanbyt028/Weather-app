import React from 'react';
import { WiBarometer } from "react-icons/wi";
import { IoWaterOutline } from "react-icons/io5";

const Barometer = ({ pressure = '-' }) => {
  return (
    <div className="w-full max-w-xs h-40 sm:h-56 p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white flex flex-col justify-between shadow-lg">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
        <WiBarometer className="text-blue-300" size={18}/>
        <span>Barometer</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-5xl font-bold">
        <IoWaterOutline className="text-blue-300 text-xl sm:text-3xl" size={18}/>
        <span>{pressure}</span>
        <span className="text-xs sm:text-lg font-normal ml-1">hPa</span>
      </div>
      <div className="relative mt-2">
        <svg className="absolute top-0 left-0 w-full h-10 sm:h-16" viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 20 C 60 10, 100 30, 140 25 S 220 35, 310 40"
            stroke="#AEE6FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="10" cy="20" r="6" fill="#AEE6FF" />
          <circle cx="310" cy="40" r="6" fill="#AEE6FF" />
        </svg>
        <div className="flex justify-between items-end px-2 mt-8 sm:mt-14">
          {[1,2,3,4,5].map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <svg width="16" height="20" viewBox="0 0 24 24" fill="#AEE6FF">
                <path d="M12 2C8.13 6.5 6 10.39 6 13.5C6 17.09 8.91 20 12.5 20C16.09 20 19 17.09 19 13.5C19 10.39 15.87 6.5 12 2Z" />
              </svg>
              <span className="text-xs sm:text-sm opacity-90">{pressure !== '-' ? pressure : '-'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barometer;
