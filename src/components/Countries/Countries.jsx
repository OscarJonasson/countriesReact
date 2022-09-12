import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { search } from '../../features/countries/countriesSlice';

const Countries = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.countries.isLoading);
  const searchTerm = useSelector((state) => state.countries.search);
  const countries = useSelector((state) => state.countries.countries);

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
          onChange={(e) => dispatch(search(e.target.value))}
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
