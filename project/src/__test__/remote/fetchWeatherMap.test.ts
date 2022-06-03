import { fetchWeatherMap } from "../../remote/fetchWeatherMap";

const location = "London";

test("call to Weather Map returns correct lng", async () => {
  return fetchWeatherMap(location).then((data) =>
    expect(data.lng).toBe(-0.1276474)
  );
});
