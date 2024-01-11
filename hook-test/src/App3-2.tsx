import { useState } from "react";

function App() {
  const [res, setRes] = useState({ result: 0});

  return (
    <div>
        <div onClick={() => setRes({ result: res.result + 2 })}>加</div>
        <div onClick={() => setRes({ result: res.result - 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}

export default App;
