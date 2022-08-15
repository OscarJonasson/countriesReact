import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .catch((err) => console.log(err))
      .then((res) => setCountries(res.data));
    setIsLoading(false);
  }, []);

  return (
    <>
      <input className={classes.search}></input>
      {isLoading ? (
        <h1 className={classes.loading}>Loading countries...</h1>
      ) : (
        <section className={classes.countries}>
          {countries.map((country, i) => (
            <CountriesCard key={country?.name?.common} country={country} />
          ))}
        </section>
      )}
    </>
  );
};

export default Countries;
