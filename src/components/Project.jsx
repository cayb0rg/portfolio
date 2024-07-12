import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import projects from './projects/projects.js';

import Arrow from './Arrow';

export default function Project() {

  let { name } = useParams();
  let navigate = useNavigate();
  const [project, setProject] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  function handleSetProject(projectName) {
    const obj = projects.find(obj => obj.param == projectName);
    if (obj)
    {
      obj.technologies = obj.technologies.map((category, i) => <li key={i}>{category}</li>);
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
    navigate("/projects/" + project.nextProject);
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
              <div className="project-technologies">
                <h2>technologies</h2>
                <ul>
                  {project.technologies}
                </ul>
              </div>
              <div className="project-year">
                <h2>year</h2>
                <p>{project.year}</p>
              </div>
            </div>
            <div className="project-desc">
              <p>{project.description}</p>
              <ul>
                {project.bullets ? project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>) : <></>}
              </ul>
              <div className="project-links">
                {project.github ? <a href={project.github} target="_blank">
                  view the code
                  <Arrow id="project-next-arrow"/>
                </a> : <></>}
                {
                  project.url ?
                  <a href={project.url} target="_blank">
                    visit demo
                    <Arrow id="project-next-arrow"/>
                  </a>
                  : <></>
                }
              </div>
            </div>
          </div>
          <div className="photos">
            {project.images ? project.images.map((img, i) => i > 0 ? <img key={i} src={img}/> : <></>) : <></>}
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
