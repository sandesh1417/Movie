import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import { Card } from "../card/CardX";
import axios from "axios";
// import Cards from "../card/card";

const MovieListX = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=317a4dd66b948306c340cd0ef65326ba&language=en-US`
      )
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      {/* <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div> */}
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieListX;
