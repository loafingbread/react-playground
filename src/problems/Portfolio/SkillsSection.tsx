import React from "react";
import styles from "./SkillsSection.module.css";

export type SkillsSectionLayout = "grid" | "list";

export type SkillData = {
  title: string;
  description: string;
  icon: string;
};

export type SkillsSectionProps = {
  layout: SkillsSectionLayout;
  skills: SkillData[];
};

function SkillsSection(props: SkillsSectionProps) {
  return (
    <section
      className={`${styles.skillsSection} ${styles[props.layout]}`}
      aria-label="Skills"
    >
      {props.skills.map((skill) => {
        return (
          <SkillCard
            key={skill.title}
            {...skill}
            variant={props.layout === "grid" ? "vertical" : "horizontal"}
          />
        );
      })}
    </section>
  );
}

type SkillCardVariant = "vertical" | "horizontal";

type SkillCardProps = SkillData & {
  variant: SkillCardVariant;
};

function SkillCard(props: SkillCardProps) {
  return (
    <div className={`${styles.skillCard} ${styles[props.variant]}`}>
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
