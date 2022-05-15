import React from 'react';
import WeatherInfo from '../components/WeatherInfo';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Weather = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <WeatherInfo />
    </div>
  );
};

export default Weather;