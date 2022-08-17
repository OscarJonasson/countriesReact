import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';

const Countries = ({ isLoading, countries }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
