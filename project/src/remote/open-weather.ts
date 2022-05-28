export const fetchFromOpenWeather = async (lat: number, lon: number) => {
  const api = process.env.REACT_APP_OPEN_API;
  const exclude = "current,minutely,hourly,alerts";
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${api}`;
  return fetch(url).then((response) => {
    return response
      .json()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  });
};
