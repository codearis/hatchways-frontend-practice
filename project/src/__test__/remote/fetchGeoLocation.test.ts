import { fetchGeolocation } from "../../remote/fetchGeoLocation";

const location = "London";

test("call to GeoLocation returns correct lat", async () => {
  return fetchGeolocation(location).then((data) =>
    expect(data?.lat).toBe(51.5073219)
  );
});
