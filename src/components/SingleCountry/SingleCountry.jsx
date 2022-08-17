import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './SingleCountry.module.css';

const SingleCountry = () => {
  const location = useLocation();
  const country = location.state;
  console.log(country);
  return (
    <section>
      <div className={classes.card}>
        <div className={classes.card__flag}>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        </div>
      </div>
    </section>
  );
};

export default SingleCountry;
