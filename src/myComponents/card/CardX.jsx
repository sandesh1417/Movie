import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={3}></Skeleton>
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : "No Photo"
              }`}
            />
            <div className="card__overlay">
              <div className="card__title">
                {movie ? movie.original_title : "No Title"}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : "No date"}
                <span className="card__rating">
                  {movie ? movie.vote_average : "No Rate"}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {movie
                  ? movie.overview.slice(0, 118) + "....."
                  : "................."}
              </div>
            </div>
            {/* </img> */}
          </div>
        </Link>
      )}
    </>
  );
};
