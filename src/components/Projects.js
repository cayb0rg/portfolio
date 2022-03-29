import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import camperImg from '/src/assets/images/camper.png';
import henningImg from '/src/assets/images/henning.png';
import stratagemImg from '/src/assets/images/stratagem.png';
import libgenImg from '/src/assets/images/libgen.png';
import projects from './projects/projects.js';

export default function Projects(props) {

  const [imageSrc, setImageSrc] = useState(henningImg);

  useEffect(() => {
    document.querySelector(".projects-left").style.backgroundImage = `url(${imageSrc})`;
  }, [])

  function onProjectHover(src) {
    // Change image
    setImageSrc(src);
    document.querySelector(".projects-left").style.backgroundImage = `url(${src})`;
    document.querySelector(".projects-left").classList.add('opacity');
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
    document.querySelector(".projects-left").classList.remove('opacity');
  }

  function ProjectsList() {
    return (
      <ul className="list projects-list">
        <h1 className="projects-header">projects</h1>
        {projects.map(project =>
          <Link to={"/projects/" + project.param} onMouseOver={() => onProjectHover(project.images[0])}
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
      <div className="projects-container">
        <div className="projects-left">

        </div>
        <ProjectsList/>
      </div>
    </div>
  )
}
