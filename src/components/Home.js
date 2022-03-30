import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components
import RepoCard from './RepoCard.js';

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

    // Get dropzone
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

    // Navigate based on what is in drop zone
    if (document.getElementById('subject').firstElementChild.id=="hey"
    || document.getElementById('subject').firstElementChild.id=="i'm")
    {
      if (document.getElementById('predicate').firstElementChild.id=="cay")
        navigate("/about");
      else if (document.getElementById('predicate').firstElementChild.id=="front-end-developer")
        navigate("/projects");
      else if (document.getElementById('predicate').firstElementChild.id=="learning")
        navigate("/projects");
    }
  }

  function Repositories() {
    if (!props.isLoading && props.repos) {
      console.log(props.repos);
      return (
        <div className="repos">
          {props.repos.map((repo, i) =>
            <RepoCard key={i} repo={repo}></RepoCard>
          )}
        </div>
      )
    }
    else {
      return (
        <></>
      )
    }
  }

  return (
    <div>
      <div className="home-container container">
        <div className="reactivezone">
          <div id="subject" className="dropzone" onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
            <div id="hey" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>hey, i'm</p>
            </div>
          </div>
          <div id="predicate" className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="ch" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>cayli henning</p>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="but" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>but you can call me</p>
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="cay" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>cay</p>
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="i'm" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>i'm</p>
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="front-end-developer" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>a front-end developer</p>
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="learning" className="draggable" draggable="true" onDragStart={handleOnDragStart}>
              <p>learning software development and graphic design</p>
            </div>
          </div>
        </div>
        <Link to="/projects" className="see-projects-btn button">
          see my projects
          <svg id="project-next-arrow" className="arrow" viewbox="0 0 20 8">
            <line x1="0" x2="20" y1="4" y2="4"/>
            <line x1="16" x2="20" y1="0" y2="4"/>
            <line x1="16" x2="20" y1="8" y2="4"/>
          </svg>
        </Link>
        <Repositories/>
      </div>
    </div>
  )
}
