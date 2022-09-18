import React, { useEffect } from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';
import SingleCountry from './components/SingleCountry/SingleCountry';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';

import { initializeCountries } from './features/countries/countriesSlice';
import { initializeLocalStorage } from './features/countries/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(initializeLocalStorage(cartData));
  }, [dispatch, cartData]);

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
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
