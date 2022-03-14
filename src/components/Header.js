import React from 'react';

export default function Header(props) {

  function handleOnClick(e) {
    props.setIsMenuOpen(!props.isMenuOpen);
  }

  return (
    <header>
      <div>
        <a href="/">
          <h1>cay.li</h1>
        </a>
      </div>
      <div onClick={handleOnClick} class={props.isMenuOpen ? "menu-icon menu-icon-open" : "menu-icon"}>
        <svg viewBox="0 0 30 30">
          <rect id="menu-rect-horizontal" y="10" width="30" height="10" rx="5"/>
          <rect id="menu-rect-vertical" x="10" width="10" height="30" rx="5"/>
        </svg>
      </div>
    </header>
  )
}
