import { useCallback, useState } from 'react';

function Toggle() {

    const [status, setStatus] = useState(false);

    const clickHandler = useCallback(() => {
        // setTimeout(() => {
            setStatus((prevStatus) => !prevStatus);
        // }, 2000);
    }, []);

    return (
        <div>
            <button onClick={clickHandler}>切换</button>
            <p>{status ? 'open' : 'close' }</p>
        </div>
    );
}

export default Toggle;
