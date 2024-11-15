import React from "react";
import styles from "./SkillListStyles.module.css";


const SkillList = ({ icon, skillName }) => {
  return (
    <div className={styles.skillCard}>
      <img src={icon} alt={`${skillName} Icon`} className={styles.icon} />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillList;
