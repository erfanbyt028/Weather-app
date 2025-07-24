import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

const getDay = (dt_txt) => {
  const date = new Date(dt_txt);
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
};

const getIcon = (main) => {
  switch (main) {
    case "Rain":
      return <WiRain size={20} />;
    case "Snow":
      return <WiSnow size={20} />;
    case "Thunderstorm":
      return <WiThunderstorm size={20} />;
    case "Clouds":
      return <WiCloudy size={20} />;
    case "Clear":
      return <WiDaySunny size={20} />;
    default:
      return <WiDaySunny size={20} />;
  }
};

const AirConditions = ({
  realFeel = "-",
  wind = "-",
  rain = "-",
  uv = "-",
  forecast,
}) => {
  const days =
    forecast && forecast.list
      ? forecast.list.slice(0, 5).map((item) => ({
          day: getDay(item.dt_txt),
          icon: getIcon(item.weather[0].main),
        }))
      : [];

  return (
    <div className="w-full max-w-sm min-h-[320px] sm:min-h-[420px] bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-6 text-white shadow-lg flex flex-col gap-2 sm:gap-4">
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        {days.length > 0 ? (
          days.map((item, i) => (
            <div key={i} className={`flex flex-col items-center`}>
              {item.icon}
              <span className="text-[10px] sm:text-xs mt-1 font-bold tracking-wide">
                {item.day}
              </span>
            </div>
          ))
        ) : (
          <span className="text-xs">No forecast</span>
        )}
      </div>
      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1 sm:mb-2">
        <BsFillCloudSunFill size={14} className="text-blue-100" />
        <span className="font-semibold">8:00PM GMT</span>
      </div>
      <div className="uppercase text-[10px] sm:text-xs opacity-80 mb-1">
        Air Conditions
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-200 inline-block mr-1"></span>
          <span>Real Feel</span>
          <span className="ml-auto font-bold">{realFeel}°</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <FaWind size={12} className="text-blue-100" />
          <span>Wind</span>
          <span className="ml-auto font-bold">{wind} km/hr</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <MdOutlineWaterDrop size={12} className="text-blue-100" />
          <span>Chance of rain</span>
          <span className="ml-auto font-bold">{rain}%</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <TbUvIndex size={12} className="text-blue-100" />
          <span>UV Index</span>
          <span className="ml-auto font-bold">{uv}</span>
        </div>
      </div>
      <div className="w-full h-12 sm:h-20 mt-2 sm:mt-4 flex items-end">
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <path
            d="M0,50 Q40,10 80,40 T200,30"
            stroke="#AEE6FF"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="0" cy="50" r="4" fill="#AEE6FF" />
          <circle cx="200" cy="30" r="4" fill="#AEE6FF" />
        </svg>
      </div>
    </div>
  );
};

export default AirConditions;
