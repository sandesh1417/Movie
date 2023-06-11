import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieListX from "../../myComponents/movieList/MovieListX";

const Home = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=317a4dd66b948306c340cd0ef65326ba"
    )
      .then((res) => res.json())
      .then((data) => setpopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={true}
        >
          {popularMovies.map((e) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${e.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${e &&
                    e.backdrop_path}`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {e ? e.original_title : "No Title"}
                </div>
                <div className="posterImage__runtime">
                  {e ? e.release_date : "No date"}
                  <span className="posterImage__rating">
                    {e ? e.vote_average : "No rating"}
                    <i className="fas fa-star" />
                    {" Star"}
                  </span>
                </div>
                <div className="posterImage__description">
                  {e ? e.overview : "No OverView"}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieListX />
      </div>
    </>
  );
};

export default Home;
