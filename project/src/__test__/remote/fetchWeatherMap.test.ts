import { fetchWeatherMap } from "../../remote/fetchWeatherMap";

const location = "London";

test("call to Weather Map returns correnct lon", async () => {
  return fetchWeatherMap(location).then((data) =>
    expect(data.lon).toBe(-0.1276474)
  );
});
