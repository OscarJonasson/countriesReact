import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './Countries.module.css';
import { search } from '../../features/countries/countriesSlice';
import Search from '../Search/Search';
import { useEffect } from 'react';

const Countries = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.countries.isLoading);
  const searchTerm = useSelector((state) => state.countries.search);
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(search(''));
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.container}>
      <Search />
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
