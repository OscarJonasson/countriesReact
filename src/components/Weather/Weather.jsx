import React from 'react';
import classes from './weather.module.css';

const Weather = ({ weather }) => {
  return (weather = (
    <section className={classes.weather}>
      <h3>Current weather:</h3>

      <ul>
        <li className={classes.weather__desc}>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.map(
              (icon) => icon.icon
            )}@2x.png`}
            alt={weather.weather?.map((desc) => desc.description)}
          ></img>
          {weather.weather?.map((desc) => desc.description)}
        </li>
        <li>{weather.main?.temp} °C</li>
        <li>{weather.main?.humidity}%</li>
        <li>{weather.main?.pressure} hPa</li>
        <li>
          {weather.wind?.speed} m/s, {weather.wind?.deg}°
        </li>
      </ul>
    </section>
  ));
};

export default Weather;
