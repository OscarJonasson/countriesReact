import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/finland`)
      .catch((err) => console.log(err))
      .then((res) => setCountries(res.data));
  }, []);
  console.log('Countries', countries);
  //  gets country name  console.log(countries[0]?.name.common);
  return (
    <section className={classes.countries}>
      {/* {countries.map((country) => {
        <CountriesCard />;
      })} */}
      <CountriesCard country={countries[0]} />
      <CountriesCard />
      <CountriesCard />
    </section>
  );
};

export default Countries;
