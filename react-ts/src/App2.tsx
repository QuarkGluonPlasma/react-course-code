import React, { useEffect, useRef, useState } from "react";

function Ccc() {
    const [num, setNum] = useState<number>();

    const ref = useRef<HTMLDivElement>(null);

    return <div ref={ref}>ccc</div>
}

function App() {
  return <div>
    <Ccc></Ccc>
  </div>
}

export default App;