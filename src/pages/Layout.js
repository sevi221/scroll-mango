import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../assets/scss/Layout.scss";

const Exercise1 = () => <h1>Hola</h1>;
const Exercise2 = () => <h1>Adiós</h1>;

const Layout = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Layout;
