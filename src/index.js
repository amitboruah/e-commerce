import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProdCont from "./components/context/ProductContext";

ReactDOM.render(
  <ProdCont>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProdCont>,
  document.getElementById("root")
);

reportWebVitals();
