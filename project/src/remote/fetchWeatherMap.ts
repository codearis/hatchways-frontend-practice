import { CityCoordsTypes } from "../types/CityTypes";
import { fetchGeolocation } from "./fetchGeoLocation";

export const fetchWeatherMap = async (city: string) => {
  const location = await fetchGeolocation(city);
  return location as CityCoordsTypes;
};
