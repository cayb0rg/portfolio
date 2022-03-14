import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        <h2>hey, i'm</h2>
        <h2>cayli henning</h2>
        <h2>but you can call me</h2>
        <h2>cay</h2>
        <p>i'm a front-end developer learning software development and graphic design</p>
        <Link to="/projects">see my projects</Link>
      </div>
    </div>
  )
}
