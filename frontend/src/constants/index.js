import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import SnakeGame from "../assets/projects/SnakeGame.jpg";
import SmartSummarizer from "../assets/projects/SmartSummarizer.png";

export const HERO_CONTENT = `A dedicated Computer Science major with a passion for technology and innovation, I bring expertise in both Full Stack Web Development and AI/ML Engineering. I excel at creating robust, dynamic web applications, from seamless user interfaces to powerful back-end architectures. Leveraging data, I design and implement intelligent solutions that solve complex problems. My goal is to merge my skills in web development and artificial intelligence to push the boundaries of technology and deliver impactful solutions. Let's connect and create something extraordinary together!`;

export const ABOUT_TEXT = `With a solid foundation in the MERN stack (MongoDB, Express.js, React, and Node.js), I excel at creating dynamic and responsive web applications. My proficiency extends to deploying and managing projects using Vercel, ensuring seamless and scalable deployments. I possess extensive experience with various databases, which enables me to design and manage efficient data architectures. Familiarity with Version Control Systems (VCS) like Git equips me with the skills to maintain code quality and manage collaborative projects effectively.\n\nBeyond my technical expertise, I am a dedicated team player known for my strong communication and problem-solving abilities, making me a valuable asset in collaborative environments. My interpersonal skills and enthusiasm for continuous learning drive me to keep up with emerging technologies and deliver innovative solutions. Additionally, I have a keen eye for detail and a passion for coding best practices, which ensures that my code is not only functional but also maintainable and scalable.\n\nI am also adept at adapting to new tools and technologies, constantly seeking to expand my knowledge base and apply new techniques to enhance my work. Whether working on front-end interfaces or back-end services, I am committed to delivering high-quality, user-centric solutions that exceed expectations. My dedication to professional growth and my ability to stay current with industry trends make me a versatile and forward-thinking developer.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Bachelors in CS and Engineering",
    company: "CVR College of Engineering",
    description: `Hav a CGPA of 9.0 and part of a team in developing and conducting various quiz events as a part of the LDC(Literary and Debate Club). Learnt many technical and non-technical skills through projects , seminars and tests under the guidance of our professors.`,
    technologies: ["Leadership", "Technical", "Non-Technical", "Engineering"],
  },
  {
    year: "2020 - 2022",
    role: "Intermediate in Maths , Physics and Chemistry",
    company: "Narayana Jr. College",
    description: `Passed out with 94.5 % .Studied various topics of the above subjects in depth with deep theoretical and practical understanding while preparing for various engineering entrance examinations.`,
    technologies: ["Maths", "Physics", "Chemistry"],
  },
  {
    year: "2008 - 2020",
    role: "Indian Certificate of Secondary Education",
    company: "St.Joseph's School",
    description: `Passed out with 91% . Leant the foundational skills of various subjects.Extensively represented the school in events like Chess Tournaments and Quiz competitions.`,
    technologies: ["ICSE", "Olympiad", "Sports", "Quiz"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Summarizer",
    image: SmartSummarizer,
    description:
      "An AI-based chrome extension to get an instant summary using a keyboard shortcut . Built for MLH Hack for Hacks with international collaboration. ",
    technologies: ["Chrome Dev Tools", "HTML", "CSS", "JS", "AI"],
    link: "https://devpost.com/software/smartsummarizer",
  },
  {
    title: "Falculty Information System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking for Faculty of an instituition.",
    technologies: ["HTML", "CSS", "Python", "Flask"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Snake Game",
    image: SnakeGame,
    description:
      "A simple game similar to snake xenia which you can play for fun to score some points with features to maintain user state.",
    technologies: ["HTML", "CSS", "Vanilla JS", "Git"],
    link: "https://devtejasrinivas.github.io/snakegame/",
  },
];

export const CONTACT = {
  address: "📍Hyderabad , India 🇮🇳 ",
  phoneNo: "+91 -7288990005",
  email: "tejasrinivassjps@gmail.com",
};

export const profile_links = {
  linkedin: "https://www.linkedin.com/in/tejamajari",
  github: "https://www.github.com/devTejaSrinivas",
  instagram: "https://www.instagram.com/dev._.tej/#",
  twitter: "https://www.x.com/Dev_Teja",
};
