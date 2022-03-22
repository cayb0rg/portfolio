import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import camperImg from '/src/assets/images/camper.png';
import henningImg from '/src/assets/images/henning.png';
import stratagemImg from '/src/assets/images/stratagem.png';
import libgenImg from '/src/assets/images/libgen.png';
import projects from './projects/projects.js';

export default function Projects() {

  const [imageSrc, setImageSrc] = useState(henningImg);

  function onProjectHover(src) {
    // Change image
    setImageSrc(src);
  }

  function handleOnMouseEnter(e) {
    e.target.firstChild.style.display="inline-block";
  }

  function handleOnMouseLeave(e) {
    while (e.target.tagName != "A")
    {
      e.target = e.target.parentNode;
    }
    e.target.firstChild.style.display="none";
  }

  return (
    <div>
      <h1>projects</h1>
      <div className="projects-container">
        <img src={imageSrc} className="projects-img"></img>
        <ul className="list projects-list">

          <Link to="/projects/drain-cleaning" onMouseOver={() => onProjectHover(henningImg)}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
                <line x1="0" x2="20" y1="4" y2="4"/>
                <line x1="16" x2="20" y1="0" y2="4"/>
                <line x1="16" x2="20" y1="8" y2="4"/>
              </svg>
              Henning Drain Cleaning
            </Link>
          <Link to="/projects/camper" onMouseOver={() => onProjectHover(camperImg)}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
                <line x1="0" x2="20" y1="4" y2="4"/>
                <line x1="16" x2="20" y1="0" y2="4"/>
                <line x1="16" x2="20" y1="8" y2="4"/>
              </svg>
              Camper
            </Link>
          <Link to="/projects/to-do-list" onMouseOver={() => onProjectHover(stratagemImg)}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
                <line x1="0" x2="20" y1="4" y2="4"/>
                <line x1="16" x2="20" y1="0" y2="4"/>
                <line x1="16" x2="20" y1="8" y2="4"/>
              </svg>
              To Do List
            </Link>
          <Link to="/projects/libgen-api" onMouseOver={() => onProjectHover(libgenImg)}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
              <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
                <line x1="0" x2="20" y1="4" y2="4"/>
                <line x1="16" x2="20" y1="0" y2="4"/>
                <line x1="16" x2="20" y1="8" y2="4"/>
              </svg>
              Library Genesis Search Tool
            </Link>
        </ul>
      </div>
    </div>
  )
}
