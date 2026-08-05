import React from "react";
import styles from "./HeaderSection.module.css";
import HeaderImage from "../../assets/portfolio/HeaderImage.png";
import Arrow3 from "../../assets/portfolio/Arrow_3.svg";
import Arrow4 from "../../assets/portfolio/Arrow_4.svg";
import Rect12 from "../../assets/portfolio/Rectangle_12.svg";
import Rect14 from "../../assets/portfolio/Rectangle_14.svg";

function HeaderSection() {
  return (
    <div className="container">
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
          <button className={styles.contactButton} type="button">
            Contact
          </button>
        </div>
        <img
          className={styles.profilePhoto}
          src={HeaderImage}
          alt="Photo"
          height={360}
        />
      </section>
    </div>
  );
}

export function HeaderSectionAlt() {
  return (
    <div className="container">
      <section
        className={`${styles.headerSection} ${styles.alt}`}
        aria-label="Header"
      >
        <div className={styles.verticalBorder}>
          <img className={styles.imageArrow} src={Arrow3} alt="Arrow" />
          <img className={styles.imageRect} src={Rect12} alt="Rectangle" />
        </div>
        <div className={styles.intro}>
          <div className={styles.introSubSection}>
            <p className={styles.caption}>Branding | Image making</p>
            <h1>Visual Designer</h1>
            <p className={styles.description}>
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
          <button className={styles.contactButton} type="button">
            Contact
          </button>
        </div>
        <div className={styles.verticalBorder}>
          <img className={styles.imageRect} src={Rect14} alt="Rectangle" />
          <img className={styles.imageArrow} src={Arrow4} alt="Arrow" />
        </div>
      </section>
    </div>
  );
}

export default HeaderSection;
