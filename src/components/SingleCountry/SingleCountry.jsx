import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
        <Link className={classes.backLink} to="/countries">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-skip-backward-btn"
            viewBox="0 0 16 16"
          >
            <path d="M11.21 5.093A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528l2.71-1.935z" />
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default SingleCountry;
