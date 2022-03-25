import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "../components/Movie";
import Movies from "../components/Movies";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Movies />} />
        <Route path={"/movies/:id"} element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
