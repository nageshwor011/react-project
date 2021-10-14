import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Context from "./ShopingCart/Context/Context";
// import Context from "./ShopingCart/Context/Context";

ReactDOM.render(

  <Context>
    <App/>
  </Context>,
  document.getElementById("root")
);
