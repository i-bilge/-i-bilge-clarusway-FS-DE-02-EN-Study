import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import MovieCard from '../components/MovieCard';


const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function Main() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])

    const getMovies = (API)=>{
        axios.get(API)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err))
    }

  return (
        <div className="d-flex justify-content-center flex-wrap ">
          {movies.map((movie) => (
            <MovieCard 
            key={movie.id}
            {...movie}
            />
          ))}
        </div>
  )
}

export default Main