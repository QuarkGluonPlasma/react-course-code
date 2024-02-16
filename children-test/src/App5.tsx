import React, { FC } from 'react';

interface RowListProps {
  children?: React.ReactNode
}

const RowList: FC<RowListProps> = (props) => {
  const { children } = props;

  return <div className='row-list'>
    {
      React.Children.map(children, item => {
        return <div className='row'>
          {item}
        </div>
      })
    }
  </div>
}

function App() {
  return <RowList>
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </RowList>
}

export default App;
