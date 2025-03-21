import React from "react";
import styles from "./ProjectsStyles.module.css";
// import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";

const projectData = [
  {
    title: "NetFlix-GPT",
    description: "Movie App",
    imageUrl: viberr,
    githubLink: "https://github.com/4soumya9/netflix_GPT2",
    // liveLink: "https://netflix-gpt-2-delta.vercel.app/",
    liveLink: " https://netflix-gpt-2-theta.vercel.app/",
    // https://netflix-gpt-2-theta.vercel.app/
    detailsLink:
      "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_reactjs-tailwindcss-firebase-activity-7231030340021104641-1QWm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
  },
  // Add more project objects as needed
  {
    title: "Food Ordering App",
    description: "Food Ordering App using React",
    imageUrl: viberr,
    githubLink: "https://github.com/4soumya9/Swiggy-Food-Ordering-App",
    liveLink: "https://swiggy-food-ordering-app.vercel.app/",
    detailsLink:
      "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_frontend-reactjs-javascript-activity-7258917571242962944-bh1F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
  },
  {
    title: "Memory Game",
    description: "Memory Game using React",
    imageUrl: viberr,
    githubLink: "https://github.com/4soumya9/memory-game",
    liveLink: "https://memory-game-smoky-one.vercel.app/",
    detailsLink:
      "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_frontend-reactjs-javascript-activity-7257017263461933056-IoxB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
  },
  {
    title: "Notes ",
    description: "Notes saving app using React Js",
    imageUrl: viberr,
    githubLink: "https://github.com/4soumya9/notess",
    liveLink: "https://notess-eta.vercel.app/",
    detailsLink:
      "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_frontend-reactjs-javascript-activity-7263009731319914496-RejK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
  },
  // {
  //   title: "Viberr",
  //   description: "Streaming App",
  //   imageUrl: viberr,
  //   githubLink: "https://github.com/Ade-mir/harris-johnsen-2/tree/main",
  //   liveLink: "https://netflix-gpt-2-delta.vercel.app/",
  //   detailsLink: "https://www.linkedin.com/posts/soumyajit-saha-9b4186191_frontend-reactjs-javascript-activity-7258917571242962944-NPoc?utm_source=share&utm_medium=member_desktop"
  // },
];
const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          detailsLink={project.detailsLink}
        />
      ))}
    </div>
  );
};
export default Projects;
