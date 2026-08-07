import axios from "axios";
import { useState, useEffect } from "react";

const Weather = ({ city }) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
      )
      .then((response) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`,
          )
          .then((response) => {
            setWeather({
              temp: response.data.main.temp,
              icon: response.data.weather[0].icon,
              wind: response.data.wind.speed,
            });
          });
      });
  }, [apiKey, city]);

  if (weather === null)
    return (
      <div>
        <h2>Weather in {city}</h2>
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature {weather.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather icon"
      />
      <p>Wind {weather.wind} m/s</p>
    </div>
  );
};

export default Weather;
