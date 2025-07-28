import { Github, Linkedin } from "lucide-react";

import FrontendDevelopment from "/public/icons/frontend-development.svg";
import BackendDevelopment from "/public/icons/backend-development.svg";
import DatabaseManagement from "/public/icons/database-management.svg";
import DeploymentDevops from "/public/icons/deployment-devops.svg";

import LogoHTML5 from "/public/images/logos/icon-html.svg";
import LogoCSS3 from "/public/images/logos/icon-css.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMySQL from "/public/images/logos/icon-mysql.svg";
import LogoFirestore from "/public/images/logos/icon-firestore.svg";
import LogoRedis from "/public/images/logos/icon-redis.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";
import LogoAWSLight from "/public/images/logos/icon-aws-light.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoGithub from "/public/images/logos/icon-github.svg";
import LogoBitbucket from "/public/images/logos/icon-bitbucket.svg";

import LogoPatoliya from "/public/images/logos/logo-patoliya.svg";
import Logo9DotLight from "/public/images/logos/logo-9dot-light.png";
import LogoVNSGU from "/public/images/logos/logo-vnsgu.png";

import ProjectBest1 from "/public/images/project-best1.png";
import ProjectDiagnosergt from "/public/images/project-diagnosergt.png";
import ProjectHolyreads from "/public/images/project-holyreads.png";

import {
  AchievementsDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  ServiceCard,
} from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/UtsavMavani",
  },
  {
    icon: Linkedin,
    url: "https://in.linkedin.com/in/utsav-mavani-019b05229?trk=public_profile_browsemap",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    label: "Frontend Development",
    logo: FrontendDevelopment,
  },
  {
    label: "Backend Development",
    logo: BackendDevelopment,
  },
  {
    label: "Database Management",
    logo: DatabaseManagement,
  },
  {
    label: "Deployment & DevOps",
    logo: DeploymentDevops,
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "HTML",
    logo: LogoHTML5,
  },
  {
    label: "CSS",
    logo: LogoCSS3,
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
  },
  {
    label: "React.js",
    logo: LogoReact,
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
  },
  {
    label: "Tailwind",
    logo: LogoTailwindcss,
  },

  {
    label: "Node.js",
    logo: LogoNodejs,
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
  },
  {
    label: "MySQL",
    logo: LogoMySQL,
  },
  {
    label: "Firestore",
    logo: LogoFirestore,
  },
  {
    label: "Redis",
    logo: LogoRedis,
  },
  {
    label: "AWS",
    logo: LogoAWS,
    darkModeLogo: LogoAWSLight,
  },
  {
    label: "Git",
    logo: LogoGit,
  },
  {
    label: "Github",
    logo: LogoGithub,
  },
  {
    label: "Bitbucket",
    logo: LogoBitbucket,
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: Logo9DotLight,
    logoAlt: "9Dot Technology logo",
    url: "https://www.9dottechno.com",
    position: "Full Stack Web Developer",
    startDate: new Date(2025, 0),
    currentlyWorkHere: true,
    summary: [
      "At 9 Dot Technology, I am currently enhancing my skills as a MERN Stack Developer by working on real-world web applications and solving complex frontend and backend challenges.",
      "I collaborate closely with cross-functional teams to design intuitive user interfaces, implement robust APIs, and ensure seamless integration across the full stack. This position is helping me deepen my understanding of modern development practices, version control, performance optimization, and deployment workflows.",
    ],
  },
  {
    logo: LogoPatoliya,
    logoAlt: "Patoliya Infotech logo",
    url: "https://www.patoliyainfotech.com",
    position: "Full Stack Web Developer",
    startDate: new Date(2023, 0),
    endDate: new Date(2025, 0),
    summary: [
      "At Patoliya Infotech, I leveraged my MERN stack expertise to develop scalable web applications, contributing to the architecture and deployment of solutions tailored to diverse client needs.",
      "My role involves building scalable applications using MongoDB, Express.js, React.js, and Node.js. This role significantly strengthened my problem-solving abilities, coding standards, and project delivery skills.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Best-1 Cover House",
    description:
      "The purpose of the “Best-1 Cover Ecommerce Store“ is to Store Manager plans and directs the day-to-day operations of the store. Develop strategies to improve customer service, drive store sales, and increase profitability that will increase sales and grow the existing customer base. Maintain high store standards and conditions and foster a positive environment. In this system we have 3 major modules which is Best-1 Admin, Best-1 Manager, and Best-1 User module.",
    url: "https://best1-cover.netlify.app/",
    previewImage: ProjectBest1,
    technologies: [
      "React",
      "Redux",
      "Typescript",
      "React Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Styled Components",
      "Material UI",
    ],
  },
  {
    name: "Diagnoser GT – Laboratory Equipment & Supplies Distributor",
    description:
      "Diagnoser GT is a web-based platform developed for a leading Guatemalan company specializing in the distribution of clinical laboratory equipment and supplies. The project aims to showcase the company’s services, promote high-quality laboratory solutions, and provide information about its mission to support scientific advancement and improved healthcare across Guatemala. The platform was built using Angular for dynamic and responsive UI, Bootstrap for modern and mobile-friendly design, and TypeScript for structured and maintainable code.",
    url: "https://www.diagnosergt.com/",
    previewImage: ProjectDiagnosergt,
    technologies: ["Angular", "Typescript", "Bootstrap"],
  },
  {
    name: "Holy Reads – The World's First Christian Book Summary App",
    description:
      "Holy Reads is a full-stack web application that provides 1000+ summaries of bestselling Christian books in under 20 minutes. Users can read, listen to, or watch content anytime, both online and offline. The frontend was built using Angular, Bootstrap and TypeScript, while0 the backend uses Node.js, Express, MongoDB, and Mongoose. Key features include real-time communication (Socket.io), payment integration (Stripe), task scheduling (Cron), and cloud services via AWS SDK and Firebase Admin.",
    url: "https://www.holyreads.com/",
    previewImage: ProjectHolyreads,
    technologies: [
      "Angular",
      "Bootstrap",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Stripe",
      "Mongoose",
      "Cron",
      "Firebase Admin",
      "AWS SDK",
    ],
  },
];

export const ACHIEVEMENTS: AchievementsDetails = {
  logo: LogoPatoliya,
  logoAlt: "Patoliya Infotech logo",
  title: "Full Stack Web Developer",
  summary: [
    "Awarded for exceptional performance and contribution as a Full Stack Web Developer.",
    "Recognized for technical excellence and consistent growth during my two years at Patoliya Infotech",
  ],
};

export const EDUCATION: ExperienceDetails[] = [
  {
    logo: LogoVNSGU,
    logoAlt: "VNSGU logo",
    position: "Veer Narmad South Gujarat University",
    startDate: new Date(2020, 8),
    endDate: new Date(2023, 1),
    summary: [
      "Bachelor of Computer Application",
      "Having been examined and found qualified for the Degree of Bachelor of Computer Application in the First Class With Distinction in February 2023",
    ],
  },
];
