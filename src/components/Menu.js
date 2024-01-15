import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Components
import Arrow from './Arrow.js';

export default function Menu(props) {

  const menuItems = [
    {name: "home", param: ""},
    {name: "projects", param: "projects"},
    {name: "about", param: "about"},
    {name: "resume", param: "resume"}
  ];

  function handleOnClick() {
    props.setIsMenuOpen(false);
  }

  function handleOnMouseEnter(e) {
    document.getElementById(`${e.target.text}-arrow`).style.display="inline-block";
  }

  function handleOnMouseLeave(e) {
    document.getElementById(`${e.target.text}-arrow`).style.display="none";
  }

  return (
    <nav className="list menu container">
      {menuItems.map((item, i) =>
        <Link
          key={i}
          to={"/" + item.param}
          onClick={handleOnClick}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Arrow id={item.name + "-arrow"} className="menu-arrow"/>
          {item.name}
        </Link>
      )}
    </nav>

  )
}
