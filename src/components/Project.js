import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projects/projects.js';
import henningImg from '/src/assets/images/henning.png';

export default function Project() {

  let { name } = useParams();
  const [project, setProject] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  function handleSetProject(projectName) {
    const obj = projects.find(obj => obj.param == projectName);
    obj.categories = obj.categories.map((category, i) => <li key={i}>{category}</li>);
    setProject(obj);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      handleSetProject(name);
    }
    return () => mounted = false;
  }, []);

  function handleNextProject(e) {
    e.preventDefault();
    handleSetProject(project.nextProject);
  }

  function handleOnMouseEnter() {
    setIsHovering(true);
  }

  function handleOnMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div className="project-page">
      {project &&
        <div className="project-container">
          <div className="project-header">
            <h1>{project.name}</h1>
          </div>
          <div className="project-info">
            <div className="project-details">
              <div className="project-categories">
                <h2>category</h2>
                <ul>
                  {project.categories}
                </ul>
              </div>
              <div className="project-year">
                <h2>year</h2>
                <p>{project.year}</p>
              </div>
            </div>
            <div className="project-desc">
              <p>{project.description}</p>
              <a href={project.url}>
                visit the website
                <svg id="project-next-arrow" viewbox="0 0 20 8">
                  <line x1="0" x2="20" y1="4" y2="4"/>
                  <line x1="16" x2="20" y1="0" y2="4"/>
                  <line x1="16" x2="20" y1="8" y2="4"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="photos">
            {project.images ? project.images.map(img => <img src={img}/>) : <></>}
          </div>
        </div>
      }
      <button className="button next-project-btn" onClick={handleNextProject}
        onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        {isHovering ? <p>{project.nextProject}</p>: <p>next project</p>}
        <svg id="project-next-arrow" className="arrow" viewbox="0 0 20 8">
          <line x1="0" x2="20" y1="4" y2="4"/>
          <line x1="16" x2="20" y1="0" y2="4"/>
          <line x1="16" x2="20" y1="8" y2="4"/>
        </svg>
      </button>
    </div>

  )
}
