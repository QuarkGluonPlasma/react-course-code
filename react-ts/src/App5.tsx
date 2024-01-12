import React, { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

function Ccc() {
    return <div>ccc</div>
}


function App() {

  const obj = useMemo<{ aaa: number}>(() => {
    return {
      aaa: 1
    }
  }, []);

  const fn = useCallback<() => number>(() => {
    return 666;
  }, []);

  return <div>
    <Ccc></Ccc>
  </div>
}

export default App;