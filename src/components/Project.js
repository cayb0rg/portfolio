import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import projects from './projects/projects.js';

import Arrow from './Arrow.js';

export default function Project() {

  let { name } = useParams();
  const [project, setProject] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  function handleSetProject(projectName) {
    const obj = projects.find(obj => obj.param == projectName);
    if (obj)
    {
      obj.categories = obj.categories.map((category, i) => <li key={i}>{category}</li>);
      setProject(obj);
    }
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
        <article className="project-container container">
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
                <Arrow id="project-next-arrow"/>
              </a>
            </div>
          </div>
          <div className="photos">
            {project.images ? project.images.map((img, i) => i > 0 ? <img src={img}/> : <></>) : <></>}
          </div>
        </article>
      }
      <button className="button next-project-btn" onClick={handleNextProject}
        onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        {isHovering ? <p>{project.nextProject}</p>: <p>next project</p>}
        <Arrow id="project-next-arrow"/>
      </button>
    </div>

  )
}
