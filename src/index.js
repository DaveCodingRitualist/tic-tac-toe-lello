import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


//create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
//use the root element to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
