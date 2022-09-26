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
            className={classes.favButRem}
            type="button"
            onClick={() => dispatch(removeFavorite(country))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#ff0000"
              className={`bi bi-heart-fill ${classes.heart}`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </button>
        ) : (
          <button
            className={classes.favButAdd}
            type="button"
            onClick={() => dispatch(addFavorite(country))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#f5f5f5"
              className={`bi bi-heart ${classes.heart}`}
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        )}
        <Card.Title>Languages:</Card.Title>
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
        <div className={classes.info__seeMore}>
          <Link
            to={`/countries/${country?.name?.common}`.toLowerCase()}
            state={country}
          >
            <Button className={classes.info__seeMore} variant="info">
              See more
            </Button>
          </Link>
        </div>
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
