import { AppContainer } from "./components/app-layout/AppContainer";
import { AppH1 } from "./components/app-text/AppH1";
import { Weather } from "./components/Weather";
export default function App() {
  return (
    <AppContainer>
      <AppH1>Hello world!</AppH1>
      <Weather />
    </AppContainer>
  );
}
