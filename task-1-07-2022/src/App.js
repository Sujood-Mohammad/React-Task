import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import { useEffect , useState } from "react";

export default function App() {
 const [movies, setDtat] = useState([]);

    const fetchMovies = async()=> {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ab9ae6f4f09635a061ce19661cd57229')
      const movies = await response.json();
      setDtat(movies.results)
    }
    useEffect(()=> {
      fetchMovies();
    }
    ,[])
  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={ <Navbar />}/>
          <Route index element={ <Home />}/>
          <Route path="/About" element={ <About />}/>
          <Route path="/MoviesList" element={<MoviesList  movies={movies}/>}/>
          <Route path="/movie/:title/:id" element={<Movie />}/>
          
        </Routes>
       

    </div>
  </BrowserRouter> 

  );
}