import React from "react";
import styles from "./HeaderSection.module.css";
import HeaderImage from "../../assets/portfolio/HeaderImage.png";

function HeaderSection() {
  return (
    <section className={styles.headerSection} aria-label="Header">
      <div className={styles.intro}>
        <div className={styles.introSubSection}>
          <p className={styles.caption}>Branding | Image making</p>
          <h1>Visual Designer</h1>
          <p className={styles.description}>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <button type="button">Contact</button>
      </div>
      <img src={HeaderImage} alt="Photo" height={360} />
    </section>
  );
}

export default HeaderSection;
