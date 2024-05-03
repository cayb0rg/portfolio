import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components
import RepoCard from './RepoCard';

export default function Home(props) {
  let navigate = useNavigate();

  const [dragged, setDragged] = useState(null);

  function handleOnDragStart(e) {
    setDragged(e.target);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0)
  }

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  function handleOnDrop(e) {
    e.preventDefault();
    // Get dropzone element
    let parent = e.target;
    while (parent && !parent.classList.contains('dropzone'))
    {
      parent = parent.parentNode;
    }

    // Swap elements
    dragged.parentNode.appendChild(parent.firstElementChild);
    dragged.parentNode.removeChild(dragged);
    parent.appendChild(dragged);
    dragged.style.display = "block";

    // If user dropped in reactive zone, make a response
    if (parent.parentNode.classList.contains("reactivezone"))
    {
      const subject = document.getElementById('subject').firstElementChild;
      const predicate = document.getElementById('predicate').firstElementChild;

      const subjectNew = document.createElement('p');
      const predicateNew = document.createElement('p');

      let flag = false;

      if (subject.id=="hey")
      {
        if (predicate.id=="nines")
          navigate("/about");
        if (predicate.id=="burgers")
        {
          subjectNew.textContent = "hi pie!";
          predicateNew.textContent = "it's a pleasure to meet you :)";
          flag = true;
        }
        if (predicate.id=="front-end-developer")
        {
          subjectNew.textContent = "hi front end development!";
          predicateNew.textContent = "it's a pleasure to meet you :)";
          flag = true;
        }
      }
      if (subject.id=="i-like")
      {
        if (predicate.id=="nines")
        {
          predicateNew.textContent = "you may need help";
          flag = true;
        }
        else if (predicate.id=="front-end-developer")
          navigate("/projects");
        else if (predicate.id=="burgers") {
          props.setLikesPie(true);
          navigate("/about#pie");
        }
      }

      if (flag)
      {
        setTimeout(() => {
          subject.appendChild(subjectNew);
          predicate.appendChild(predicateNew);
        }, 500);
        setTimeout(() => {
          subject.removeChild(subjectNew);
          predicate.removeChild(predicateNew);
        }, 5000);
      }

    }
  }

  function Repositories() {
    if (!props.isLoading && props.repos) {
      return (
        <div className="repos">
          {props.repos.map((repo, i) =>
            <RepoCard key={i} repo={repo}></RepoCard>
          )}
        </div>
      )
    }
    else
      return <></>;
  }

  return (
    <article className="home-container container">
      <div className="reactivezone">
        <div id="subject" className="dropzone" onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
          <div id="hey" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>hey, i'm</p>
          </div>
        </div>
        <div id="predicate" className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
          <div id="cay" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>cay</p>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
          <div id="i-like" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>i like</p>
          </div>
        </div>
        <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
          <div id="burgers" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>pie</p>
          </div>
        </div>
        <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
          <div id="and" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>and</p>
          </div>
        </div>
        <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
          <div id="front-end-developer" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
            <p>front-end web development</p>
          </div>
        </div>
      </div>
      <Link to="/projects" className="see-projects-btn button">
        see my projects
        <svg id="project-next-arrow" className="arrow" viewBox="0 0 20 8">
          <line x1="0" x2="20" y1="4" y2="4"/>
          <line x1="16" x2="20" y1="0" y2="4"/>
          <line x1="16" x2="20" y1="8" y2="4"/>
        </svg>
      </Link>
      <Repositories/>
    </article>
  )
}
