import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../assets/scss/Layout.scss";
import Exercise1 from "../pages/Exercise1/Exercise1";
import Exercise2 from "../pages/Exercise2/Exercise2";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Seleccione una opción:</h1>
        <div className="button-container">
          <button>
            <Link to="/exercise1">Exercise 1</Link>
          </button>
          <button>
            <Link to="/exercise2">Exercise 2</Link>
          </button>
        </div>
        <Routes>
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
