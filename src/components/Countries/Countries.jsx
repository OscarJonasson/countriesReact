import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .catch((err) => console.log(err))
      .then((res) => setCountries(res.data));
    setIsLoading(false);
  }, []);

  const search = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input className={classes.search} onChange={search}></input>
      {isLoading ? (
        <h1 className={classes.loading}>Loading countries...</h1>
      ) : (
        <section className={classes.countries}>
          {countries
            .filter((country) => {
              if (searchTerm === '') {
                return country;
              }
              return country?.name?.common
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((country, i) => (
              <CountriesCard key={country?.name?.common} country={country} />
            ))}
        </section>
      )}
    </>
  );
};

export default Countries;
