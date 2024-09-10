import React, { useState, useEffect } from 'react'
import './Baner.css'
import axios from '../../utilis/axios'
import requests from '../../utilis/requests'
function Baner() {
    const [movie,setMovie]= useState([])
      useEffect(() => {
        async function fetchdata() {
          const request = await axios.get(requests.fetchNetflixOrginals);
        //   console.log(request);
          setMovie(request?.data.results[Math.floor(Math.random()*request?.data.results.length)]);
          return request;
        }
        fetchdata();
      }, []);
      // console.log(movie);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+ "...":str;
}


  return (
    <header
      className="baner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="baner_contents">
        <h1 className="baner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="baner_buttons">
          <button className="baner_button">Play</button>
          <button className="baner_button">My List</button>
        </div>
        <h1 className="baner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="baner_fadeButton" />
    </header>
  );
}

export default Baner
