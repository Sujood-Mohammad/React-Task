import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieSingal() {
    const { movie_id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        axios(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c`
        ).then((res) => {
            console.log(res.data);
            setMovie(res.data);
        });
    }, [movie_id]);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h1>{movie.title}</h1>
        </div>
    );
}
export default MovieSingal;
