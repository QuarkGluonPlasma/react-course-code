import React, { FC } from 'react';

interface AaaProps {
  // children: React.ReactNode[]
  children: React.ReactNode
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;

  const arr = React.Children.toArray(children);
  
  console.log(arr.sort());

  return <div className='container'>
  </div>
}

function App() {
  return <Aaa>
    {33}
    <span>hello world</span>
    {22}
    {11}
  </Aaa>
}

export default App;
