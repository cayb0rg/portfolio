import React from 'react';

export default function Header(props) {

  function handleOnClick() {
    props.setIsMenuOpen(!props.isMenuOpen);
  }

  return (
    <header>
      <div>
        <a href="/">
          <h1>cay.li</h1>
        </a>
      </div>
      <div onClick={handleOnClick}>
        <h1>Menu</h1>
      </div>
    </header>
  )
}
