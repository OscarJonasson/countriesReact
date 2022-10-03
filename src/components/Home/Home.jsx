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
      <p>
        Welcome and feel free to explore the world. You will be presented with
        info cards on countries and by clicking see more it will give you the
        current weather and some more info.
      </p>
      <Link className={classes.countriesLink} to="countries">
        Check out
      </Link>
      <CarouselHome countries={countries} />
    </section>
  );
};

export default Home;
