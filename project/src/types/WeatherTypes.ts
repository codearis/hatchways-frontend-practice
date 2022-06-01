export interface WeatherTypes {
  current: CurrentTypes;
  daily: DailyTypes[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  name: string;
}

type CurrentTypes = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
};

type DailyTypes = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLikeTypes;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: TempTypes;
  uvi: number;
  weather: WeatherInfoTypes[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

type FeelsLikeTypes = { day: number; night: number; eve: number; morn: number };

type WeatherInfoTypes = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type TempTypes = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
};
