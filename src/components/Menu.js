import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {

  function handleOnClick() {
    props.setIsMenuOpen(!props.isMenuOpen);
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
  }

  return (
    <div>
      <nav className="list menu">
        <Link to="/" onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
            <line x1="0" x2="20" y1="4" y2="4"/>
            <line x1="16" x2="20" y1="0" y2="4"/>
            <line x1="16" x2="20" y1="8" y2="4"/>
          </svg>
          home
        </Link>
        <Link to="/projects" onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
              <line x1="0" x2="20" y1="4" y2="4"/>
              <line x1="16" x2="20" y1="0" y2="4"/>
              <line x1="16" x2="20" y1="8" y2="4"/>
            </svg>
          projects
        </Link>
        <Link to="/about" onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
              <line x1="0" x2="20" y1="4" y2="4"/>
              <line x1="16" x2="20" y1="0" y2="4"/>
              <line x1="16" x2="20" y1="8" y2="4"/>
            </svg>
          about
        </Link>
        <Link to="/contact" onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <svg id="menu-arrow" className="arrow" viewBox="0 0 22 9">
              <line x1="0" x2="20" y1="4" y2="4"/>
              <line x1="16" x2="20" y1="0" y2="4"/>
              <line x1="16" x2="20" y1="8" y2="4"/>
            </svg>
          contact
        </Link>
      </nav>
    </div>

  )
}
