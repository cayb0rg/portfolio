import React from 'react';

import GitHubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/images/GitHub-Mark-64px.png';
import LinkedInLogo from '../assets/images/LI-In-Bug.png';

export default function About(props) {

  return (
    <article className="about-container container">
      <h1>about</h1>
      <p>I'm a Computer Science student at the University of Central Florida. I gained an interest in programming after playing the game <i>Human Resource Machine</i>, and it's only been downhill from there.</p>
      <p>When I'm not sitting in front of a computer screen, I like exploring places on my bike and reading.</p>
      <section className="about-links">
        <a href="https://github.com/cayb0rg" >
          {props.isDarkMode ? <img alt="GitHub" src={GitHubLight}/>
        : <img
            className="logo"
            alt="GitHub"
            src={GitHubDark}
          />}
        </a>
        <a href="https://www.linkedin.com/in/cay-h/">
          <img
            className="logo"
            alt="LinkedIn"
            src={LinkedInLogo}
          />
        </a>
      </section>
      {props.likesPie ? <section>
        <h2 id="pie">pie</h2>
        <p>coming soon (soon not to be defined)</p>
      </section> : <></>}

    </article>
  )
}
