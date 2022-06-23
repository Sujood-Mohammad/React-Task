import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
 
}

export default App;
