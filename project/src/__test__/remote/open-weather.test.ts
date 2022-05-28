import { fetchFromOpenWeather } from "../../remote/open-weather";

const location = { lat: -13, lon: -72 };

test("call to Open Weather API returns an object", () => {
  const data = fetchFromOpenWeather(location.lat, location.lon);
  expect(data).toBeInstanceOf(Object);
});

test("object from Open Weather API matches lat key", async () => {
  const data = await fetchFromOpenWeather(location.lat, location.lon);
  expect(data.lat).toBe(location.lat);
});
