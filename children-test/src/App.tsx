import React, { FC } from 'react';

interface AaaProps {
  children: React.ReactNode
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;

  return <div className='container'>
    {
      React.Children.map(children, (item) => {
        return <div className='item'>{item}</div>
      })
    }
  </div>
}

function App() {
  return <Aaa>
    <a href="#">111</a>
    <a href="#">222</a>
    <a href="#">333</a>
  </Aaa>
}

export default App;
