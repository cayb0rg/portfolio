import libgen640 from '../../assets/images/libgen_640.png';
import toDoList640 from '../../assets/images/to_do_list_640.png';
import ticTacToe640 from '../../assets/images/tic_tac_toe_640.png';
import xpline_640 from '../../assets/images/xpline_640.png';
import gradCap_640 from '../../assets/images/grad_cap_640.png';
import busDisplay_640 from '../../assets/images/bus_display_640.png';
import marching_cubes_640 from '../../assets/images/marching_cubes_640.png';
import bodyTrackingAvatar640 from '../../assets/images/body_tracking_avatar_640.png';
import village_circle_640 from '../../assets/images/village_circle_640.png';


const projects = [
  {
    param: "grad-cap",
    name: "graduation cap",
    categories: ["Arduino", "ESP8266", "C++"],
    year: "2024",
    description: "A graduation cap I made for my graduation from University of Central Florida. The cap has a 16x16 LED matrix that displays a scrolling message that changes colors. The message can be changed though an HTTP server, accessed by connecting to the ESP8266's access point. The cap is powered by a USB portable charger.",
    images: [
      gradCap_640,
    ],
    url: null,
    github: "https://github.com/cayb0rg/grad-cap",
    nextProject: "slack-bus"
  },
  {
    param: "slack-bus",
    name: "slack bus bot",
    categories: ["AWS Lambda", "Python", "Docker", "Arduino", "ESP8266", "ESP32", "C++"],
    year: "2024",
    description: "A slack bot I made using AWS Lambda, Python, Docker, and an Arduino for DDL Hackday. The bot would respond to commands in the workspace and send information about bus arrival times and last known locations, which it retrieved from the DoubleMap API. This project also had a hardware component, where I used an Arduino to display a countdown until the next bus arrival on a 16x32 LED matrix.",
    images: [
      busDisplay_640,
    ],
    url: null,
    github: "https://github.com/cayb0rg/slack-bus",
    nextProject: "marching-cubes"
  },
  {
    param: "marching-cubes",
    name: "marching cubes",
    categories: ["Java", "LWJGL", "OpenGL"],
    year: "2024",
    description: "A marching cubes implementation I made using Java, LWJGL, and OpenGL for a group project on parallelizing procedural content generation techniques. The program generates a 2D surface mesh from 3D data.",
    images: [
      marching_cubes_640,
    ],
    url: null,
    github: "https://github.com/rachelMae/ParallelizationOfProceduralContentGeneration/tree/cay-experimental",
    nextProject: "body-tracking-avatar"
  },
  {
    param: "body-tracking-avatar",
    name: "body tracking avatar",
    categories: ["JavaScript", "Mediapipe", "Three.js", "Maya"],
    year: "2023",
    description: "A body tracking avatar I made using JavaScript, Mediapipe, Three.js, and Maya. The avatar is controlled by the user's body movements, which are tracked by the user's webcam.",
    images: [
      bodyTrackingAvatar640
    ],
    url: "https://cayb0rg.github.io/body-tracking-avatar-cap4720/",
    github: "https://github.com/cayb0rg/body-tracking-avatar-cap4720",
    nextProject: "xpline"
  },
  {
    param: "xpline",
    name: "xpline",
    categories: ["Arduino", "ESP8266", "C++"],
    year: "2023",
    description: "A one-dimensional LED Strip XP Farm for the Techranger’s Minecraft room, inspired by the Line Wobbler dungeon crawler. Spiders, which are represented by the red dots, will start spawning when movement is detected or when the room is dark. To fight off these spiders, players control a Techranger, represented by a blue dot, with a joystick made from two MPU6050s. The XP farm also has its own HTTP server which players can access online to see their current XP.",
    images: [
      xpline_640,
    ],
    url: null,
    github: "https://github.com/cayb0rg/xpline",
    nextProject: "village-circle"
  },
  {
    param: "village-circle",
    name: "village circle",
    categories: ["Unity", "C#", "Aseprite"],
    year: "2023",
    description: "I worked with three others to make an RPG in Unity for UCF's AI for Game Programming course. The game begins as a 2D top-down fantasy before transitioning to a 3D horror adventure. I was one of the game programmers, so I worked on the character animations, the bosses' behavior trees and state machines, event system, inventory system, dialogue system, menu, and scene transitions.",
    images: [
      village_circle_640,
    ],
    url: 'https://youtu.be/cFnWXs0_Tdc',
    github: null,
    nextProject: "to-do-list"
  },
  {
    param: "to-do-list",
    name: "to do list",
    categories: ["MongoDB", "Node.js", "Pug", "Adobe Illustrator", "GSAP","HTML5", "CSS3"],
    year: "2020",
    description: "A simple to do list I made using MongoDB, Node.js, Pug, HTML, and CSS as a way to learn the model-view-controller architecture. I designed the homepage in Adobe Illustrator and animated it using GSAP, HTML, and CSS. Implementing the fireflies was a challenging but enlightening experience.",
    url: "https://todo.greml.ing",
    github: "https://github.com/cayb0rg/to-do-list",
    images: [
      toDoList640
    ],
    nextProject: "libgen-api"
  },
  {
    param: "libgen-api",
    name: "library genesis search tool",
    categories: ["React.js", "GSAP", "HTML5", "CSS3"],
    year: "2020",
    description: "This purely front-end tool was made using React.js, GSAP, and my Library Genesis API. Users can search for books within Library Genesis using the book's title, author, ISBN, etc.",
    url: "https://libgen.greml.ing",
    github: "https://github.com/cayb0rg/libgen_api_search_tool",
    images: [
      libgen640
    ],
    nextProject: "tic-tac-toe"
  },
  {
    param: "tic-tac-toe",
    name: "tic tac toe",
    categories: ["JavaScript", "HTML5", "CSS3"],
    year: "2019",
    description: "This project was made using JavaScript, HTML, and CSS. Users can choose to play against the computer or another player locally. The computer has an easy and impossible mode, the latter of which uses the minimax algorithm to determine the best move.",
    url: "https://cayb0rg.github.io/tic-tac-toe/",
    github: "https://github.com/cayb0rg/tic-tac-toe",
    images: [
      ticTacToe640
    ],
    nextProject: "grad-cap"
  }
]

export default projects;