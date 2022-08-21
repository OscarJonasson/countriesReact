import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './SingleCountry.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Weather from '../Weather/Weather';

const SingleCountry = () => {
  const [weather, setWeather] = useState([]);
  const location = useLocation();
  const country = location.state;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&units=metric&APPID=${apiKey}`
      )
      .catch((err) => console.log(err))
      .then((res) => setWeather(res.data));
  }, []);

  return (
    <div className={classes.container}>
      <section className={classes.card}>
        <h1 className={classes.card__title}>{country.name.common}</h1>
        <img
          className={classes.card__flag}
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <p>Capital: {country.capital}</p>
        <p>Continent: {country.continents}</p>
        <p>
          Languages:{' '}
          {Object.values(country.languages || {}).map((language, i) => (
            <span key={i}>{(i ? ', ' : '') + language}</span>
          ))}{' '}
        </p>
        <ul className={classes.card__tz}>
          Timezones:
          {country.timezones.map((tz, i) => (
            <i key={tz}>{(i ? ', ' : '') + tz}</i>
          ))}
        </ul>
        <div className={classes.weather}>
          <Weather weather={weather} />
        </div>
      </section>
    </div>
  );
};

export default SingleCountry;
