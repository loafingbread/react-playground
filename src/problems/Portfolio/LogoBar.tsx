import React from "react";
import styles from "./LogoBar.module.css";
import LogoAdidas from "../../assets/portfolio/Logo_Adidas.svg";
import LogoApple from "../../assets/portfolio/Logo_Apple.svg";
import LogoGoogle from "../../assets/portfolio/Logo_Google.svg";
import LogoNike from "../../assets/portfolio/Logo_Nike.svg";
import LogoSamsung from "../../assets/portfolio/Logo_Samsung.svg";

function LogoBar() {
  return (
    <section className={styles.logoBar} aria-label="Logo Bar">
      <img className={styles.logo} src={LogoGoogle} alt="Google" />
      <img className={styles.logo} src={LogoNike} alt="Nike" />
      <img className={styles.logo} src={LogoSamsung} alt="Samsung" />
      <img className={styles.logo} src={LogoApple} alt="Apple" />
      <img className={styles.logo} src={LogoAdidas} alt="Adidas" />
    </section>
  );
}

export default LogoBar;
