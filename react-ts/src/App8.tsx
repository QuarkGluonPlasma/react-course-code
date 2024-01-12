import React, { HTMLAttributes } from "react";

interface CccProps extends HTMLAttributes<HTMLDivElement>{
  
} 

function Ccc(props: CccProps) {
  return <div>ccc</div>
}

function App() {

  return <div>
    <Ccc onClick={(e) => {}}>
      <button>7777</button>
    </Ccc>
  </div>
}

export default App;