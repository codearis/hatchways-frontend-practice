import { useEffect, useState } from "react";
import { fetchFromOpenWeather } from "../remote/open-weather";
import { WeatherTypes } from "../types/WeatherTypes";
import { getWeekDay } from "../utils/getWeekDay";
import { convertToCelsiusFromKelvin } from "../utils/tempConverter";
import styled from "styled-components";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getDayMonth } from "../utils/getDayMonth";

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherTypes>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFromOpenWeather("London");
      setWeather(data);
    };
    getData();
  }, []);

  return (
    <WeatherContainer>
      <span>{weather?.name}</span>
      <WeatherWrapper>
        {weather?.daily?.map((forecast, index) => (
          <WeatherCard key={index}>
            <span>{getDayMonth(forecast.dt)}</span>
            <span>{getWeekDay(forecast.dt)}</span>
            <img
              src={getWeatherIcon(forecast.weather[0].icon)}
              alt={forecast.weather[0].description}
            />
            <WeatherCardTemp>
              <span>{convertToCelsiusFromKelvin(forecast.temp.max)}</span>
              <span>{convertToCelsiusFromKelvin(forecast.temp.min)}</span>
            </WeatherCardTemp>
          </WeatherCard>
        ))}
      </WeatherWrapper>
    </WeatherContainer>
  );
};

// styling

const WeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WeatherWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WeatherCard = styled.div`
  max-width: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid black;
`;

const WeatherCardTemp = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 18px;
  justify-content: space-between;
`;
