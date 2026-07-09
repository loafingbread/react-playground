import React from "react";

function Stopwatch() {
    const { time, pause, start, reset } = useTimer();


    return <div>
        <Clock time={time} />
        <Controls onStart={start} onPause={pause} onReset={reset}/>
    </div>
}


function useTimer(): {
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

function Clock(props: {
    time: number
}) {
    return <div>{props.time.toFixed(2)}</div>
}

function Controls(props: {
    onStart: () => void,
    onPause: () => void
    onReset: () => void
}) {
    return <div>
        <Button buttonText="Start" onClick={props.onStart} />
        <Button buttonText="Pause" onClick={props.onPause} />
        <Button buttonText="Reset" onClick={props.onReset} />

    </div>
}

function Button(props: {
    buttonText: string,
    buttonIcon: string,
    onClick: () => void
}) {
    return <button type="button" onClick={() => props.onClick()}>
        {props.buttonText}
    </button>
}

export default Stopwatch;