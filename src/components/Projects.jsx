import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projects/projects.js';

// Components
import Arrow from './Arrow';

export default function Projects(props) {
  const [filter, setFilter] = React.useState("all");
  const filters = ["all", "web", "graphics", "hardware", "software", "mobile", "games"];

  function onProjectHover(src) {

    // Change background image
    document.querySelector(".projects-left").style.backgroundImage = `url(${src})`;
    // Trigger opacity transition
    document.querySelector(".projects-left").classList.add('opacity');
  }

  function handleOnMouseEnter(e) {
    if (document.getElementById(`${e.target.text}-arrow`))
      document.getElementById(`${e.target.text}-arrow`).style.display="inline-block";
  }

  function handleOnMouseLeave(e) {

    if (document.getElementById(`${e.target.text}-arrow`))
      document.getElementById(`${e.target.text}-arrow`).style.display="none";
    // Trigger opacity transition
    document.querySelector(".projects-left").classList.remove('opacity');
  }

  // Maps projects in projects.js to Link components
  function ProjectsList() {
    return (
      <div className="projects">
        <h1 className="projects-header">projects</h1>
        <div className="filters">
          {filters.map((f, i) => {
            return <button key={i} className={filter == f ? "selected" : ""}
              onClick={() => setFilter(f)}>{f} <div className="slide"></div></button>
          })}
        </div>
        <ul className="list projects-list">
        {projects.map((project, i) => {
            if (filter === "all" || project.tags.includes(filter))
              return <Link
                key={i}
                to={"/projects/" + project.param}
                onMouseOver={() => onProjectHover(project.images[0])}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              >
                <Arrow id={project.name + "-arrow"} className="menu-arrow"/>
                {project.name}
              </Link>
            return <></>
          }
        )}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <div className="projects-container container">
        <div className="projects-left"></div>
        <ProjectsList/>
      </div>
    </div>
  )
}
