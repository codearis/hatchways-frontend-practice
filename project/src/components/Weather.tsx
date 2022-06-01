import { useEffect, useState } from "react";
import { fetchWeather } from "../remote/fetchWeather";
import { WeatherTypes } from "../types/WeatherTypes";
import { getWeekDay } from "../utils/getWeekDay";
import { convertToCelsiusFromKelvin } from "../utils/tempConverter";
import styled from "styled-components";
import { getDayMonth } from "../utils/getDayMonth";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { AppFigure } from "./app/img/AppFigure";
import { AppH4 } from "./app/text/AppH4";
import { useAppTheme } from "../context/context";
import { AppH2 } from "./app/text/AppH2";
import { AppInput } from "./app/input/AppInput";
import { AppButton } from "./app/button/AppButton";
import { AppInputOptions } from "./app/input/AppInputOptions";
import { fetchCityList } from "../remote/fetchCityList";
import { CityListTypes } from "../types/CityTypes";

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherTypes>();
  const [cityInput, setCityInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [list, setList] = useState<CityListTypes[]>([{}]);

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
      const getData = async () => {
        const data = await fetchWeather(searchCity);
        setWeather(data);
      };
      getData();
    } else {
      return;
    }
  }, [searchCity]);

  console.log(searchCity);

  const { colors } = useAppTheme();

  const handleFocusChange = () => {
    setShowOptions(true);
  };

  const handleSearch = (index: number) => {
    setSearchCity(
      `${list[index].name}, ${list[index].state}, ${list[index].country}`
    );
    setShowOptions(false);
  };

  return (
    <WeatherContainer>
      <AppH2>8 day forecast for {weather?.name || "..."}</AppH2>
      <InputContainer>
        <InputWrapper>
          <AppInput
            onFocus={() => handleFocusChange()}
            placeholder="Start typing and select a city from the list..."
            placeholderColor={colors.secondary}
            value={cityInput}
            onChange={(e: any) => setCityInput(e.target.value)}
          />
          {/* <AppButton>Search</AppButton> */}
        </InputWrapper>
        <AppInputOptions
          showOptions={showOptions}
          list={list}
          onClick={(index: number) => handleSearch(index)}
        />
      </InputContainer>

      <WeatherWrapper>
        {weather?.daily?.map((forecast, index) => (
          <WeatherCard key={index}>
            <AppH4 color={colors.secondary}>{getDayMonth(forecast.dt)}</AppH4>
            <AppH4>{getWeekDay(forecast.dt)}</AppH4>
            <AppFigure
              src={getWeatherIcon(forecast.weather[0].icon)}
              alt={forecast.weather[0].description}
            >
              {forecast.weather[0].description}
            </AppFigure>
            <WeatherCardTemp>
              <span>{convertToCelsiusFromKelvin(forecast.temp.min)}°</span>
              <span>{convertToCelsiusFromKelvin(forecast.temp.max)}°</span>
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
  align-items: center;
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
`;

const WeatherCardTemp = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 18px;
  justify-content: space-between;
`;
