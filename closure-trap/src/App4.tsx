import { useEffect, useState, useRef } from 'react';

function useInterval(fn: Function, time: number) {
    const ref = useRef(fn);
    ref.current = fn;

    let cleanUpFn: Function;

    useEffect(() => {
        const timer = setInterval(() => ref.current(), time);

        cleanUpFn = ()=> {
            clearInterval(timer);
        }
    }, []);

    return () => {
        cleanUpFn();
    }
}

function App() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };

    useInterval(updateCount, 1000);

    return <div>{count}</div>;
}

export default App;
