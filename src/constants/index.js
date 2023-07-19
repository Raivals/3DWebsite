import {
  mobile,
  backend,
  creator,
  web,
  miro,
  figma,
  gimp,
  corel,
  wordpressLog,
  unity,
  elementor,
  html,
  css,
  gibraltaz,
  idmc,
  lyon,
  commet,
  icl,
  vandoeuvre,
  config,
  granulest,
  executive,
  concierge,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Recherche Utilisateur",
    icon: web,
  },
  {
    title: "Design UX",
    icon: mobile,
  },
  {
    title: "Design UI",
    icon: backend,
  },
  {
    title: "Recherche graphique",
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
    name: "Miro",
    icon: miro,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Gimp",
    icon: gimp,
  },
  {
    name: "Corel-painter",
    icon: corel,
  },
  {
    name: "Wordpress",
    icon: wordpressLog,
  },
  {
    name: "Elementor",
    icon: elementor,
  },
  {
    name: "Unity",
    icon: unity,
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
    date: "Sept 2018 - Juin 2021",
    points: [
      "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales - Sciences Cognitives, mention Bien",
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
    description: "Analyse concurentielle ",
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
    description: "Implémentation sur Wordpress",
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
    description: "Benchmark, maquettage et implémentation",
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
    description: "Amélioration de l'interface",
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
