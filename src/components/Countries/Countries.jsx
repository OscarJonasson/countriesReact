import React from 'react';
import { useState } from 'react';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Countries = ({ isLoading, countries }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (e) => {
    setSearchTerm(e.target.value);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.container}>
      <h2>Search for a country</h2>
      <InputGroup className="mt-5 w-25">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={search}
        />
      </InputGroup>
      {/* <input
        className={classes.search}
        onChange={search}
        placeholder="Insert a country..."
      ></input> */}
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
      <button className={classes.backToTop} onClick={backToTop}>
        TOP
      </button>
    </section>
  );
};

export default Countries;
