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
    <section className={classes.container}>
      <h2>Search for a country</h2>
      <input
        className={classes.search}
        onChange={search}
        placeholder="Insert a country..."
      ></input>
      {isLoading ? (
        <h1 className={classes.loading}>Loading countries...</h1>
      ) : (
        <div className={classes.countries}>
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
        </div>
      )}
    </section>
  );
};

export default Countries;
