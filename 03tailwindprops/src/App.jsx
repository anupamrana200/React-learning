import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    userName: "Anupam",
    age: "23"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-2xl mb-4'>Tailwind testing</h1>
      <Card username = "Anupam" btnText = "click me"/>
      <Card username = "Rana" btnText = "visit me"/>
    </>
  )
}

export default App
