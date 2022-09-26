import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './CarouselHome.module.css';

const CarouselHome = ({ countries }) => {
  const winners = Array.of(
    Math.ceil(Math.random() * 249),
    Math.ceil(Math.random() * 249),
    Math.ceil(Math.random() * 249)
  );

  return (
    <Carousel fade variant="dark" className={classes.dimensions}>
      {winners.map((winner) => (
        <Carousel.Item key={winner}>
          <img
            key={countries[winner]?.name?.common}
            className="d-block w-100"
            src={`${countries[winner]?.flags?.svg}`}
            alt={`flag of ${countries[winner]?.name?.common}`}
          />
          <Carousel.Caption>
            <h5>{countries[winner]?.name?.common}</h5>
            <p>{countries[winner]?.name?.official}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
