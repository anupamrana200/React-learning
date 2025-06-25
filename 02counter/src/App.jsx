import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  
//its the hooks  
let [counter, setCounter] = useState(0) 


// let counter = 0;
function addValue(){
  if(counter < 10){
    counter += 1;
    setCounter(counter)
  } 
}

const removeValue = () => {
  if(counter > 0)
    counter -= 1;
    setCounter(counter)
}



  return (
    <>
    <h1>Counting Fun</h1>
    <h2>Count: {counter}</h2>
    <button onClick={addValue}>Increase {counter}</button>
    <br />
    <button onClick={removeValue}>decrease {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
