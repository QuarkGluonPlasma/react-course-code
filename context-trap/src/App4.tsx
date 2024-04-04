import { create } from 'zustand'

type State = {
  aaa: number
  bbb: number
}

type Action = {
  setAaa: (aaa: State['aaa']) => void
  setBbb: (bbb: State['bbb']) => void
}

const useStore = create<State & Action>((set) => ({
  aaa: 0,
  bbb: 0,
  setAaa: (aaa) => set(() => ({ aaa })),
  setBbb: (bbb) => set(() => ({ bbb })),
}))


const App = () => (
  <div>
    <Aaa />
    <Bbb />
  </div>
);

const Aaa = () => {
  const aaa = useStore((state) => state.aaa);
  const setAaa = useStore(state => state.setAaa);
  
  console.log('Aaa render...')

  return <div>
    aaa: {aaa}
    <button onClick={() => setAaa(aaa + 1)}>加一</button>
  </div>;
};

const Bbb = () => {
  const bbb = useStore((state) => state.bbb);
  const setBbb = useStore(state => state.setBbb);
  
  console.log("Bbb render...");
  
  return <div>
    bbb: {bbb}
    <button onClick={() => setBbb(bbb + 1)}>加一</button>
  </div>;
};

export default App;
