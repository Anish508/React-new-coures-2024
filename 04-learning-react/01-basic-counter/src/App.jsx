import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState()
  // let counter = 5

  //imp interview
  const addValue = ()=>{
    if (counter <10) {
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
    }else{
      setCounter(0)
    }
  }
/*   const removeValue = ()=>{
    counter-=1
    setCounter(counter)
  } */
  
   function removeValue(){
    if (counter > 0) {
      counter-=1
      setCounter(counter)
    }
   }
  return (
    <>
     <h1>First project in React</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
