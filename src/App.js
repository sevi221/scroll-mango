import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Exercise1 from "./pages/Exercise1/Exercise1";
import Exercise2 from "./pages/Exercise2/Exercise2";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"element={<Layout />}/>
          <Route path="exercise1" element={<Layout> <Exercise1 /> </Layout>} />
          <Route path="exercise2" element={<Layout> <Exercise2 /> </ Layout>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
