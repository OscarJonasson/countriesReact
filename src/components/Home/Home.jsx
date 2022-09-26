import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import CarouselHome from '../Carousel/CarouselHome';
import { useSelector } from 'react-redux';

const Home = () => {
  const countries = useSelector((state) => state.countries.countries);

  return (
    <section className={classes.welcome}>
      <h1>Hello!</h1>
      <Link className={classes.countriesLink} to="countries">
        Check out
      </Link>
      <CarouselHome countries={countries} />
    </section>
  );
};

export default Home;
