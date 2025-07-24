import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Info = ({
  city = "New York",
  weather = "Thunderstorm",
  temp = 26,
  date = "Sunday | 12 Dec 2024 - 11:43 PM",
}) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 text-white pt-4 sm:pt-6 md:pt-0 max-w-xs sm:max-w-sm">
      <h3 className="text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2">
        <FaLocationDot className="text-base md:text-lg" />
        <span className="font-bold">{city}</span>
        <IoIosArrowForward className="text-base" />
      </h3>
      <h2 className="text-lg sm:text-xl md:text-3xl font-semibold">
        {weather}
      </h2>
      <div className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
        {temp}°C
      </div>
      <p className="text-xs sm:text-sm opacity-80 mt-1">{date}</p>
    </div>
  );
};

export default Info;
