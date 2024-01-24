import { useSpring, animated } from '@react-spring/web'
import './App.css';

export default function App() {
  const styles = useSpring({
    from: {
      width: 0,
      height: 0
    },
    to: {
      width: 200,
      height: 200
    },
    config: {
      // duration: 2000
      mass: 2,
      friction: 10,
      tension: 400
    }
  });

  return <animated.div className="box" style={{ ...styles }}></animated.div>
}