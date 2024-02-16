import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App3.css';
 
function App() {
  const [flag, setFlag] = useState(true);

  return <div>
    <CSSTransition
      in={flag}
      appear={true}
      timeout={1000}
    >
      <div id="box"></div>
    </CSSTransition>
    <button onClick={() => setFlag(!flag)}>{!flag ?  '进入' : '离开'}</button>
  </div>
}

export default App;