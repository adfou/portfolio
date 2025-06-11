// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaBriefcase
} from "react-icons/fa";

import {
  SiDart,
  SiFlutter,
  SiDjango,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiNginx,
  SiVisualstudiocode,
  SiExpress,
  SiJavascript
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { MdApi } from "react-icons/md";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "https://www.linkedin.com/in/fouad-berriche-37257b19a/", // Replace with your actual LinkedIn URL
  },

  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "https://github.com/adfou",
  },
  {
    name: "mostaql",
    component: FaBriefcase, // GitHub icon
    link: "https://mostaql.com/u/berriche_fouad/reviews",
  },

  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Berriche Fouad"; // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "/portfolio//profile-picture.png", // Your profile image link
  authorDescription:
   "a Software Engineer with a Master's degree in Cybersecurity and a Freelance Full-Stack Developer by passion. I design and build secure, scalable web applications — from elegant frontend interfaces to robust backend architectures. My work spans industries like sports, SEO, healthcare, and travel, where I deliver end-to-end solutions that prioritize both functionality and security." ,
  getInTouchUrl: "Your contact url", // URL for your contact or form page
  authorName: "Berriche fouad", // Replace with your name
  profileImgTagLine: "Software Engineer ", // Your tagline or job title
  authorContactMail: "Berrichefouad0@gmail.com", // Your email address
  authorContactNumber: "+974-5041-8398", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2022,
    degreeType: "Master's Degree in Information Systems Security",
    institution: "Université Saad Dahlab Blida 1",
    institutionUrl: "https://en.univ-blida.dz/faculte-des-sciences/formation-informatique/",
  },
  {
    graduationYear: 2020,
    degreeType: "Bachelor's Degree in Computer Systems",
    institution: "Université Saad Dahlab Blida 1",
    institutionUrl: "https://en.univ-blida.dz/faculte-des-sciences/formation-informatique/",
  },
 
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  SiDjango,
  FaHtml5,
  BsFiletypeXml,
  FaCss3Alt,
  RiTailwindCssFill,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaDatabase,
  FaDocker,
  FaLinux,
  SiFlutter,
  SiDart,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiNginx,
  SiVisualstudiocode
  ,TbApi
  ,SiExpress
  ,SiJavascript
  
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.

const projectsPage = [
  {
    projectName: "PRE-Crohn’s – Personalized Risk Estimation for Crohn’s Disease", // Project name
    projectDescription: "PRE-Crohn’s is a secure, full-stack web platform designed to help individuals assess their personal risk of developing Crohn’s disease. Users can enter medical history and receive tailored risk insights through a clean, interactive interface. Built with React.js, Node.js (Express), JWT authentication, and a MySQL database, the platform ensures both performance and data security. PRE-Crohn’s combines clinical knowledge with modern technology to support early detection and empower users with accessible, data-driven health guidance.", // Project description
    projectURL: "https://precrohns.mgh.harvard.edu/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/adfou/preCrohn", // Optional: GitHub repository link
    tags:[SiJavascript,FaReact,FaNodeJs,SiExpress,SiMysql,TbApi] , // Tech stack used in the project{}
    date: "Jan 2025 - Mai 2025", // Project duration
    urlImage:"/portfolio/pre-c.png"
  },
  {
    projectName: "Cell SEO – Smart Tools for Advanced Search Engine Optimization", // Project name
    projectDescription: "Cell SEO is a web-based platform that automates SEO tasks like keyword tracking, SERP analysis, and content generation—giving marketers and developers fast, data-driven insights.", // Project description
    projectURL: "https://shop.cell-seo.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: [FaReact,SiDjango,SiPostgresql,RiTailwindCssFill,TbApi], // Tech stack used in the project
    date: "Sep 2022 - May 2023", // Project duration
    urlImage:"/portfolio/cell-seo-thumb.png"
  },
  {
    projectName: "Om-Koora – Smart Platform for Sports League Management and Analytics", // Project name
    projectDescription: "Om-Koora is an all-in-one digital platform built to streamline football league operations, player registration, match tracking, and technical staff management. Designed for clubs and federations, it provides real-time analytics, automated workflows, and detailed performance insights to power smarter sports administration.", // Project description
    projectURL: "https://league.omkooora.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags:[SiTypescript,SiNextdotjs,FaNodeJs,SiExpress,SiMysql,SiGraphql] , // Tech stack used in the project{}
    date: "Fev 2023 - May 2024", // Project duration
    urlImage:"/portfolio/omKoora.png"
  },
  {
    projectName: "Do-Calculate – Smart Arabic Platform for Online Calculations", // Project name
    projectDescription: "Do-Calculate is the leading Arabic-language platform offering a comprehensive suite of free online calculators. Whether you're calculating finances, health metrics, scientific values, or educational formulas, Do-Calculate delivers fast, accurate results across dozens of categories like mathematics, pregnancy, chemistry, conversions, and more. Designed for ease and accessibility, it empowers users to make informed decisions in everyday life through smart, reliable tools—all in one place.", // Project description
    projectURL: "https://do-calculate.com/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags:[SiTypescript,FaReact,FaNodeJs,SiExpress,SiMysql,TbApi] , // Tech stack used in the project{}
    date: "Dec 2022 - Jan 2023", // Project duration
    urlImage:"/portfolio/do-calculator.png"
  },
  {
    projectName: "Sleep ALL Night – A Custom WordPress Platform Helping Children Sleep Better", // Project name
    projectDescription: "Sleep ALL Night is a specialized online platform designed to support parents in improving their children’s sleep through expert-backed advice, interactive tools, and educational resources. Built on WordPress with a fully custom theme and sleep calculator plugin, the platform offers a friendly interface and actionable insights. From sleep tracking to personalized plans, it empowers families to identify sleep challenges and create healthier bedtime routines—all in one accessible, visually engaging hub.", // Project description
    projectURL: "https://sleepallnightdfci.org/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags:[FaWordpress,FaReact,SiJavascript,FaCss3Alt,FaPhp,FaHtml5] , // Tech stack used in the project{}
    date: "Nov 2023 - Dec 2022", // Project duration
    urlImage:"/portfolio/sleep-all-night.png"
  },
  
  
  // Add more projects or remove the ones you don't need
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,

};
