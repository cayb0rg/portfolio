import { Outlet } from "react-router-dom";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import async from 'async';

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
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Update local storage when user changes to and from dark mode
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) document.querySelector('body').classList.add('dark-mode');
    if (!isDarkMode) document.querySelector('body').classList.remove('dark-mode');
  }, [isDarkMode]);

  // Page load animation
  useEffect(() => {
    document.getElementById('main').classList.add('load-main');
  }, []);

  // Close menu icon when outside menu
  // Open menu icon when inside menu
  useEffect(() => {
    if (!isMenuOpen)
    {
      document.getElementById('menu-icon').classList.add('menu-icon-close');
      document.getElementById('menu-icon').classList.remove('menu-icon-open');
    }
    else {
      document.getElementById('menu-icon').classList.add('menu-icon-open');
      document.getElementById('menu-icon').classList.remove('menu-icon-close');
    }
  }, [isMenuOpen])

  useEffect(() => {
    fetchRepos();
  }, [])

  const fetchRepos = useCallback(async () => {
    await axios({
      method: 'get',
      url: 'https://api.github.com/users/cayb0rg/repos'
    }).then(response => {
      setRepos(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main id="main">
        {isMenuOpen ? <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> :
          <Routes>
            <Route path="/" element= {<Home repos={repos} isLoading={isLoading}/>}/>
            <Route path="/projects" element={<Projects repos={repos}/>}/>
            <Route path="/projects/:name" element={<Project/>}/>
            <Route path="/about" element={<About isDarkMode={isDarkMode}/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        }
      </main>

    </BrowserRouter>
  )
}
