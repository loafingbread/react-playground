import React from "react";
import styles from "./Stopwatch.module.css"

function Controls(props: {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}) {
  return (
    <div className={styles.controls}>
      <Button buttonText="Start" onClick={props.onStart} />
      <Button buttonText="Pause" onClick={props.onPause} />
      <Button buttonText="Reset" onClick={props.onReset} />
    </div>
  );
}

function Button(props: {
  buttonText: string;
  buttonIcon: string;
  onClick: () => void;
}) {
  return (
    <button className={styles["controls-buttons"]} type="button" onClick={() => props.onClick()}>
      {props.buttonText}
    </button>
  );
}

export default Controls;
