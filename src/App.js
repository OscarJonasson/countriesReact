import React, { useEffect, useState } from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';
import SingleCountry from './components/SingleCountry/SingleCountry';
import { useDispatch, useSelector } from 'react-redux';

import { initializeCountries } from './features/countries/countriesSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<SingleCountry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
