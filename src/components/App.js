import { Outlet } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './Header.js';
import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Project from './Project.js';
import NotFound from './NotFound.js';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode'));

  useEffect(() => {
    window.localStorage.setItem('isDarkMode', isDarkMode);
    document.getElementById('root').classList.toggle('dark-mode');
  }, [isDarkMode]);

  useEffect(() => {
    document.getElementById('main').classList.add('load-main');
  }, []);

  return (
    <BrowserRouter>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main id="main">
        {isMenuOpen ? <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> :
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:name" element={<Project/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        }
      </main>

    </BrowserRouter>
  )
}
