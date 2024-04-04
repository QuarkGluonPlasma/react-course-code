import { FC, PropsWithChildren, createContext, memo, useCallback, useContext, useState } from "react";

interface CounterContext {
  aaa: number;
  bbb: number;
  setAaa: (aaa: number) => void;
  setBbb: (bbb: number) => void;
}

const context = createContext<CounterContext>({
  aaa: 0,
  bbb: 0,
  setAaa: () => {},
  setBbb: () => {}
});

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [aaa, setAaa] = useState(0);
  const [bbb, setBbb] = useState(0);

  return (
    <context.Provider
      value={{
        aaa,
        bbb,
        setAaa,
        setBbb
      }}
    >
      {children}
    </context.Provider>
  );
};

const App = () => (
  <Provider>
    <WrappedAaa />
    <WrappedBbb />
  </Provider>
);

const WrappedAaa = () => {
  const { aaa, setAaa } = useContext(context);

  return <Aaa aaa={aaa} setAaa={setAaa}/>
};

interface AaaProps {
  aaa: number;
  setAaa: (aaa: number) => void
}

const Aaa = memo((props: AaaProps) => {
  const { aaa, setAaa } = props;

  console.log('Aaa render...')

  return <div>
    aaa: {aaa}
    <button onClick={() => setAaa(aaa + 1)}>加一</button>
  </div>
});

const WrappedBbb = () => {
  const { bbb, setBbb } = useContext(context);
    
  return <Bbb bbb={bbb} setBbb={setBbb}/>
};

interface BbbProps {
  bbb: number;
  setBbb: (bbb: number) => void
}

const Bbb = memo((props: BbbProps) => {
  const { bbb, setBbb } = props;

  console.log("Bbb render...");

  return <div>
    bbb: {bbb}
    <button onClick={() => setBbb(bbb + 1)}>加一</button>
  </div>
})

export default App;
