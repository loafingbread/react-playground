import React from "react";
import styles from "./Stopwatch.module.css";
import { useTimer } from "./useTimer";
import Clock from "./Clock";
import Controls from "./Controls";

function Stopwatch() {
  const { time, pause, start, reset } = useTimer();

  return (
    <div className={styles.stopwatch}>
      <Clock time={time} />
      <Controls onStart={start} onPause={pause} onReset={reset} />
    </div>
  );
}

export default Stopwatch;
