import React, { FC, useEffect } from 'react';

interface AaaProps {
  children: React.ReactNode
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;

  useEffect(() => {
    const count = React.Children.count(children);
  
    console.log('count', count);
    
    React.Children.forEach(children, (item, index) => {
      console.log('item' + index, item);
    });
  
    const first = React.Children.only(children);
    console.log('first', first);
  }, []);

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
