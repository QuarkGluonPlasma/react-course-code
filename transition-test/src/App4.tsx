import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App4.css";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "guang" },
    { id: 2, text: "guang" },
  ]);

  return (
    <div>
      <TransitionGroup className="item-box">
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={1000}>
            <div className="item">
              <span
                className="del-btn"
                onClick={() => {
                  setItems(items.filter((item) => item.id !== id));
                }}
              >
                x
              </span>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

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