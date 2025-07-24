import React from "react";
import { WiDayCloudy, WiNightClear, WiRain } from "react-icons/wi";
import { LuClock } from "react-icons/lu";

const getIcon = (main) => {
  switch(main) {
    case 'Rain': return <WiRain size={14} />;
    case 'Clouds': return <WiDayCloudy size={14} />;
    case 'Clear': return <WiNightClear size={14} />;
    default: return <WiDayCloudy size={14} />;
  }
};

const MiniForecast = ({ forecast }) => {
  const forecastData = forecast && forecast.list ? forecast.list.slice(0, 8).map(item => ({
    temp: Math.round(item.main.temp),
    icon: getIcon(item.weather[0].main),
    wind: item.wind.speed + 'km/h',
    time: new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  })) : [];

  return (
    <div className="w-full max-w-[960px] h-32 sm:h-40 bg-white/10 backdrop-blur-md rounded-2xl p-2 sm:p-4 text-white shadow-md">
      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
        <LuClock size={12} />
        <span>12-hour forecast</span>
      </div>
      <div className="relative w-full h-20 sm:h-28">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 40"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C12.5,5 25,35 37.5,30 S62.5,35 100,25"
            stroke="#AEE6FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="0" cy="20" r="2" fill="#AEE6FF" />
          <circle cx="100" cy="25" r="2" fill="#AEE6FF" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex justify-between text-[9px] sm:text-xs px-[1px] sm:px-[2px]">
          {forecastData.length > 0 ? forecastData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-end h-full relative">
              <div className="mb-[1px] sm:mb-[2px] font-semibold text-xs sm:text-sm">{item.temp}°</div>
              {item.time === "Now" && (
                <div className="absolute top-4 h-6 sm:h-8 border-l border-dashed border-blue-300"></div>
              )}
              <div className="text-blue-100">{item.icon}</div>
              <div className="text-[7px] sm:text-[10px] opacity-70">{item.wind}</div>
              <div className="text-[7px] sm:text-[10px] mt-[1px] sm:mt-[2px]">{item.time}</div>
            </div>
          )) : <span className="text-xs">No forecast</span>}
        </div>
      </div>
    </div>
  );
};

export default MiniForecast;
