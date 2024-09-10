import React, { useEffect, useState } from "react";
import instance from "../../utilis/axios";
import requests from "../../utilis/requests";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
   const [TrailerUrl, setTrailerUr] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const request = await instance.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);

  // console.log(movies);
  const opts = {
    height: "290",
    width: "80%",
    playerVars: {
      autoplay: 1,
    },
  };
 
  const handleClick = (movie) => {
    if (TrailerUrl) {
      setTrailerUr("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUr(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
export default Row;
