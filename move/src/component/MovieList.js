import React, { useEffect, useState } from 'react'
import axios from 'axios'
function MovieList() {
    const[movies,setMovies] = useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c`)
        .then((res)=>setMovies(res.data.results))
        .catch((err)=>console.log(err));
    },[]);
    
  return (
    <div>
    {movies.map((movie)=>
    (
         <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h1>{movie.title}</h1>
        </div>
    )
    )}
    </div>
  )
}

export default MovieList
