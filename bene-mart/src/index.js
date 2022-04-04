import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesContainer from "./RoutesContainer";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
