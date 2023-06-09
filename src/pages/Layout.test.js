import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Exercise1 from "../pages/Exercise1/Exercise1";
import Exercise2 from "../pages/Exercise2/Exercise2";
import "@testing-library/jest-dom/extend-expect"; // Import the jest-dom matchers

describe("Layout", () => {
  test("renders Layout with router", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Routes>
      </BrowserRouter>
    );
  });

  test("renders with correct links", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Routes>
      </BrowserRouter>
    );

    const exercise1Button = screen.getByRole("link", { name: "Exercise 1" });
    const exercise2Button = screen.getByRole("link", { name: "Exercise 2" });

    expect(exercise1Button).toHaveAttribute("href", "/exercise1");
    expect(exercise2Button).toHaveAttribute("href", "/exercise2");
  });
});
