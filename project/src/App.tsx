import { fetchFromOpenWeather } from "./remote/open-weather";

export default function App() {
  fetchFromOpenWeather();
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}
