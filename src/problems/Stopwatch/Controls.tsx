import React from "react";
import styles from "./Stopwatch.module.css";

export type TimerState = {
  inProgress: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

type ControlsConfig = {
  timer: TimerState;
};

function Controls({ timer }: ControlsConfig) {
  let buttonConfigs: ButtonProps[] = timer.inProgress
    ? [
        { text: "Pause", onClick: timer.pause, "aria-label": "Pause" },
        { text: "Reset", onClick: timer.reset, "aria-label": "Reset" },
      ]
    : [{ text: "Start", onClick: timer.start, "aria-label": "Start" }];

  return (
    <div className={styles.controls}>
      {buttonConfigs.map((config) => (
        <Button key={config.text} {...config} />
      ))}
    </div>
  );
}

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
  "aria-label": string;
};

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={styles["controls-buttons"]}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      {props.icon && (
        <span aria-hidden="true" className={styles["button-icon"]}>
          {props.icon}
        </span>
      )}
      <span>{props.text}</span>
    </button>
  );
}

export default Controls;
