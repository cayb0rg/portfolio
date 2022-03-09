import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>projects</h1>
      <nav>
        <Link to="/projects/draincleaning">Henning Drain Cleaning</Link>
        <Link to="/projects/stratagem">Stratagem</Link>
        <Link to="/projects/libgenapi">Library Genesis Search Tool</Link>
      </nav>
    </div>
  )
}
