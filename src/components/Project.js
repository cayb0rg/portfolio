import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projects/projects.js';

export default function Project() {

  let { name } = useParams();
  const [project, setProject] = useState({});

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

  return (
    <div>
      {project &&
        <div>
          <h1>{project.name}</h1>
          <div className="project-info">
            <div className="project-details">
              <div className="project-categories">
                <h2>Category</h2>
                <ul>
                  {project.categories}
                </ul>
              </div>
              <div className="project-year">
                <h2>Year</h2>
                <p>{project.year}</p>
              </div>
            </div>
            <div className="project-desc">
              <p>{project.description}</p>
              <a class="button" href={project.url}>
                Visit the website
                <svg id="arrow" viewbox="0 0 20 8">
                  <line x1="0" x2="20" y1="4" y2="4"/>
                  <line x1="16" x2="20" y1="0" y2="4"/>
                  <line x1="16" x2="20" y1="8" y2="4"/>
                </svg>
              </a>
            </div>
          </div>
          <button class="button next-project-btn" onClick={handleNextProject}>
            Next Project
            <svg id="arrow" viewbox="0 0 20 8">
              <line x1="0" x2="20" y1="4" y2="4"/>
              <line x1="16" x2="20" y1="0" y2="4"/>
              <line x1="16" x2="20" y1="8" y2="4"/>
            </svg>
          </button>

        </div>
      }
    </div>

  )
}
