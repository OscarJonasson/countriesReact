import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './CarouselHome.module.css';

const CarouselHome = ({ countries }) => {
  // Make this nice
  const winners = Array.of(
    Math.ceil(Math.random() * 249),
    Math.ceil(Math.random() * 249),
    Math.ceil(Math.random() * 249)
  );

  // console.log(winners);
  // console.log(countries);
  // console.log(countries[winners[0]]?.flags.svg);
  // console.log(countries[0].area);

  return (
    <Carousel fade variant="dark" className={classes.dimensions}>
      {winners.map((winner) => (
        // console.log(countries[winner]?.flags?.svg);
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${countries[winner]?.flags?.svg}`}
            // src="holder.js/800x400?text=First slide&bg=373940"
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
