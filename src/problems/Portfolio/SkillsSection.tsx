import React from "react";
import styles from "./SkillsSection.module.css";

export type SkillsSectionProps = {
  skills: SkillCardProps[];
};

function SkillsSection(props: SkillsSectionProps) {
  return (
    <div className={styles.skillsSection}>
      {props.skills.map((skill) => {
        return <SkillCard key={skill.title} {...skill} />;
      })}
    </div>
  );
}

type SkillCardProps = {
  title: string;
  description: string;
  icon: string;
};

function SkillCard(props: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
      <img
        className={styles.icon}
        src={props.icon}
        width={124}
        height={124}
        alt=""
      />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default SkillsSection;
