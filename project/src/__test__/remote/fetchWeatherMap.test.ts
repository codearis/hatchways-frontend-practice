import { fetchWeatherMap } from "../../remote/fetchWeatherMap";

const location = "London";

test("call to Weather Map", async () => {
  return fetchWeatherMap(location).then((data) =>
    // expect(data?.name).toBe("London/England")
    console.log(data)
  );
});
