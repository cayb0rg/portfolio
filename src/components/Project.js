import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from './projects/projects.js';

export default function Project() {

  let { name } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    if (projects)
    {
      //{project.categories.map(c => <li>{c}</li>)}
      setProject(projects.find(obj => {
        console.log(obj);
        console.log(obj.param);
        console.log(name);
        if (obj.param == name)
        {
          return obj;
        }
      }));
      console.log(project);
    }
  }, [])

  useEffect(() => {
    console.log(project);
  }, [project])

  return (
    <div>
      {project &&
        <div>
          <h1>{project.name}</h1>
          <div>
            <div>
              <div>
                <h2>Category</h2>
                <ul>

                </ul>
              </div>
              <div>
                <h2>Year</h2>
                <p>{project.year}</p>
              </div>
            </div>
            <div>
              <p>{project.description}</p>
              <a href={project.url}>
                <svg></svg>
                Visit the website
              </a>
            </div>
          </div>
        </div>
      }
    </div>

  )
}
