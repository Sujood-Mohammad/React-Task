// import axios from "axios";
// import React,{useEffect} from "react";
// import {useParams} from "react-router-dom";

// function Home(){
// return "Home"
// }

// export default Home;

import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Home = ()=>
{
    const [data , setData] = useState([]);
    useEffect (()=>{
        const fetchData = async ()=>{
            
            const api = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7');
            const latestMovies = await api.json();
            setData(latestMovies.results);

        }
        fetchData();
    } , [])
  
    return (
        <div className="col m-5">
          <h1 className="row m-5">Netflix</h1>

            <h5 className="row m-5 p-3">Latest Movies</h5>
<div className="row m-5 p-3">
            {data.slice(1, 13).map((user)=>{
                return(
                    <div key={user.id} className="col-lg-4 mb-3 d-flex align-items-stretch">
                        <div className="card">
                            <img src={'https://image.tmdb.org/t/p/w500/'+user.backdrop_path} className="card-img-top" alt="Card Image"/>
                            <div className="card-body d-flex flex-column">
                             <h4 className="card-title ">{user.title}</h4>
                            <p className="card-text mb-4 my-2">{user.overview}</p>
                                          
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Home;