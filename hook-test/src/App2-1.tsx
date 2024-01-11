import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log('clean up')
      clearInterval(timer);
    }
  }, [num]);

  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  );
}

export default App;
