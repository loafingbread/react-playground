import React from "react";
import styles from "./LogoBar.module.css";
import LogoAdidas from "../../assets/portfolio/Logo_Adidas.svg";
import LogoApple from "../../assets/portfolio/Logo_Apple.svg";
import LogoGoogle from "../../assets/portfolio/Logo_Google.svg";
import LogoNike from "../../assets/portfolio/Logo_Nike.svg";
import LogoSamsung from "../../assets/portfolio/Logo_Samsung.svg";

function LogoBar() {
  return (
    <div className="container">
      <ul className={styles.logoBar} aria-label="Sponsors">
        <li>
          <img src={LogoGoogle} alt="Google" height={40} />
        </li>
        <li>
          <img src={LogoNike} alt="Nike" height={40} />
        </li>
        <li>
          <img src={LogoSamsung} alt="Samsung" height={40} />
        </li>
        <li>
          <img src={LogoApple} alt="Apple" height={40} />
        </li>
        <li>
          <img src={LogoAdidas} alt="Adidas" height={40} />
        </li>
      </ul>
    </div>
  );
}

export default LogoBar;
