import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Exercise1 = () => {
  return <h1>Exercise 1</h1>;
};

const Exercise2 = () => {
  return <h1>Exercise 2</h1>;
};

const Layout = () => {
  return (
      <div>
        <h1>Página Base</h1>
        <Link to="/exercise1">
          <button>Exercise 1</button>
        </Link>
        <Link to="/exercise2">
          <button>Exercise 2</button>
        </Link>
      </div>
  );
};

export default Layout;
