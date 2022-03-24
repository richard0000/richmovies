import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../components/Movies";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
