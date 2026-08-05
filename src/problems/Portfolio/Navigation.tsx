import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className="container">
      <nav className={styles.navigation} aria-label="Navigation Bar">
        <div className={styles.left}>
          <a className={styles.navHome} href="#">
            Logo
          </a>
        </div>
        <div className={styles.right}>
          <a className={styles.navLink} href="#">
            About
          </a>
          <a className={styles.navLink} href="#">
            Work
          </a>
          <a className={styles.navLink} href="#">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
