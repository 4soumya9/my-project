import React from "react";
import styles from "./SkillsStyles.module.css";
// import checkMarkIcon from "../../assets/checkMarkIcon";
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import { useTheme } from '../common/ThemeContext';
import SkillList from "../common/SkillList";


const Skills = () => {

    const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skillsData = [
    { skillName: "REACT", icon: checkMarkIcon },
    { skillName: "JavaScript", icon: checkMarkIcon },
    { skillName: "HTML", icon: checkMarkIcon },
    { skillName: "CSS", icon: checkMarkIcon },
    { skillName: "Tailwind CSS", icon: checkMarkIcon },
    
    { skillName: "Redux", icon: checkMarkIcon },
    { skillName: "Java", icon: checkMarkIcon },
    { skillName: "SQL", icon: checkMarkIcon },
    // { skillName: "Java", icon: checkMarkIcon },
    // Add more skills as needed
  ];
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {skillsData.map((skill, index) => (
          <SkillList key={index} icon={skill.icon} skillName={skill.skillName} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
