import React, { useState, useEffect } from "react";
import Info from "./info";
import WeatherIcon from "./WeatherIcon";
import Indoor from "./Indoor";
import Barometer from "./Barometer";
import MoonPhase from "./MoonPhase";
import Chart from "./Chart";
import AirConditions from "./AirConditions";
import { fetchWeather, fetchForecast } from "../api/weather";

import bgCloudy from '../assets/images/bg-cloudy.png';
import bgRain from '../assets/images/bg-rain.png';
import bgSnow from '../assets/images/bg-snow.png';
import bgMist from '../assets/images/bg-mist.png';
import bgLightning from '../assets/images/bg-Lightning.png';
import bgWeather1 from '../assets/images/bg-weather1.png';
import bgWeather2 from '../assets/images/bg-moon.png';

const bgClear = bgWeather1; 
const bgDefault = bgWeather2; 

const Weather = () => {
  const [background, setBackground] = useState(bgDefault);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Tehran");
  const [inputCity, setInputCity] = useState("");

  const getBackground = (main) => {
    switch (main) {
      case "Clear":
        return bgClear;
      case "Clouds":
        return bgCloudy;
      case "Rain":
      case "Drizzle":
        return bgRain;
      case "Snow":
        return bgSnow;
      case "Mist":
      case "Fog":
        return bgMist;
      case "Thunderstorm":
        return bgLightning;
      default:
        return bgDefault;
    }
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    Promise.all([
      fetchWeather(city),
      fetchForecast(city)
    ])
      .then(([weather, forecast]) => {
        setWeatherData(weather);
        setForecastData(forecast);
        setLoading(false);
        if (weather.weather && weather.weather[0].main) {
          setBackground(getBackground(weather.weather[0].main));
        } else {
          setBackground(bgDefault);
        }
      })
      .catch(() => {
        setError("City not found");
        setLoading(false);
      });
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
    }
  };

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;

  if (!weatherData || !forecastData || !weatherData.weather || !weatherData.main) {
    return <div className="text-white text-center mt-20">No weather data available.</div>;
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: background ? `url(${background})` : "none", backgroundColor: !background ? '#222' : undefined }}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto pt-8 pb-2 flex gap-2 justify-center">
        <input
          type="text"
          className="rounded-2xl px-4 py-2 text-black w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/70 placeholder:text-gray-400 shadow border border-gray-100 transition-all duration-200 text-base font-bold"
          placeholder="Enter city name (English)..."
          value={inputCity}
          onChange={e => setInputCity(e.target.value)}
          style={{direction:'rtl', letterSpacing:'0.5px'}}
        />
      </form>
      {error && <div className="text-red-400 text-center text-3xl mb-2">{error}</div>}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 flex flex-col justify-between">
          <Info
            city={weatherData.name || "-"}
            weather={weatherData.weather[0]?.main || "-"}
            temp={weatherData.main.temp ? Math.round(weatherData.main.temp) : "-"}
            date={new Date().toLocaleString()}
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <WeatherIcon weather={weatherData.weather[0]?.main || "Clear"} />
        </div>
        <div className="md:col-span-1 flex items-center justify-center">
          <Indoor temp={weatherData.main.temp ? Math.round(weatherData.main.temp) : "-"} humidity={weatherData.main.humidity || "-"} />
        </div>
        <div className="md:col-span-1 flex items-center justify-center">
          <Barometer pressure={weatherData.main.pressure || "-"} />
        </div>
        <div className="md:col-span-1 flex items-center justify-center">
          <MoonPhase />
        </div>
        <div className="md:col-span-1 md:row-span-2 flex">
          <AirConditions
            wind={weatherData.wind?.speed || "-"}
            realFeel={weatherData.main.feels_like ? Math.round(weatherData.main.feels_like) : "-"}
            rain={weatherData.rain ? weatherData.rain["1h"] : 0}
            uv={4}
            forecast={forecastData}
          />
        </div>
        <div className="md:col-span-3 w-full flex justify-center items-end">
          <Chart forecast={forecastData} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
