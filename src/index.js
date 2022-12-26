import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import store from "./redux/config/configStore";
import "./index.css";

const mainTheme = {
  accentColor: "#ED4946",
  mainBgColor: "#141414",
  transparentBgColor: "rgba(42,42,42,0.6)",
  btnBorderColor: "hsla(0,0%,100%,0.5)",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
