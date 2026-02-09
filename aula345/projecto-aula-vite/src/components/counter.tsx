import { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prev => prev + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    const toggleCounter = () => {
        setIsRunning(!isRunning);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={toggleCounter}>
                {isRunning ? "Pause" : "Continue"}
            </button>
        </div>
    );
};

export default Counter; 