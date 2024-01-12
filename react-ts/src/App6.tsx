import React, { ComponentProps, PropsWithChildren, ReactElement, ReactNode } from "react";

type CccProps = PropsWithChildren<{
  content: ReactNode,
}>

function Ccc(props: CccProps) {
  return <div>ccc,{props.content}{props.children}</div>
}

function App() {

  return <div>
    <Ccc content={<div>666</div>}>
      <button>7777</button>
    </Ccc>
  </div>
}

export default App;