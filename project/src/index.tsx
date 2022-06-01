import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppThemeProvider } from "./context/context";
import styled from "styled-components";

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <IndexContainer>
        <App />
      </IndexContainer>
    </AppThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
