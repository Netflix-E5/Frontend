import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import store from "./redux/config/configStore";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mainTheme = {
  bold: "netflixBold",
  light: "netflixLight",
  medium: "netflixMedium",
  regular: "netflixRegular",
  accentColor: "#E50914",
  mainBgColor: "#141414",
  transparentBgColor: "rgba(42,42,42,0.6)",
  btnBorderColor: "hsla(0,0%,100%,0.5)",
  transparentBtnColor: "rgba(109, 109, 110, 0.7)",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
