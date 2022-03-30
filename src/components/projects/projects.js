import camper640 from '/src/assets/images/camper_640.png';
import henning640 from '/src/assets/images/henning_640.png';
import stratagem640 from '/src/assets/images/stratagem_640.png';
import libgen640 from '/src/assets/images/libgen_640.png';
import toDoList640 from '/src/assets/images/to_do_list_640.png';
import ticTacToe640 from '/src/assets/images/tic_tac_toe_640.png';

const projects = [
  {
    param: "drain-cleaning",
    name: "henning drain cleaning",
    categories: ["Web Development", "Graphic Design"],
    year: "2019",
    description: "A website I made using Node.js, Pug, HTML, and CSS for a client.",
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
    categories: ["Web Development", "Illustration"],
    year: "2020",
    description: "Description",
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
    categories: ["Web Development"],
    year: "2020",
    description: "Description",
    url: "https://cayb0rg.github.io/libgen_api_implementation/",
    github: "https://github.com/cayb0rg/libgen_api_implementation",
    images: [
      libgen640
    ],
    nextProject: "camper"
  },
  {
    param: "camper",
    name: "Camper",
    categories: ["Adobe Illustrator", "GSAP", "HTML5", "CSS3"],
    year: "2020",
    description: "Description",
    url: "https://cayb0rg.github.io/camper-animation/",
    github: "https://github.com/cayb0rg/camper-animation",
    images: [
      camper640
    ],
    nextProject: "tic-tac-toe"
  },
  {
    param: "tic-tac-toe",
    name: "Tic Tac Toe",
    categories: ["JavaScript", "HTML5", "CSS3"],
    year: "2019",
    description: "Description",
    url: "https://cayb0rg.github.io/tic-tac-toe/",
    github: "https://github.com/cayb0rg/tic-tac-toe",
    images: [
      ticTacToe640
    ],
    nextProject: "drain-cleaning"
  }
]

export default projects;
