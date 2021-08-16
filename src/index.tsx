import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// See https://github.com/stereobooster/react-snap#basic-usage-with-create-react-app.
const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
