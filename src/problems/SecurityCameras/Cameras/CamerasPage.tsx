import React from "react";
import styles from "./CamerasPage.module.css";
import CameraImage1 from "../../../assets/security_cameras/camera_1.jpg";
import CameraImage2 from "../../../assets/security_cameras/camera_2.jpg";
import CameraImage3 from "../../../assets/security_cameras/camera_3.jpg";

type Status = "online" | "offline" | "warning";

type CameraData = {
  id: string;
  name: string;
  image: string;
  status: Status;
  date: Date;
  location: string;
};

function useCameras() {
  const [cameras, setCameras] = React.useState<CameraData[]>([
    {
      id: "1",
      name: "Camera 1",
      image: CameraImage1,
      status: "online",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "2",
      name: "Camera 2",
      image: CameraImage2,
      status: "offline",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "3",
      name: "Camera 3",
      image: CameraImage3,
      status: "warning",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "4",
      name: "Camera 4",
      image: CameraImage1,
      status: "online",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "5",
      name: "Camera 5",
      image: CameraImage2,
      status: "offline",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "6",
      name: "Camera 6",
      image: CameraImage3,
      status: "warning",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "7",
      name: "Camera 7",
      image: CameraImage1,
      status: "online",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
    {
      id: "8",
      name: "Camera 8",
      image: CameraImage2,
      status: "offline",
      date: new Date(Date.now()),
      location: "Bay Area",
    },
  ]);

  return {
    cameras,
  };
}

function Camera(props: CameraData) {
  return (
    <article className={styles.camera} aria-label="camera">
      <img className={styles.cameraImage} src={props.image} alt="camera" />
      <div className={styles.cameraOverlay}>
        <div className={styles.cameraStatus}>{props.status}</div>
        <div className={styles.cameraName}>{props.name}</div>
        <div className={styles.cameraDate}>{props.date.toDateString()}</div>
      </div>
    </article>
  );
}

function CamerasPage() {
  const { cameras } = useCameras();

  return (
    <div className={styles.camerasPageWrapper}>
      <section className={styles.camerasSection} aria-label="Cameras Section">
        <h3 className={styles.camerasSectionTitle}>Bay Area</h3>
        <div className={styles.camerasGrid}>
          {cameras.map((camera) => {
            return <Camera key={camera.id} {...camera} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default CamerasPage;
