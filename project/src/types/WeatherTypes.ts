export interface WeatherTypes {
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
  };
  daily: DailyTypes[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  name: string;
}

interface DailyTypes {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: { day: number; min: number; max: number; night: number; eve: number };
  uvi: number;
  weather: WeatherInfoTypes[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface WeatherInfoTypes {
  description: string;
  icon: string;
  id: number;
  main: string;
}
