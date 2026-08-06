import React from "react";
import styles from "./SecurityCameraPage.module.css";
import { SCNavigation } from "../problems/SecurityCameras";
import { Outlet } from "react-router";

function SecurityCameraPage() {
  return (
    <div className={styles.securityCameraPageWrapper}>
      <header className={styles.sideBar}>
        <SCNavigation />
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default SecurityCameraPage;
