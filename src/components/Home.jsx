import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components
import RepoCard from './RepoCard';
import doubleClick from "../assets/images/icons/double-click.png";

export default function Home(props) {
  let navigate = useNavigate();

  const [dragged, setDragged] = useState(null);
  const [editing, setEditing] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [responding, setResponding] = useState(false);
  const [shownWelcome, setShownWelcome] = useState(false);

  const [hey, setHey] = useState("hey, i'm");
  const [cay, setCay] = useState("cay");
  const [iDo, setIDo] = useState("i do");
  const [webDev, setWebDev] = useState("web dev");
  const [and, setAnd] = useState("and");
  const [arduino, setArduino] = useState("arduino stuff");

  function handleOnDragStart(e) {
    if (responding) return;
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

    if (!parent || !parent.classList.contains('dropzone')) {
      dragged.parentNode.appendChild(dragged);
    };

    // Swap elements
    dragged.parentNode.appendChild(parent.firstElementChild);
    dragged.parentNode.removeChild(dragged);
    parent.appendChild(dragged);
    dragged.style.display = "block";
  }

  function respond (e) {
    if (e.target.parentNode && e.target.parentNode.parentNode.id != "predicate") {
      return;
    }
    if (!showHint && !responding && e.target.value != "cay") {
      const subject = document.getElementById('subject').firstElementChild;
      const predicate = document.getElementById('predicate').firstElementChild;

      const subjectNew = document.createElement('p');
      const predicateNew = document.createElement('p');

      let flag = false;

      if (subject.id=="hey")
      {
        if (predicate.id=="nines")
          navigate("/about");

        subjectNew.textContent = "hi " + e.target.value + "! 👋";
        predicateNew.textContent = "welcome!";
        flag = true;
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
          if (!shownWelcome) {
            predicate.appendChild(predicateNew);
          }
          setShownWelcome(true);
          setResponding(true)
        }, 500);
        setTimeout(() => {
          subject.removeChild(subjectNew);
          if (!shownWelcome) {
            predicate.removeChild(predicateNew);
          }
          setResponding(false);
        }, 5000);
      }
    }
  }

  // window event listener for clicking outside of draggables
  window.addEventListener('click', (e) => {
    if (e.target.tagName != "INPUT") {
      setEditing(false);
    }
  });

  function handleOnDoubleClick(e) {
    if (responding) return;
    setEditing(true);
    setShowHint(false);
    e.target.querySelector('input')?.focus();
  }

  window.addEventListener('keydown', (e) => {
    if (e.key == "Enter" || e.key == "Escape") {
      setEditing(false);
    }
  });

  function Repositories() {
    if (!props.isLoading && props.repos) {
      return (
        <>
          <h2>github projects</h2>
          <div className="repos">
            {props.repos.map((repo, i) =>
              <RepoCard key={i} repo={repo}></RepoCard>
            )}
          </div>
        </>
      )
    }
    else
      return <></>;
  }

  return (
    <article className="home-container container">
      <div className="drag-intro">
        <div className="reactivezone">
          <div id="subject" className="dropzone" onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
            <div id="hey" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop}>
              {/* {editing ? <input type="text" value={hey} onChange={(e) => setHey(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{hey}</p> } */}
              <p>{hey}</p>
            </div>
          </div>
          <div id="predicate" className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="cay" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop} onDoubleClick={handleOnDoubleClick}>
              {editing ? <input type="text" value={cay} onChange={(e) => setCay(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{cay}</p> }
            </div>
          </div>
          <img id="double-click-hint" className={showHint ? "active" : ""} src={doubleClick} alt="double-click"/>
        </div>
        <div className="boxes">
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="i-like" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop} onDragEnd={handleOnDrop} onDoubleClick={handleOnDoubleClick}>
              {editing ? <input type="text" value={iDo} onChange={(e) => setIDo(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{iDo}</p> }
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="burgers" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop} onDoubleClick={handleOnDoubleClick}>
              {editing ? <input type="text" value={webDev} onChange={(e) => setWebDev(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{webDev}</p> }
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="and" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop} onDoubleClick={handleOnDoubleClick}>
              {editing ? <input type="text" value={and} onChange={(e) => setAnd(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{and}</p> }
            </div>
          </div>
          <div className="dropzone" onDragOver={handleOnDragOver}  onDrop={handleOnDrop}>
            <div id="front-end-developer" className="draggable" draggable={!editing && !responding} onDragStart={handleOnDragStart} onDragEnd={handleOnDrop} onDoubleClick={handleOnDoubleClick}>
              {editing ? <input type="text" value={arduino} onChange={(e) => setArduino(e.target.value)} onBlur={respond} onKeyDown={(e) => {if (e.key == "Enter") respond(e)}}/> : <p>{arduino}</p> }
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-zone">
        <h1>hey, i'm cay</h1>
        <p>i do web dev and arduino stuff</p>
      </div>
      <Link to="/projects" className="see-projects-btn button">
        see projects
        <svg id="project-next-arrow" className="arrow" viewBox="0 0 20 8">
          <line x1="0" x2="20" y1="4" y2="4"/>
          <line x1="16" x2="20" y1="0" y2="4"/>
          <line x1="16" x2="20" y1="8" y2="4"/>
        </svg>
      </Link>
      {/* <Repositories/> */}
    </article>
  )
}
