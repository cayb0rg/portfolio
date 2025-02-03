import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import NotFound from "./NotFound";
import "../css/styles.css";

import { GitHub } from "react-feather";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode") || "false")
  );

  // Update local storage when user changes to and from dark mode
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    else document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <main className="*:animate-slide-in w-full h-full mt-28">
        {isMenuOpen ? (
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<Project />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        )}
      </main>
      <footer>
        <p>© 2022 cay h.</p>
        <p>last updated on 07/16/2024</p>
        <a href="https://github.com/cayb0rg/portfolio" target="_blank" rel="noreferrer">
          <GitHub className="stroke-pri" />
        </a>
      </footer>
    </BrowserRouter>
  );
}
