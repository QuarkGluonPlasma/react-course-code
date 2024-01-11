import { useEffect, useState, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };
    const ref = useRef(updateCount);

    ref.current = updateCount;

    useEffect(() => {
        setInterval(() => ref.current(), 1000);
    }, []);

    return <div>{count}</div>;
}

export default App;
