import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';
import { Wrapper } from './style';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api/api';

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const getCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );
    const getForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    Promise.all([getCurrentWeather, getForecast])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <>
      <Wrapper>
        <SearchBar onSearchChange={getWeather} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </Wrapper>
    </>
  );
};

export default WeatherApp;
