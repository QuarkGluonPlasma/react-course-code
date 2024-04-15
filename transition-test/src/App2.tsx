import React, { useState } from "react";
import "./App2.css";
import { useTransition, animated } from '@react-spring/web'

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "guang" },
    { id: 2, text: "guang" },
  ]);

  const transitions = useTransition(items, {
    initial: { transform: 'translate3d(0%,0,0)', opacity: 1 },
    from: { transform: 'translate3d(100%,0,0)', opacity: 0 },
    enter: { transform: 'translate3d(0%,0,0)', opacity: 1 },
    leave: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
    keys: items.map(item => item.id)
  });

  return (
    <div>
      <div className="item-box">
        {transitions((style, i) => {
          return <animated.div className="item" style={style}>
            <span
              className="del-btn"
              onClick={() => {
                setItems(items.filter((item) => item.id !== i.id));
              }}
            >
              x
            </span>
            {i.text}
          </animated.div>
        })}
      </div>

      <div
        className="btn"
        onClick={() => {
          setItems([...items, { id: Date.now(), text:  'guang' }]);
        }}
      >
        Add
      </div>
    </div>
  );
}
