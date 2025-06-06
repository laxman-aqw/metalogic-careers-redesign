import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Career from "./pages/Career";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/careers" element={<Career />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
