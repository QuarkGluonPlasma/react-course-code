import React, { useState, CSSProperties } from 'react'
import { useTransition, animated, AnimatedProps } from '@react-spring/web'

import './App.css';

interface PageItem {
  (props: AnimatedProps<{ style: CSSProperties }>): React.ReactElement
}

const pages: Array<PageItem> = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function App() {
  const [index, set] = useState(0);

  const onClick = () => set(state => (state + 1) % 3);

  const transitions = useTransition(index, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
  })

  return (
    <div className='container' onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
