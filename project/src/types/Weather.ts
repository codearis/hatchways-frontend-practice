export interface Weather {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  daily?: Daily[];
}

interface Daily {
  clouds?: number;
  dew_point?: number;
  dt?: number;
  feels_like?: any;
  humidity?: number;
  moon_phase?: number;
  moonrise?: number;
  moonset?: number;
  pop?: number;
  pressure?: number;
  rain?: number;
  sunrise?: number;
  sunset?: number;
  temp?: any;
  uvi?: number;
  weather: any[];
  wind_deg?: number;
  wind_gust?: number;
  wind_speed?: number;
}
