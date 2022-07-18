import React from 'react';
import {
  CityName,
  CurrentCondition,
  WeatherTop,
  WeatherWrapper,
  WeatherIcon,
  WeatherContainer,
  CurrentTemp,
  WeatherInfo,
  Row,
  Label,
  Value,
} from './style';

const CurrentWeather = ({ data }) => {
  return (
    <WeatherWrapper>
      <WeatherTop>
        <div>
          <CityName>{data.city}</CityName>
          <CurrentCondition>{data.weather[0].description}</CurrentCondition>
        </div>
        <WeatherIcon src={`icons/${data.weather[0].icon}.png`} />
      </WeatherTop>
      <WeatherContainer>
        <CurrentTemp>{Math.round(data.main.temp)}°C</CurrentTemp>
        <WeatherInfo>
          <Row>
            <Label>Feels like</Label>
            <Value>{Math.round(data.main.feels_like)}°C</Value>
          </Row>
          <Row>
            <Label>Wind</Label>
            <Value>{data.wind.speed}m/s</Value>
          </Row>
          <Row>
            <Label>Humidity</Label>
            <Value>{data.main.humidity}%</Value>
          </Row>
          <Row>
            <Label>Pressure</Label>
            <Value>{data.main.pressure}Pa</Value>
          </Row>
        </WeatherInfo>
      </WeatherContainer>
    </WeatherWrapper>
  );
};

export default CurrentWeather;
