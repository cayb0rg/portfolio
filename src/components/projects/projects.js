import libgen640 from '../../assets/images/libgen_640.png';
import toDoList640 from '../../assets/images/to_do_list_640.png';
import ticTacToe640 from '../../assets/images/tic_tac_toe_640.png';
import xpline_640 from '../../assets/images/xpline_640.png';
import gradCap_640 from '../../assets/images/grad_cap_640.png';
import busDisplay_640 from '../../assets/images/bus_display_640.png';
import marching_cubes_640 from '../../assets/images/marching_cubes_640.png';
import bodyTrackingAvatar640 from '../../assets/images/body_tracking_avatar_640.png';
import village_circle_640 from '../../assets/images/village_circle_640.png';
import between_shows_640 from '../../assets/images/between_shows_640.png';
import dragonotchi_640 from '../../assets/images/dragonotchi_640.png';


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
    description: "A marching cubes implementation I made using Java, LWJGL, and OpenGL for a group project on parallelizing procedural content generation techniques. It utilizes multithreading techniques, which decrease the runtime by 64%. The program generates a 2D surface mesh from 3D data.",
    images: [
      marching_cubes_640,
    ],
    url: null,
    github: "https://github.com/rachelMae/ParallelizationOfProceduralContentGeneration/tree/cay-experimental",
    nextProject: "dragonotchi"
  },
  {
    param: "dragonotchi",
    name: "dragonotchi",
    categories: ["Arduino", "C++", "ESP8266", "Firebase"],
    year: "2024",
    description: "For this hackathon project, I and two others recreated a virtual pet reminiscent of the 90's Tamagotchi using an ESP8266, a 16x16 LED panel, and Kotlin for the mobile app. I worked on the hardware side of the project, which included the ESP8266, LED display, and Firebase integration with Arduino. The ESP8266 also handled the pet's state, e.g. the pet's hunger, cleanliness, and boredom levels. This required working closely with the Android developers for seamless interaction between the app and the ESP8266. This project won Knight Hacks' Award for Best Design.",
    images: [
      dragonotchi_640,
    ],
    url: null,
    github: "https://github.com/Caitlin-Fabian/dragonotchi",
    nextProject: "body-tracking-avatar"
  },
  {
    param: "body-tracking-avatar",
    name: "body tracking avatar",
    categories: ["JavaScript", "Mediapipe", "Three.js", "Maya"],
    year: "2023",
    description: "A body tracking avatar I made using JavaScript, Mediapipe, Three.js, and Maya. The avatar is controlled by the user's body movements, which are tracked by the user's webcam. I designed the 3D avatar model using Maya and rigged it using Mixamo. I utilized Mediapipe to find real-time body landmarks from a webcam feed, which I then used to calculate axis angles and quarternions to rotate the avatar's joints. To create smooth movement, I maintained a log of tracked poses and computed the average from these.",
    images: [
      bodyTrackingAvatar640
    ],
    url: "https://cayb0rg.github.io/body-tracking-avatar-cap4720/",
    github: "https://github.com/cayb0rg/body-tracking-avatar-cap4720",
    nextProject: "between-shows"
  },
  {
    param: "between-shows",
    name: "between shows",
    categories: ["React.js", "React Native", "TanStack Query", "Tailwind CSS"],
    year: "2023",
    description: "A web and mobile app I contributed to using React Native, React.js, and Tailwind CSS for a group project in my Software Engineering course at UCF. The app is a platform for users to browse and rate cartoons. I worked primarily on the mobile app with a few contributions to the front-end, for which I implemented search functionality with infinite scrolling using TanStack Query.",
    images: [
      between_shows_640
    ],
    url: "http://www.betweenshows.co/",
    github: "https://github.com/nizolnier/betweenshows",
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
    description: "I worked with three others to make an RPG in Unity for UCF's AI for Game Programming course. The game begins as a 2D top-down fantasy before transitioning to a 3D horror adventure. My role was game programmer and animator.",
    bullets: [
      'Created 62 animation states for the player’s character in Aseprite and Unity’s animator controller',
      'Developed behavior trees and state machines for boss characters',
      'Developed a robust event system to handle in-game events, a user-friendly inventory system, and an interactive dialogue system',
      'Designed and developed user interfaces, including start menus, pause screens, and HUD elements',
      'Utilized Unity’s Timeline in combination with a custom event system to create keyframe animations',
      'Collaborated effectively with team members by setting up task allocation and progress tracking with Discord bots and a Gantt chart'
    ],
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
    categories: ["MongoDB", "Node.js", "Pug", "Passport.js", "Adobe Illustrator", "GSAP","HTML5", "CSS3"],
    year: "2020",
    description: "A simple to do list I made using MongoDB Community Server, Node.js, Pug, HTML, and CSS as a way to learn the model-view-controller architecture as well as user registration and login. I designed the homepage in Adobe Illustrator and animated it using GSAP, HTML, and CSS. Implementing the fireflies was a challenging but enlightening experience.",
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
    url: null,
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
    url: "https://tictactoe.greml.ing",
    github: "https://github.com/cayb0rg/tic-tac-toe",
    images: [
      ticTacToe640
    ],
    nextProject: "portfolio"
  },
  {
    param: "portfolio",
    name: "this website!",
    categories: ["React.js", "HTML5", "CSS3"],
    year: "2022",
    description: "This website was made using React.js, HTML, and CSS and statically hosted on a Digital Ocean droplet using Vite. I wanted to create a portfolio that was both fun and informative. I also wanted to experiment with different design elements, drag-and-drop functionalities, and CSS animations.",
    url: "https://greml.ing",
    github: "https://github.com/cayb0rg/portfolio",
    images: [],
    nextProject: "grad-cap"
  }
]

export default projects;