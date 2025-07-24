import React from "react";
import { FaHeart } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHalf } from "react-icons/fa6";

const IndoorCard = ({ temp = "-", humidity = "-" }) => {
  return (
    <div className="w-full max-w-xs h-40 sm:h-56 p-3 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md text-white flex flex-col justify-between shadow-lg">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
        <FaHeart className="text-pink-400" size={20} />
        <span>Indoor</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-5xl font-bold">
        <FaTemperatureHalf
          className="text-pink-400 text-xl sm:text-3xl"
          size={20}
        />
        <span>{temp}°C</span>
      </div>
      <div className="flex items-center gap-2">
        <WiHumidity className="text-2xl sm:text-3xl text-blue-200" size={30} />
        <div className="text-xs sm:text-sm">
          <div className="opacity-80">Humid</div>
          <div className="text-lg sm:text-xl font-semibold">{humidity}%</div>
        </div>
      </div>
    </div>
  );
};

export default IndoorCard;
