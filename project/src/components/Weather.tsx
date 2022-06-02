import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchWeather } from "../remote/fetchWeather";
import { WeatherTypes } from "../types/WeatherTypes";
import { getWeekDay } from "../utils/getWeekDay";
import { convertToCelsiusFromKelvin } from "../utils/tempConverter";
import { getDayMonth } from "../utils/getDayMonth";
import { getWeatherIcon } from "../utils/getWeatherIcon";

import { fetchCityList } from "../remote/fetchCityList";

import { CityListTypes, CityCoordsTypes } from "../types/CityTypes";

import { MapBackground } from "./MapBackground";
import { fetchWeatherMap } from "../remote/fetchWeatherMap";
import { useAppTheme } from "../context/context";
import {
  AppFigure,
  AppH2,
  AppH4,
  AppInput,
  AppInputOptions,
  AppSpan,
} from "./app/barrel";

export const Weather = () => {
  //everything state related
  const [weather, setWeather] = useState<WeatherTypes>();
  const [cityInput, setCityInput] = useState("");
  const [mapCoords, setMapCoords] = useState<CityCoordsTypes>();
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [list, setList] = useState<CityListTypes[]>([{}]);

  //hook calls
  const { colors } = useAppTheme();

  // side-effects
  useEffect(() => {
    const getList = async () => {
      fetchCityList(cityInput).then((data: any) => {
        setList(data);
      });
    };
    getList();
  }, [cityInput]);

  useEffect(() => {
    if (searchCity) {
      setShowList(true);
      const getData = async () => {
        setLoading(true);
        const data = await fetchWeather(searchCity);
        setWeather(data);
        setLoading(false);
        setCityInput("");
      };
      getData();
    } else {
      return;
    }
  }, [searchCity]);

  useEffect(() => {
    if (cityInput.length > 2) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  }, [cityInput]);

  // handle functions
  const handleSearch = async (index: number) => {
    const location = `${list[index].name}, ${list[index].state}, ${list[index].country}`;
    setSearchCity(location);
    fetchWeatherMap(location).then((data) => setMapCoords(data));
  };

  return (
    <WeatherContainer>
      {mapCoords && <MapBackground lat={mapCoords.lat} lon={mapCoords.lon} />}
      <WeatherTitle>
        <AppH2 align="center">
          8 day forecast for <br></br>
          {weather?.name || ""}
        </AppH2>{" "}
      </WeatherTitle>
      <InputContainer>
        <InputWrapper>
          <AppInput
            placeholder="Start typing and select a city from the list..."
            placeholderColor={colors.secondary}
            value={cityInput}
            onChange={(e: any) => setCityInput(e.target.value)}
          />
        </InputWrapper>
        {showList && (
          <AppInputOptions
            list={list}
            onClick={(index: number) => handleSearch(index)}
          />
        )}
      </InputContainer>

      <WeatherWrapper>
        {loading ? (
          <>
            <AppSpan>Loading...</AppSpan>
          </>
        ) : (
          weather?.daily?.map((forecast, index) => (
            <WeatherCard key={index}>
              <AppH4 color={colors.secondary}>{getDayMonth(forecast.dt)}</AppH4>
              {index === 0 ? (
                <AppH4>Today</AppH4>
              ) : (
                <AppH4>{getWeekDay(forecast.dt)}</AppH4>
              )}
              <AppFigure
                src={getWeatherIcon(forecast.weather[0].icon)}
                alt={forecast.weather[0].description}
              >
                {forecast.weather[0].description}
              </AppFigure>
              <WeatherCardTemp>
                <AppSpan>
                  {convertToCelsiusFromKelvin(forecast.temp.min)}°
                </AppSpan>
                <AppSpan>
                  {convertToCelsiusFromKelvin(forecast.temp.max)}°
                </AppSpan>
              </WeatherCardTemp>
            </WeatherCard>
          ))
        )}
      </WeatherWrapper>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 0px 16px;
`;

const WeatherTitle = styled.div`
  padding-top: 64px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 8px;
  margin: 32px 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

const WeatherWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  padding-bottom: 64px;
  flex-wrap: wrap;
  gap: 12px;
`;

const WeatherCard = styled.div`
  width: 100%;
  display: flex;
  max-width: 140px;
  flex: 1 1 120px;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #fff;

  @media (max-width: 480px) {
    flex: 1 1 none;
    max-width: none;
  }
`;

const WeatherCardTemp = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 18px;
  justify-content: space-between;
`;
