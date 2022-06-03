interface Coordinates {
  name?: string;
  lat?: number;
  lon?: number;
}

export const fetchGeolocation = async (city: string) => {
  const api = process.env.REACT_APP_OPEN_API;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`;

  if (city) {
    return fetch(url).then(async (response) => {
      return response
        .json()
        .then((data) => {
          const result: Coordinates = {
            name: `${data[0].name}/${
              data[0].state ? data[0].state : data[0].country
            }`,
            lat: data[0].lat,
            lon: data[0].lon,
          };
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
