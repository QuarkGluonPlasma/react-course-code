import { ChangeEvent, useState } from "react"

function App() {

  const [value, setValue] = useState('guang');

  console.log('render..')

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.target.value);
    setValue(event.target.value);
  }

  return <input value={value} onChange={onChange}/>
}

export default App
