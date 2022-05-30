import { fetchFromOpenWeather } from "../../remote/open-weather";

test("call to Open Weather API returns an object", () => {
  const data = fetchFromOpenWeather("London");
  expect(data).toBeInstanceOf(Object);
});
