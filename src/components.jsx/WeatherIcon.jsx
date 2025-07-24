import React from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import IconImage from "../assets/images/weather-img1.png";

const getIcon = (main) => {
  switch(main) {
    case 'Rain': return <WiRain className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 text-blue-200" />;
    case 'Snow': return <WiSnow className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 text-blue-100" />;
    case 'Thunderstorm': return <WiThunderstorm className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 text-yellow-200" />;
    case 'Clouds': return <WiCloudy className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 text-gray-200" />;
    case 'Clear': return <WiDaySunny className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 text-yellow-300" />;
    default: return <img src={IconImage} alt="Weather Icon" className="w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 object-contain" />;
  }
};

const WeatherIcon = ({ weather = 'Clear' }) => {
  return (
    <div className="mt-4 sm:mt-10 md:mt-0 flex justify-center">
      {getIcon(weather)}
    </div>
  );
};

export default WeatherIcon;
