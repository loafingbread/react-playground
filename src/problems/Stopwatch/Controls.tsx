import React from "react";
import styles from "./Controls.module.css";

export type TimerState = {
  inProgress: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

type ControlsConfig = {
  timer: TimerState;
};

function Controls({ timer }: ControlsConfig) {
  let buttonConfigs: ButtonProps[] = timer.inProgress
    ? [
        { text: "Pause", onClick: timer.onPause, ariaLabel: "Pause" },
        { text: "Reset", onClick: timer.onReset, ariaLabel: "Reset" },
      ]
    : [{ text: "Start", onClick: timer.onStart, ariaLabel: "Start" }];

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
  ariaLabel: string;
};

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={styles["button"]}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
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
