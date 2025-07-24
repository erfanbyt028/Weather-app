const API_KEY = "64f6089d57e9910c20f364906f3ac9c3";
export const fetchWeather = async (city = 'New York') => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Weather fetch failed: ${res.statusText}`);
  }
  return await res.json();
};

export const fetchForecast = async (city = 'New York') => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}&cnt=8`
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Forecast fetch failed: ${res.statusText}`);
  }
  return await res.json();
};
