import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Nav from '../Nav/Nav';
const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="countries">Countries</Link>
    </header>
  );
};

export default Header;
