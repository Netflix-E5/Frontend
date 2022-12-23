import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import store from "./redux/config/configStore";
import "./index.css";

const mainTheme = {
  backgroundColor: "#141414",
  mainColor: "#ED4946",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
