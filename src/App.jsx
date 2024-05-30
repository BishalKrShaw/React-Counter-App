
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Bishal aur React | {counter}</h1>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>Add Button</button>
      <button onClick={removeValue}>Remove Button</button>
    </>
  )
}

export default App
