import { fetchWeather } from "../../remote/fetchWeather";

const location = "London";

test("call to Open Weather API returns a city", async () => {
  return fetchWeather(location).then((data) =>
    expect(data?.name).toBe("London/England")
  );
});
