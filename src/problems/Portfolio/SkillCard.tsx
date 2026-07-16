import React from "react";
import styles from "./SkillCard.module.css";

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

export default SkillCard;
