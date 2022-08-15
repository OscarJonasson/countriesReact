import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
