import React from 'react';
import CountriesList from '../components/CountriesList';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Countries = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <CountriesList />
    </div>
  );
};

export default Countries;