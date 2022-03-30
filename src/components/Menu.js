import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Components
import Arrow from './Arrow.js';

export default function Menu(props) {

  function handleOnClick() {
    props.setIsMenuOpen(false);
  }

  function handleOnMouseEnter(e) {
    document.getElementById(`${e.target.text}-arrow`).style.display="inline-block";
  }

  function handleOnMouseLeave(e) {
    document.getElementById(`${e.target.text}-arrow`).style.display="none";
  }

    // id of Arrow must match text of Link
  function Menu(props) {
    return (
      <nav className="list menu">
        {props.items.map((item, i) =>
          <Link key={i} to={"/" + item.param} {...props}>
            <Arrow id={item.name + "-arrow"} className="menu-arrow"/>
            {item.name}
          </Link>
        )}
      </nav>
    )
  }

  return (
    <div>
      <Menu
        items={[
          {name: "home", param: ""},
          {name: "projects", param: "projects"},
          {name: "about", param: "about"}
        ]}
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
    </div>

  )
}
