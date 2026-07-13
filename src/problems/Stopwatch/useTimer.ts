import React from "react";

export type TimerT = {
  timeMs: number;
  inProgress: boolean;
  pause: () => void;
  start: () => void;
  reset: () => void;
  toggle: () => void;
};

export function useTimer(): TimerT {
  const [timeMs, setTimeMs] = React.useState(0);
  const intervalRef = React.useRef(0);
  const [inProgress, setInProgress] = React.useState(false);
  const startedAt = React.useRef<number | null>(null);
  const accumulated = React.useRef<number>(0);

  const start = React.useCallback(() => {
    // Clear any outstanding timers first
    pause();

    startedAt.current = performance.now();

    intervalRef.current = setInterval(() => {
      if (startedAt.current == null) {
        return;
      }

      setTimeMs(accumulated.current + (performance.now() - startedAt.current));
    }, 10);

    setInProgress(true);
  }, []);

  const pause = React.useCallback(() => {
    clearInterval(intervalRef.current);

    accumulated.current +=
      performance.now() - (startedAt.current ?? performance.now());
    startedAt.current = null;

    setInProgress(false);
  }, []);

  const reset = React.useCallback(() => {
    pause();

    accumulated.current = 0;
    startedAt.current = null;

    setInProgress(false);
    setTimeMs(0);
  }, []);

  const toggle = React.useCallback(() => {
    if (inProgress) {
      pause();
    } else {
      start();
    }
  }, [inProgress, pause, start]);

  React.useEffect(() => {
    return () => pause();
  }, []);

  return {
    timeMs,
    inProgress,
    pause,
    start,
    reset,
    toggle,
  };
}
