import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

describe("App", () => {
  test("renders App without crash", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  });
});
