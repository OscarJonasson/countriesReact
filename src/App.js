import React, { useEffect, useState } from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';
import SingleCountry from './components/SingleCountry/SingleCountry';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .catch((err) => console.log(err))
      .then((res) => setCountries(res.data));
    setIsLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="countries"
            element={<Countries isLoading={isLoading} countries={countries} />}
          />
          <Route
            path="countries/:name"
            element={<SingleCountry countries={countries} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
