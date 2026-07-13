import React from "react";
import styles from "./Stopwatch.module.css";
import { useTimer, type TimerT } from "./useTimer";
import Clock from "./Clock";
import Controls from "./Controls";

interface StopwatchStyle extends React.CSSProperties {
  "--surface-bg"?: string;
  "--on-surface"?: string;
  "--button-bg"?: string;
  "--button-bg-hover"?: string;
}

function Stopwatch(props: { style: StopwatchStyle }) {
  const timer: TimerT = useTimer();

  return (
    <div className={styles.stopwatch} style={props.style}>
      <Clock timeMs={timer.timeMs} onClick={timer.toggle} />
      <Controls
        timer={{
          inProgress: timer.inProgress,
          onStart: timer.start,
          onPause: timer.pause,
          onReset: timer.reset,
        }}
      />
    </div>
  );
}

export default Stopwatch;
