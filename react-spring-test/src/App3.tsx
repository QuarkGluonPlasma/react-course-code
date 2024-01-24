import { useSpring, animated } from '@react-spring/web'
import './App.css';

export default function App() {
  const [styles, api] = useSpring(() => {
    return {
      from: {
        width: 100,
        height: 100
      },
      config: {
        // duration: 2000
        mass: 2,
        friction: 10,
        tension: 400
      }
    }
  });

  function clickHandler() {
    api.start({
      width: 200,
      height: 200
    });
  }

  return <animated.div className="box" style={{ ...styles }} onClick={clickHandler}></animated.div>
}