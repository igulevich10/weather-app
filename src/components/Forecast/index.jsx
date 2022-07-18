import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  Title,
  DailyItem,
  ForecastIcon,
  ForecastDay,
  WeatherDescription,
  MinMaxTemp,
  DailyDetails,
  DailyDetailsItem,
} from './style';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const currentDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.legth).concat(
    WEEK_DAYS.slice(0, currentDay),
  );

  // console.log(forecastDays);
  return (
    <>
      <Title>Daily</Title>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <DailyItem>
                  <ForecastIcon
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <ForecastDay>{forecastDays[index]}</ForecastDay>
                  <WeatherDescription>{item.weather[0].description}</WeatherDescription>
                  <MinMaxTemp>
                    {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                  </MinMaxTemp>
                </DailyItem>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <DailyDetails>
                <DailyDetailsItem>
                  <label>Pressure</label>
                  <label>{item.main.pressure} Pa</label>
                </DailyDetailsItem>
                <DailyDetailsItem>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </DailyDetailsItem>
                <DailyDetailsItem>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </DailyDetailsItem>
                <DailyDetailsItem>
                  <label>Wind speed</label>
                  <label>{item.wind.speed} m/s</label>
                </DailyDetailsItem>
                <DailyDetailsItem>
                  <label>Sea level</label>
                  <label>{item.main.sea_level}m</label>
                </DailyDetailsItem>
                <DailyDetailsItem>
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </DailyDetailsItem>
              </DailyDetails>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
