import "./app.css";
import "C:/Sandesh React/myMovie/my-movie-imdb/src/pages/video/video.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from "./myComponents/header/Header";
import HomeX from "./pages/home/HomeX";
import MovieListX from "./myComponents/movieList/MovieListX";
import { MovieDetail } from "./pages/movieDetail/MovieDetail";
import Video from "./pages/video/video";
import { RegForm } from "./pages/form/formX";
// import { RegForm } from "./pages/form/form";
// import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomeX />}></Route>
          <Route
            path="/movie/:id"
            element={<MovieDetail/>}
          ></Route>
          <Route path="/movies/:type" element={<MovieListX/>}></Route>
          <Route path="/video" element={<Video/>}></Route>
          <Route path="/form" element={<RegForm/>}></Route>
          {/* <Route path="/*" element={<h1>Errorr Page</h1>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
