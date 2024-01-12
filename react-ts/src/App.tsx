import React, { forwardRef } from "react";

interface AaaProps {
  name: string;
  content: React.ReactNode
}

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return <div>aaa, {props.name}{props.content}</div>
}

function Aaa2(props: AaaProps) {
  return <div>aaa, {props.name}{props.content}</div>
}

const content: React.ReactElement = <div>aaa</div>

function App() {
  return <div>
    <Aaa name="guang" content={123}></Aaa>
  </div>
}

export default App;