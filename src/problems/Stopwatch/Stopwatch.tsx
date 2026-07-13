import React from "react";
import styles from "./Stopwatch.module.css";
import { useTimer } from "./useTimer";
import Clock from "./Clock";
import Controls from "./Controls";

function Stopwatch() {
  const { timeMs, pause, start, reset, inProgress } = useTimer();

  return (
    <div className={styles.stopwatch}>
      <Clock timeMs={timeMs} />
      <Controls
        timer={{
          pause,
          start,
          reset,
          inProgress,
        }}
      />
    </div>
  );
}

export default Stopwatch;
