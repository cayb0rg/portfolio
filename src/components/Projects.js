import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import camperImg from '/src/assets/images/camper.png';
import henningImg from '/src/assets/images/henning.png';
import stratagemImg from '/src/assets/images/stratagem.png';
import libgenImg from '/src/assets/images/libgen.png';
import projects from './projects/projects.js';

export default function Projects(props) {

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

  function ProjectsList() {
    return (
      <ul className="list projects-list">
        {projects.map(project =>
          <Link to={"/projects/" + project.name} onMouseOver={() => onProjectHover(project.images[0])}
            onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
              <line x1="0" x2="20" y1="4" y2="4"/>
              <line x1="16" x2="20" y1="0" y2="4"/>
              <line x1="16" x2="20" y1="8" y2="4"/>
            </svg>
            {project.name}
          </Link>
        )}
      </ul>
    )
  }

  return (
    <div>
      <h1>projects</h1>
      <div className="projects-container">
        <img src={imageSrc} className="projects-img"></img>
        <ProjectsList/>
      </div>
    </div>
  )
}
