import React from 'react';
import classes from './CountriesCard.module.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../features/countries/cartSlice';

const CountriesCard = ({ country }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart);

  const populationRounding = () => {
    const population = (country?.population / 1000000).toPrecision(2);
    return population >= 1
      ? population + 'M'
      : Math.round(population * 1000) + 'K';
  };

  return (
    <Card
      className={classes.strapcard}
      border="danger"
      style={{ width: '20rem' }}
      bg="dark"
    >
      <Card.Header>{country?.name?.common}</Card.Header>
      <Card.Body>
        {favorites
          .map((name) => name.name.common)
          .includes(country.name?.common) ? (
          <button
            type="button"
            onClick={() => dispatch(removeFavorite(country))}
          >
            Remove
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(addFavorite(country))}>
            Add
          </button>
        )}
        <Card.Title>Languages:</Card.Title>
        {/* <Card.Text> */}
        <h3>Languages:</h3>
        <div className={classes.info}>
          {Object.values(country?.languages || {}).map((language, i) => (
            <span key={i}>{(i ? ', ' : '') + language}</span>
          ))}
        </div>
        <h3>Currency:</h3>
        <div className={classes.info}>
          {Object.values(country?.currencies || {}).map((currency, i) => (
            <span key={i}>{(i ? ', ' : '') + currency.name}</span>
          ))}
        </div>
        <h3>Population</h3>
        <div className={classes.info}>{populationRounding()}</div>

        <Link
          className={classes.info__seeMore}
          to={`${country?.name?.common}`.toLowerCase()}
          state={country}
        >
          <Button variant="info">See More</Button>
        </Link>
        {/* </Card.Text> */}
        <img
          className={classes.card__flag}
          src={country?.flags?.svg}
          alt="Flag"
        />
      </Card.Body>
    </Card>
  );
};

export default CountriesCard;
