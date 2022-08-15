import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <section className={classes.welcome}>
      <h1>Hello!</h1>
      <Link className={classes.countriesLink} to="/countries">
        Check out
      </Link>
    </section>
  );
};

export default Home;
