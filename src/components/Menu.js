import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {

  function handleOnClick() {
    props.setIsMenuOpen(!props.isMenuOpen);
  }

  return (
    <nav>
      <Link to="/" onClick={handleOnClick}>home</Link>
      <Link to="/projects" onClick={handleOnClick}>projects</Link>
      <Link to="/about" onClick={handleOnClick}>about</Link>
      <Link to="/contact" onClick={handleOnClick}>contact</Link>
    </nav>
  )
}
