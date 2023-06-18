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
  gibraltaz,
  idmc,
  lyon,
  commet,
  icl,
  vandoeuvre,
  config,
  threejs,
  granulest,
  executive,
  concierge,
} from "../assets"

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
]

const services = [
  {
    title: "UX Designer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "UX/UI Designer en alternance",
    company_name: "Gibraltaz, Toul",
    icon: gibraltaz,
    iconBg: "#FFF",
    date: "Depuis octobre 2021",
    points: [
      "Récolte du besoin client et utilisateur puis benchmark UX.",
      "Design d’interfaces web ergonomiques avec Figma.",
      "Implémentation de sites sous WordPress.",
      "Planification de projets centrés utilisateur.",
    ],
  },
  {
    title: "Master Sciences Cognitives",
    company_name:
      "Institut des sciences du Digital, Management et Cognition, Nancy",
    icon: idmc,
    iconBg: "#FFF",
    date: "De septembre 2021 à septembre 2023 ",
    points: [
      "IHM et Ergonomie des interfaces.",
      "Méthodes et outils d'analyse du comportement humain.",
      "Game design, jeux sérieux et e-learning.",
      "Gestion de projet agile.",
    ],
  },
  {
    title: "Licence MIASHS",
    company_name: "Université Lumière Lyon 2",
    icon: lyon,
    iconBg: "#FFF",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const projects = [
  {
    name: "Site - Commet Group",
    description: "Refonte du site Commet Group",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: commet,
    source_code_link: "https://github.com/",
  },
  {
    name: "Site - Institut de Cancérologie de Lorraine",
    description: "Refonte du site de l'ICL",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: icl,
    source_code_link: "https://github.com/",
  },
  {
    name: "Plateforme d'engagement - Vandoeuvre",
    description: "Benchmark et design ",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Benchmark",
        color: "pink-text-gradient",
      },
    ],
    image: vandoeuvre,
    source_code_link: "https://github.com/",
  },
  {
    name: "Configurateur - Groupe FPS",
    description: "lorem ipsum dolor sit amet, consectetur",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: config,
    source_code_link: "https://github.com/",
  },
  {
    name: " Site - Granulest",
    description: "lorem ipsum dolor sit amet, consectetur",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: granulest,
    source_code_link: "https://github.com/",
  },
  {
    name: "Site - executive",
    description: "lorem ipsum dolor sit amet, consectetur",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Benchmark",
        color: "pink-text-gradient",
      },
    ],
    image: executive,
    source_code_link: "https://github.com/",
  },
  {
    name: "Conciergerie - Melun",
    description: "lorem ipsum dolor sit amet, consectetur",
    tags: [
      {
        name: "UX",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Analyse",
        color: "pink-text-gradient",
      },
    ],
    image: concierge,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, projects }
