import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import App components
import AppComp from "./components/app/AppComp";

// compile App component in `#app` HTML element
ReactDOM.hydrate(
  <BrowserRouter>
    <AppComp />
  </BrowserRouter>,
  document.getElementById("app")
);
