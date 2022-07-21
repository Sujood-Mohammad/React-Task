import { Route, Routes, Link, BrowserRouter  } from "react-router-dom";
// import "./App.css";
import Home from "./component/Home";
import MovieSingal from "./component/MovieSingal";
import MovieList from "./component/MovieList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/:movie_id" element={<MovieSingal />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
} export default App;