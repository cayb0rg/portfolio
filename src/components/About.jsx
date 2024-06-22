import React from 'react';

import GitHubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/images/GitHub-Mark-64px.png';
import LinkedInLogo from '../assets/images/LI-In-Bug.png';
import cat from '../assets/images/cat.png';

export default function About(props) {

  return (
    <article className="about-container container">
      <div className="left">
        <h1>about</h1>
        <p>I'm a web developer located in Orlando, FL who likes to make things. I gained an interest in programming after playing the game <i>Human Resource Machine</i>, and it's only been downhill from there. My core skillset lies in front-end but I also have an interest in Arduino, game development, graphics programming, and emulation.</p>
        <p>When I'm not sitting in front of a computer screen, I like exploring places on my bike and hanging out with my cat.</p>
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
      </div>
      <div className="right">
        <img id="cat" src={cat} alt="cat" />
      </div>

    </article>
  )
}
