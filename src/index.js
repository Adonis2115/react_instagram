import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { LikedContextProvider } from "./store/liked-context";

ReactDOM.render(
  <LikedContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LikedContextProvider>,
  document.getElementById("root")
);
