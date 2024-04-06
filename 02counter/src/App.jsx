import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    // console.log(counter);
    if (counter != 20) {           // (counter < 20)
      counter = counter +  1
      setCounter(counter) 
      // setCounter(counter + 1)
    }
  }
  
  const removeValue = () => {  
    if (counter != 0) {
      setCounter(counter - 1) 
    }
  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add values {counter}</button>
      <br />

      <button
      onClick={removeValue}
      >remove values {counter}</button>
      <p>Counter is : {counter} </p>
    </>
  )
}

export default App
