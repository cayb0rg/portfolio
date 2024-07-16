import React from 'react';

import GitHubLight from '../assets/images/icons/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/images/icons/GitHub-Mark-64px.png';
import LinkedInLogo from '../assets/images/icons/LI-In-Bug.png';
import cat from '../assets/images/projects/cat.png';

import Skills from './Skills';

export default function About(props) {

  return (
    <article className="about-container container">
      <div className="left">
        <h1>about</h1>
        <p>i'm a 21-yr-old web developer located in the US. i gained an interest in programming after playing the game <i>Human Resource Machine</i> in high school, and it's only been <s>downhill</s> uphill from there. i do a lot of front-end but i've also dabbled in arduino stuff, game development, graphics programming, and emulation.</p>
        <p>when i'm not sitting in front of a computer screen, i like exploring places on my bike and hanging out with my cat.</p>
        <section className="about-links">
          <a href="https://github.com/cayb0rg" >
            {props.isDarkMode ? <img alt="GitHub" src={GitHubLight} />
              : <img
                className="logo"
                alt="GitHub"
                title="GitHub"
                src={GitHubDark}
              />}
          </a>
          <a href="https://www.linkedin.com/in/cay-h/">
            <img
              className="logo"
              alt="LinkedIn"
              title="LinkedIn"
              src={LinkedInLogo}
            />
          </a>
        </section>
        <Skills isDarkMode={props.isDarkMode}/>
        {props.likesPie ? <section>
          <h2 id="pie">pie</h2>
          <p>coming soon (soon not to be defined)</p>
        </section> : <></>}
      </div>
      <div className="right">
        <figure>
          <img id="cat" src={cat} alt="cat" />
        </figure>
      </div>

    </article>
  )
}
