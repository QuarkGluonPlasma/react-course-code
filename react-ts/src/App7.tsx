import React, { CSSProperties, PropsWithChildren, ReactNode } from "react";

type CccProps = PropsWithChildren<{
  content: ReactNode,
  color: CSSProperties['color'],
  styles?: CSSProperties
}>

function Ccc(props: CccProps) {
  return <div>ccc,{props.content}{props.children}</div>
}

function App() {

  return <div>
    <Ccc content={<div>666</div>} color="yellow" styles={{
      backgroundColor: 'blue'
    }}>
      <button>7777</button>
    </Ccc>
  </div>
}

export default App;