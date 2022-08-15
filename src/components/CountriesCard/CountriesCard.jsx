import React from 'react';
import classes from './CountriesCard.module.css';

const CountriesCard = ({ country }) => {
  // console.log('info', info);

  // console.log('languages', info?.languages);
  // console.log(Object.keys(info.languages));
  // <span key={i}>{(i ? ', ' : '') + { language }}</span>
  return (
    // xxxxx{info.name.common}
    <div className={classes.card}>
      <div className={classes.card__title}>{country?.name?.common}</div>
      <div className={classes.card__capital}>{country?.capital[0]}</div>
      <div className={classes.info}>
        <div>
          <h3>Languages</h3>
          {Object.values(country?.languages || {}).map((language, i) => (
            <span key={i}>{language}</span>
          ))}
        </div>
        <div>
          <h3>Currency</h3>
          {Object.values(country?.currencies || {}).map((currency, i) => (
            <span key={i}>{currency.name}</span>
          ))}
        </div>
        <div>
          <h3>Population</h3>
          {country?.population}
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
