import { fetchGeolocation } from "./fetchGeoLocation";

export const fetchWeather = async (city: string) => {
  const api = process.env.REACT_APP_OPEN_API;
  const exclude = "currently,minutely,hourly,alerts";
  const location = await fetchGeolocation(city);
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location?.lat}&lon=${location?.lon}&exclude=${exclude}&appid=${api}`;

  if (location) {
    return fetch(url).then((response) => {
      return response
        .json()
        .then((data) => {
          return { ...data, name: location?.name };
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    });
  } else {
    return;
  }
};
