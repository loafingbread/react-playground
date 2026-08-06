import React from "react";
import styles from "./SecurityCameraPage.module.css";
import { SCNavigation } from "../problems/SecurityCameras";

function SecurityCameraPage() {
  return (
    <div className={styles.securityCameraPageWrapper}>
      <header className={styles.sideBar}>
        <SCNavigation />
      </header>
      <main className={styles.content}></main>
    </div>
  );
}

export default SecurityCameraPage;
