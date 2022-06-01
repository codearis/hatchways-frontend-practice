import { fetchCityList } from "./../../remote/fetchCityList";

const location = "London";

test("call to CityList returns an array with 5 elements", async () => {
  return fetchCityList(location).then((data) => expect(data).toHaveLength(5));
});
