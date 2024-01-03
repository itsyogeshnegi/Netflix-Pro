import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
const Cards = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  var tmdb = "https://api.themoviedb.org/3";

  var baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchedFile = async () => {
      var movieData = await axios.get(tmdb + fetchURL);
      if (movieData.data.results) {
        setMovies(movieData.data.results);
      } else {
        setMovies([]);
      }
      console.log(movieData);
    };

    fetchedFile();
  }, [tmdb + fetchURL]);

  if (movies.length === 0) return;
  console.log(baseURL, "hello:::::::");

  return (
    <>
      <div className="title">{title}</div>
      <div className="main_box">
        <div className="shortPosters">
          {movies.map(movie => {
            const { poster_path, id, backdrop_path } = movie;
            return (
              <div key={id} style={{ margin: "10px" }}>
                {poster_path ? (
                  <img
                    src={baseURL + poster_path}
                    alt={id}
                    style={{ width: "200px", height: "100%" }}
                  />
                ) : (
                  <Skeleton
                    count={1}
                    highlightColor="#525252"
                    width={"200px"}
                    height={"300px"}
                  />
                )}
                <button
                  type="button"
                  class="btnModal"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "none",
                  }}
          
                  >
                  More Details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
