import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './SingleCountry.module.css';

const SingleCountry = () => {
  const location = useLocation();
  const country = location.state;
  console.log(country);

  return (
    <section className={classes.card}>
      <img
        className={classes.card__flag}
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
      />
      <h1>{country.name.common}</h1>
    </section>
  );
};

export default SingleCountry;
