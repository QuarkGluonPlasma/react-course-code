import React, { FC, PropsWithChildren } from 'react';

const Row: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className='row'>
    {children}
  </div>
}

const RowList: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <div className='row-list'>
    {children}
  </div>
}

function App() {
  return <RowList>
    <Row>
      <div>111</div>
    </Row>
    <Row>
      <div>222</div>
    </Row>
    <Row>
      <div>333</div>
    </Row>
  </RowList>
}

export default App;
