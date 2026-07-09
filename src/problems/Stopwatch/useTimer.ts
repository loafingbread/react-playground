import React from "react";

export function useTimer(): {
    time: number,
    pause: () => void,
    start: () => void,
    reset: () => void
} {
    const [time, setTime] = React.useState(0);
    const intervalRef = React.useRef(0);

    const start = (): number => {
        pause();

        intervalRef.current = setInterval(
            () => {
                setTime((currentTime: number) => {
                    return currentTime + 1
                });
            },
            1000
        );

        return intervalRef.current;
    }

    const pause = (newIntervalId?: number) => {
        clearInterval(newIntervalId || intervalRef.current);
    }

    React.useEffect(() => {
        start();

        return () => {
            pause();
        }
    }, [])

    return {
        time,
        pause: () => pause(),
        start: () => start(),
        reset: () => setTime(0)
    }
}
