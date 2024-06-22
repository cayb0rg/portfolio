import React, { useEffect, useState, useCallback } from "react";
import { gql, GraphQLClient } from "graphql-request";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';

import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import NotFound from './NotFound';
import '../css/styles.css';

import GitHubLight from '../assets/images/GitHub-Mark-Light-64px.png';
import GitHubDark from '../assets/images/GitHub-Mark-64px.png';

let gql_client = new GraphQLClient("https://api.github.com/graphql");

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [likesPie, setLikesPie] = useState(false);

  // Update local storage when user changes to and from dark mode
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) document.querySelector('body').classList.add('dark-mode');
    if (!isDarkMode) document.querySelector('body').classList.remove('dark-mode');
  }, [isDarkMode]);

  // Page load animation
  useEffect(() => {
    document.getElementById('main').classList.add('load-main');
  }, []);

  // Close menu icon when outside menu
  // Open menu icon when inside menu
  useEffect(() => {
    if (!isMenuOpen)
    {
      document.getElementById('menu-icon').classList.add('menu-icon-close');
      document.getElementById('menu-icon').classList.remove('menu-icon-open');
    }
    else {
      document.getElementById('menu-icon').classList.add('menu-icon-open');
      document.getElementById('menu-icon').classList.remove('menu-icon-close');
    }
  }, [isMenuOpen])

  useEffect(() => {
    fetchRepos();
  }, [])

  const fetchRepos = useCallback(async () => {
    await axios({
      method: 'get',
      url: 'https://api.github.com/users/cayb0rg/repos'
    }).then(response => {
      let ownRepos = [];
      for (let repo of response.data) {
        if (!repo.fork) {
          ownRepos.push(repo);
        }
      }
      ownRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(ownRepos);
      setIsLoading(false);
    });
  }, []);

  const fetchPinnedRepos = useCallback(async () => {
    const query = gql`
      {
        user(login: "cayb0rg") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                url
                stargazerCount
                primaryLanguage {
                  name
                  color
                  id
                }
                description
                createdAt
                forkCount
                homepageUrl
                id
                isArchived
                isFork
                isInOrganization
                isTemplate
                languages(first: 100) {
                  edges {
                    node {
                      name
                      id
                      color
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await gql_client.request(query);

    setRepos(response.user.pinnedItems.nodes);
    setIsLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <main id="main">
        {isMenuOpen ? <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> :
          <Routes>
            <Route path="/" element= {<Home setLikesPie={setLikesPie} repos={repos} isLoading={isLoading}/>}/>
            <Route path="/projects" element={<Projects repos={repos}/>}/>
            <Route path="/projects/:name" element={<Project/>}/>
            <Route path="/about" element={<About likesPie={likesPie} isDarkMode={isDarkMode}/>}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        }
      </main>
      <footer>
        <p>© 2023 cay h.</p>
        <p>last updated on 06/21/2024</p>
        <a href="https://github.com/cayb0rg/portfolio" >
            {isDarkMode ? <img alt="GitHub" src={GitHubLight}/>
          : <img
              className="logo"
              alt="GitHub"
              src={GitHubDark}
            />}
          </a>
      </footer>

    </BrowserRouter>
  )
}
