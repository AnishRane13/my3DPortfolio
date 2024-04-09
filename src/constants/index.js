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
    cpp,
    movix,
    linkpro,
    summarizer,
    white,
  } from "../assets";


  
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "C++",
      icon: cpp,
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
  ];

  const experiences = [ 
    { 
      title: "SSC",
      company_name: "Parle Tilak Vidyalaya",
      icon: white,
      iconBg: "#383E56",
      date: "June 2016 - April 2017",
      points: [
        "Scored 87.2 %",
      ],
    },
    {
      title: "HSC",
      company_name: "Sathaye College",
      icon: white,
      iconBg: "#E6DEDD",
      date: "July 2018 - March 2019",
      points: [
        "Scored 73.69 %",
      ],
    },
    {
      title: "BSc in Information Technology",
      company_name: "Shopify",
      icon: white,
      iconBg: "#383E56",
      date: "June 2021 - May 2022",
      points: [
        "Scored 8.32 %",
      ],
    },
    {
      title: "Master's in Computer Applications",
      company_name: "Vivekananda Education Society's Institute of Technology",
      icon: white,
      iconBg: "#E6DEDD",
      date: "November 2022 - Present",
      points: [
        "Scored 8.8 C.G.P.A.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Chintan Systems Private Limited",
      icon: white,
      iconBg: "#E6DEDD",
      date: "January 2024 - Present",
      points: [
        "Designed and developed a landing page for mydaulat.com using React and Node.js, integrating HubSpot for seamless data management and customer engagement.",
        "Deployed modular components such as an address widget, drawer, and slider functionality to enhance user experience and interactivity on the landing page.",
        "Implemented SSL certificate generation and server configuration for secure HTTPS communication, ensuring data integrity and user privacy in deployed web applications.",
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
      name: "Movix Web App",
      description:
        "A React.js and Redux-powered web app utilising TMDB API for seamlessly presenting movie data. Features include a user-friendly search bar, trending and popular sections, and detailed movie cards with ratings, cast details, and trailers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: movix,
      source_code_link: "https://github.com/AnishRane13/Movies",
    },
    {
      name: "LinkPro",
      description:
        "A LinkedIn clone developed using React.js featuring authentication, posting, connections, user exploration, and search functionalities. Seamlessly facilitates building meaningful professional connections and showcasing professional journeys.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "google firebase",
          color: "green-text-gradient",
        },
      ],
      image: linkpro,
      source_code_link: "https://github.com/AnishRane13/LinkedPro",
    },
    {
      name: "Article Summarizer",
      description:
        "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/AnishRane13/AI_Article_Summarizer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };


  