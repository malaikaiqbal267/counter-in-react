import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decrement(){
    if(count>0){
      setCount(count-1)
    }else{
      alert("Tasbeeh negative nhi hoti yar 🤦‍♀️")
    }
  }
  function increment(){
    setCount(count+1)
  }
  return (
    <>
      <h1 class="count">{count}</h1>
      <button class="dec-btn" onClick={decrement}>Decrement</button>
      <button class="increment-btn" onClick={increment}>Increment</button>
    </>
  )
}

export default App
