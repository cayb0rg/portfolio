import React, { useEffect } from 'react';

export default function Header(props) {

  function handleMenuClick(e) {
    if (e.type == "keypress" && e.key != "Enter")
    {
      return;
    }
    props.setIsMenuOpen(!props.isMenuOpen);
  }

  function handleModeClick(e) {
    if (e.type == "keypress" && e.key != "Enter")
    {
      return;
    }
    props.setIsDarkMode(!props.isDarkMode);
  }

  return (
    <header>
      <div>
        <a href="/" tabIndex="0">
          <h1>cayborg.io</h1>
        </a>
      </div>
      <div className="tools">
        <div onClick={handleModeClick} onKeyPress={handleModeClick} tabIndex="0"
          className={props.isDarkMode ? "tool-icon dark-mode-icon-on" : "tool-icon"}>
          {!props.isDarkMode ?
            <svg role="img" viewBox="0 0 30 30" id="darkmodeicon">
              <circle id="moon-dark" r="4" cx="15" cy="15"/>
              <circle id="moon-shadow" r="4" cx="18" cy="13"/>
            </svg>
            :
            <svg role="img" viewBox="0 0 30 30" id="lightmodeicon">
              <circle r="4" cx="15" cy="15"/>
              // Diagonal
              <line x1="8" x2="11" y1="8" y2="11"/>
              <line x1="22" x2="19" y1="8" y2="11"/>
              <line x1="19" x2="22" y1="19" y2="22"/>
              <line x1="11" x2="8" y1="19" y2="22"/>
              // Vertical
              <line x1="15" x2="15" y1="5" y2="9"/>
              <line x1="15" x2="15" y1="21" y2="25"/>
              // Horizontal
              <line x1="5" x2="9" y1="15" y2="15"/>
              <line x1="21" x2="25" y1="15" y2="15"/>
            </svg>
          }

        </div>
        <div onClick={handleMenuClick} onKeyPress={handleMenuClick}
          id="menu-icon" className="tool-icon" tabIndex="0">
          <svg role="img" viewBox="0 0 30 30">
            <rect id="menu-rect-horizontal" y="10" width="30" height="10" rx="5"/>
            <rect id="menu-rect-vertical" x="10" width="10" height="30" rx="5"/>
          </svg>
        </div>
      </div>
    </header>
  )
}
