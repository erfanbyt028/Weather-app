import React, { useEffect, useState } from "react";

const phaseMapEn = [
  "New Moon",
  "Waxing Crescent",
  "First Quarter",
  "Waxing Gibbous",
  "Full Moon",
  "Waning Gibbous",
  "Last Quarter",
  "Waning Crescent",
];
const moonIcons = [
  "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"
];

const MoonPhase = ({ city = "tehran" }) => {
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    const randomPercent = 10 + Math.floor(Math.random() * 81); 
    setPercent(randomPercent);
  }, [city]);

  const phaseIndex = Math.round((percent / 100) * 8) % 8;
  const phaseName = phaseMapEn[phaseIndex];
  const phaseIcon = moonIcons[phaseIndex];

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="w-full max-w-xs h-56 p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white flex flex-col justify-between shadow-lg mx-auto">
      <div className="flex items-center gap-2 text-sm font-bold justify-center">
        <span>Moon Phase</span>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="relative flex items-center justify-center mb-2">
          <svg width="100" height="100" className="block">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#fff"
              strokeWidth="8"
              fill="none"
              opacity="0.15"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#facc15"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s" }}
            />
          </svg>
          <span className="absolute text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            {phaseIcon}
          </span>
        </div>
        <div className="text-lg font-bold mt-1">{percent}%</div>
        <div className="text-xs mt-1">Moon brightness</div>
        <div className="text-base font-semibold mt-2">{phaseName}</div>
      </div>
    </div>
  );
};

export default MoonPhase;
