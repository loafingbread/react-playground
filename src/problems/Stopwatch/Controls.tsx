import React, { type JSX } from "react";
import styles from "./Stopwatch.module.css";

function Controls(props: {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}) {
  const [inProgress, setInProgress] = React.useState(false);

  const onStart = () => {
    props.onStart();
    setInProgress(true);
  };

  const onReset = () => {
    props.onReset();
    props.onPause();
    setInProgress(false);
  };

  let buttons: React.ReactNode[] = [];
  if (!inProgress) {
    buttons.push([<Button buttonText="Start" onClick={onStart} />]);
  } else {
    buttons.push([
      <Button buttonText="Pause" onClick={props.onPause} />,
      <Button buttonText="Reset" onClick={onReset} />,
    ]);
  }

  return <div className={styles.controls}>{buttons}</div>;
}

function Button(props: {
  buttonText: string;
  buttonIcon?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={styles["controls-buttons"]}
      type="button"
      onClick={() => props.onClick()}
    >
      {props.buttonText}
    </button>
  );
}

export default Controls;
