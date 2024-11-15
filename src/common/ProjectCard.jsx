import React from "react";
// import styles from "./ProjectCard.module.css"; // create and import styles for ProjectCard

const ProjectCard = ({ title, description, imageUrl, githubLink, liveLink, detailsLink }) => {
  return (
    <div >
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img  src={imageUrl} alt={`${title} Logo`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <h3>Live Link</h3>
      </a>
      <a href={detailsLink} target="_blank" rel="noopener noreferrer">
        <h3>Details</h3>
      </a>
    </div>
  );
};

export default ProjectCard;

