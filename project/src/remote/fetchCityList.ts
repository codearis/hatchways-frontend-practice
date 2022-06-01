interface CityList {
  name: string;
  state: string;
  country: string;
}

export const fetchCityList = async (city: string) => {
  const api = process.env.REACT_APP_OPEN_API;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`;

  if (city) {
    return fetch(url).then(async (response) => {
      return response
        .json()
        .then((data) => {
          let result: CityList[] = [];
          data.forEach((city: any) => {
            result.push({
              name: city.name,
              state: city.state,
              country: city.country,
            });
          });
          return result;
        })
        .catch((err) => {
          return console.log(`Error: ${err}`);
        });
    });
  } else {
    return;
  }
};
