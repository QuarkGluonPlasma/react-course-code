import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SlideInOverlay } from "./SlideInOverlay";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        开启
      </button>
      <SlideInOverlay
        isVisible={show}
        from="bottom"
        className={"guangguang"}
        style={{
          border: "2px solid #000",
        }}
        onEnter={() => {
          alert("entered");
        }}
        onExit={() => {
          alert("exited");
        }}
      >
        <div>
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            关闭
          </button>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </SlideInOverlay>
    </>
  );
}

export default App;
