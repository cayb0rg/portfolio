import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import camperImg from '/src/assets/images/camper.png';
import henningImg from '/src/assets/images/henning.png';
import stratagemImg from '/src/assets/images/stratagem.png';
import libgenImg from '/src/assets/images/libgen.png';

export default function Projects() {

  const [imageSrc, setImageSrc] = useState(henningImg);

  function onProjectHover(src) {
    // Change image
    setImageSrc(src);
  }

  return (
    <div>
      <h1>projects</h1>
      <div className="projects-container">
        <img src={imageSrc} className="projects-img"></img>
        <ul className="list projects-list">
          <Link to="/projects/drain-cleaning" onMouseOver={() => onProjectHover(henningImg)}>Henning Drain Cleaning</Link>
          <Link to="/projects/camper" onMouseOver={() => onProjectHover(camperImg)}>Camper</Link>
          <Link to="/projects/stratagem" onMouseOver={() => onProjectHover(stratagemImg)}>To Do List</Link>
          <Link to="/projects/libgen-api" onMouseOver={() => onProjectHover(libgenImg)}>Library Genesis Search Tool</Link>
        </ul>
      </div>
    </div>
  )
}
