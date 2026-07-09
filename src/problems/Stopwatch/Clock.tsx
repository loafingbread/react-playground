import React from "react";
import styles from "./Stopwatch.module.css";

function Clock(props: { time: number }) {
  return <div className={`${styles.clock} ${styles.time}`}>{props.time.toFixed(2)}</div>;
}

export default Clock;
