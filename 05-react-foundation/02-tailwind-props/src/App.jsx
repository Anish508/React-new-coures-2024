import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
 

  return (
    <>
      <h1 className='bg-green-400 text-red p-4 rounded-xl'>Tailwind CSS Testing</h1>
      <Card username="Anish" btnText = "Click me"></Card>
      <Card username="kiran" btnText = "Click me"></Card>

      
    </>
  )
}

export default App
