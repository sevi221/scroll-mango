import React from "react";
import "../assets/scss/Layout.scss";
import { Link} from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div className="container">
      <h1 className="title">Seleccione una opción:</h1>
      <div className="button-container">
          <Link className="btn-style" to="/exercise1">Exercise 1</Link>
          <Link className="btn-style" to="/exercise2">Exercise 2</Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
