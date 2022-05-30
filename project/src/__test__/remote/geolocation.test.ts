import { fetchFromGeoLocation } from "./../../remote/geolocation";

const location = "London";

test("call to London GeoLocation returns correct lat", async () => {
  return fetchFromGeoLocation(location).then((data) =>
    expect(data?.lat).toBe(51.5073219)
  );
});

// test("object from Open Weather API matches lat key", async () => {
//   const data = await fetchFromOpenWeather(location.lat, location.lon);
//   expect(data.lat).toBe(location.lat);
// });
