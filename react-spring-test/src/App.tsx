import { useSpringValue, animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react';
import './App.css';

export default function App() {
  const width = useSpringValue(0, {
    config: {
      // duration: 2000
      mass: 20,
      friction: 10,
      tension: 400
    }
  });

  useEffect(() => {
    width.start(300);
  }, []);

  return <animated.div className="box" style={{ width }}></animated.div>
}