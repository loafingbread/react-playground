import React from "react";
import styles from "./Stopwatch.module.css";

function formatTime(ms: number): string {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${pad(m)}:${pad(s)}.${pad(cs)}`;
}

const pad = (n: number) => String(n).padStart(2, "0");
// output: "01:23.45"

function Clock(props: { timeMs: number; onClick: () => void }) {
  const formattedTime: string = formatTime(props.timeMs);

  return (
    <time
      dateTime={`PT${Math.floor(props.timeMs / 1000)}S`}
      onClick={props.onClick}
      className={`${styles.clock} ${styles.time}`}
      role="timer"
      aria-live="off" // don't announce every tick
      aria-label={`Elapsed time: ${formattedTime}`}
    >
      {formattedTime}
    </time>
  );
}

export default Clock;
