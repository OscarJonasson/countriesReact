import React from 'react';
import classes from './CountriesCard.module.css';
import { Link } from 'react-router-dom';

const CountriesCard = ({ country }) => {
  // console.log('info', info);

  // console.log('languages', info?.languages);
  // console.log(Object.keys(info.languages));
  // <span key={i}>{(i ? ', ' : '') + { language }}</span>

  // fix This
  const populationRounding = () => {
    const population = (country?.population / 1000000).toPrecision(2);
    return population >= 1
      ? population + 'M'
      : Math.round(population * 1000) + 'K';
  };

  return (
    <div className={classes.card}>
      <div className={classes.card__title}>
        <h2>{country?.name?.common}</h2>
        <h4>{country?.name?.official}</h4>
      </div>
      <div className={classes.card__seeMore}>
        <Link to={`${country?.name?.common}`.toLowerCase()} state={country}>
          See More
        </Link>
      </div>
      <div className={classes.info}>
        <div className={classes.info__divider}>
          <h3>Languages</h3>
          {Object.values(country?.languages || {}).map((language, i) => (
            <span key={i}>{(i ? ', ' : '') + language}</span>
          ))}
        </div>
        <div className={classes.info__divider}>
          <h3>Currency</h3>
          {Object.values(country?.currencies || {}).map((currency, i) => (
            <span key={i}>{(i ? ', ' : '') + currency.name}</span>
          ))}
        </div>
        <div className={classes.info__divider}>
          <h3>Population</h3>
          {populationRounding()}
        </div>
      </div>
      <img className={classes.card__flag} src={country?.flags.svg} alt="Flag" />
    </div>
  );
};

export default CountriesCard;
