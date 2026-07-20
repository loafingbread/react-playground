import React from "react";
import styles from "./PortfolioTemplate.module.css";
import HeaderImage from "../assets/HeaderImage_1.png";
import UserImage from "../assets/portfolio/User_Image.png";
import Skill_Icon from "../assets/portfolio/Skill_Icon.svg";
import Skill_Icon_2 from "../assets/portfolio/Skill_Icon_2.svg";
import Skill_Icon_3 from "../assets/portfolio/Skill_Icon_3.svg";
import Skill_Icon_4 from "../assets/portfolio/Skill_Icon_4.svg";
import ProjectImage from "../assets/portfolio/Project.png";
import ProjectImage_2 from "../assets/portfolio/Project_2.png";
import ProjectImage_3 from "../assets/portfolio/Project_3.png";
import ProjectImage_4 from "../assets/portfolio/Project_4.png";
import ProjectImage_5 from "../assets/portfolio/Project_5.png";
import ProjectImage_6 from "../assets/portfolio/Project_6.png";
import {
  SkillsSection,
  TestimonialSection,
  WorkSection,
} from "../problems/Portfolio";

function PortfolioTemplate() {
  return (
    <main className={styles.portfolio}>
      <SkillsSection
        layout="grid"
        skills={[
          {
            icon: Skill_Icon,
            title: "Product Design",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_2,
            title: "Visual Design",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_3,
            title: "Art Direction",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_4,
            title: "UI/UX",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
        ]}
      />
      <SkillsSection
        layout="list"
        skills={[
          {
            icon: Skill_Icon,
            title: "Product Design",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_2,
            title: "Visual Design",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_3,
            title: "Art Direction",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            icon: Skill_Icon_4,
            title: "UI/UX",
            description:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
        ]}
      />
      <WorkSection
        title="Latest work"
        projects={[
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage,
          },
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage_2,
          },
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage_3,
          },
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage_4,
          },
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage_5,
          },
          {
            title: "Project title",
            description: "UI, Art direction",
            image: ProjectImage_6,
          },
        ]}
      />
      <TestimonialSection
        title="Testimonial"
        testimonials={[
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
          {
            name: "Gemma Nolan",
            image: UserImage,
            affiliation: "Google",
            rating: 5,
            review:
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
          },
        ]}
      />
    </main>
    // <main className={styles["portfolio"]}>
    //   <nav className={styles["nav"]}>
    //     <ul className={styles["nav__links"]}>
    //       <li className={styles["nav__link"]}>
    //         <a href="#">Branding</a>
    //       </li>
    //       <li className={styles["nav__link"]}>
    //         <a href="#">Image making</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <section className={styles["hero"]}>
    //     <div className={styles["hero__contact-us"]}>
    //       <h1>Visual Designer</h1>
    //       <div
    //         style={{
    //           "margin-bottom": "3rem",
    //         }}
    //       >
    //         <p>This is a template Figma file, turned into code using Anima</p>
    //         <p>Learn more at AnimaApp.com</p>
    //       </div>
    //       <div>
    //         <button
    //           type="button"
    //           className={styles["hero__contact-us__button"]}
    //         >
    //           Contact
    //         </button>
    //       </div>
    //     </div>
    //     <div className={styles["hero__portrait"]}>
    //       <img src={HeaderImage} className={styles["hero__image"]} />
    //     </div>
    //   </section>
    //   <section className={styles["my-work"]}>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //     <div className={styles["my-work__image"]}>
    //       <img src={Rectangle_1181} />
    //     </div>
    //   </section>
    // </main>
  );
}

export default PortfolioTemplate;
