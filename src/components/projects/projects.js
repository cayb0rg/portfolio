import camper640 from '../../assets/images/camper_640.png';
import camperSVG from '../../assets/images/camper.svg';
import henning640 from '../../assets/images/henning_640.png';
import stratagem640 from '../../assets/images/stratagem_640.png';
import libgen640 from '../../assets/images/libgen_640.png';
import toDoList640 from '../../assets/images/to_do_list_640.png';
import ticTacToe640 from '../../assets/images/tic_tac_toe_640.png';

const projects = [
  {
    param: "drain-cleaning",
    name: "henning drain cleaning",
    categories: ["Web Development", "Graphic Design", "HTML5", "CSS3", "Node.js", "Pug"],
    year: "2019",
    description: "A website I made using Node.js, Pug, HTML, and CSS for a client. All graphics were designed and made by yours truly in coordinance with the client's vision.",
    url: "https://henningdraincleaning.com",
    images: [
      henning640
    ],
    github: null,
    nextProject: "to-do-list"
  },
  {
    param: "to-do-list",
    name: "to do list",
    categories: ["Web Development", "HTML5", "CSS3", "MongoDB", "Node.js", "Pug"],
    year: "2019",
    description: "A simple to do list I made using MongoDB, Node.js, Pug, HTML, and CSS as a way to learn the model-view-controller architecture.",
    url: "https://stratagem-to-do-list.herokuapp.com",
    github: "https://github.com/cayb0rg/to-do-list",
    images: [
      toDoList640
    ],
    nextProject: "libgen-api"
  },
  {
    param: "libgen-api",
    name: "library genesis search tool",
    categories: ["Web Development", "React.js", "GSAP", "HTML5", "CSS3"],
    year: "2020",
    description: "This project was made using React.js, GSAP, and my Library Genesis API. Users can search for books within Library Genesis using the book's title, author, ISBN, etc.",
    url: "https://cayb0rg.github.io/libgen_api_search_tool/",
    github: "https://github.com/cayb0rg/libgen_api_search_tool",
    images: [
      libgen640
    ],
    nextProject: "camper"
  },
  {
    param: "camper",
    name: "Camper animation",
    categories: ["Adobe Illustrator", "GSAP", "HTML5", "CSS3"],
    year: "2020",
    description: "I designed the camper in Adobe Illustrator and animated it using GSAP, HTML, and CSS. Implementing the fireflies was a challenging but enlightening experience.",
    url: "https://cayb0rg.github.io/camper-animation/",
    github: "https://github.com/cayb0rg/camper-animation",
    images: [
      camper640,
      camperSVG
    ],
    nextProject: "tic-tac-toe"
  },
  {
    param: "tic-tac-toe",
    name: "Tic Tac Toe",
    categories: ["JavaScript", "HTML5", "CSS3"],
    year: "2019",
    description: "This project was made using JavaScript, HTML, and CSS. Users can choose to play against the computer or another player locally. The computer has an easy and impossible mode.",
    url: "https://cayb0rg.github.io/tic-tac-toe/",
    github: "https://github.com/cayb0rg/tic-tac-toe",
    images: [
      ticTacToe640
    ],
    nextProject: "drain-cleaning"
  }
]

export default projects;
