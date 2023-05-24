import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("App")
);
