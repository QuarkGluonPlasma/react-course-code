import { animated, useTrail } from '@react-spring/web'
import './App.css';
import { useEffect } from 'react';

export default function App() {
  const [springs, api] = useTrail(
    3,
    () => ({
      from: { width: 0 },
      config: {
        duration: 1000
      }
    })
  )

  useEffect(() => {
    api.start({ width: 300 });
  }, [])

  return <div>
    {springs.map(styles => (
      <animated.div style={styles} className='box'></animated.div>
    ))}
  </div>
}