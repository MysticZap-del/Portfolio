import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import zidio from "../assets/zidio.png";
import TMS from "../assets/TMS.png";
import unstop from "../assets/unstop.png";
import netflix from "../assets/netflix.png";
import mindspace from "../assets/mindspace.jpg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Enthusiast",
    icon: mobile,
  },
  {
    title: "AI & LLM Explorer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Web Development Intern (Especially Frontend)",
    company_name: "Zidio Development",
    icon: zidio,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Apr 2025",
    points: [
      "Collaborated with a team to design and build a responsive e-commerce website using HTML, CSS, and JavaScript.",
      "Implemented product catalog, search functionality, and user authentication features.",
      "Optimized the site for mobile responsiveness and cross-browser compatibility.",
      "Utilized Git for version control and collaborated on code with teammates through GitHub.",
    ],

  },
  {
    title: "Head Of Content Team",
    company_name: "Thapar Mathematical Society",
    icon: TMS,
    iconBg: "#383E56",
    date: "Jul 2025 - Present",
    points: [
      "Led the content team for academic and creative writing across events.",
      "Managed deadlines, writing pipelines, and editing processes.",
      "Collaborated with design and PR teams to deliver impactful campaigns.",
      "Mentored junior members and ensured quality control.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Unstop",
    icon: unstop,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Led campus outreach initiatives to promote Unstop events, challenges, and career opportunities among students.",
      "Took ownership of planning and executing promotional strategies, driving increased participation in national-level competitions.",
      "Acted as the bridge between Unstop and college communities, collaborating with clubs and peers to expand visibility.",
      "Built communication and leadership skills by representing Unstop in meetings, campaigns, and feedback sessions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Homepage Clone",
    description:
      "A clone of the Netflix homepage that allows users to browse and search for movies and TV shows, featuring a responsive design and interactive elements.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/MysticZap-del/Netflix-Clone",
  },
  {
    name: "MindSpace – Mental Wellness Web App",
    description:
      "MindSpace – A lightweight mental wellness web app that uses a chat-based journaling system, basic AI mood detection, and mood tracking to help users reflect on their emotions easily. Built with HTML, CSS, JavaScript, Tailwind CSS, MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },      
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },      
      {
        name: "chart.js",
        color: "blue-text-gradient",
      },      
      {
        name: "tensorflow.js",
        color: "red-text-gradient",
      },      
      {
        name: "socket.IO",
        color: "red-text-gradient",
      },      

    ],
    image: mindspace,
    source_code_link: "https://github.com/MysticZap-del/MindSpace",
  },
];

export { services, technologies, experiences, testimonials, projects };
