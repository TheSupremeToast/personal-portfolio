import React from "react";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";

// Local imports
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Projects from "./pages/projects";
import Photography from "./pages/photography";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/home' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/photography' element={<Photography/>} />
    </Routes>
    </Router>
  );
}

export default App;
