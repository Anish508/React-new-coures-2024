import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CallBack from './components/CallBack.jsx'

function App() {
  const [uiColor, setUiColor] = useState(null)

  const getColor = (color)=>{
    setUiColor(color)
  }

  return (
    <>
    <center>
     <div className="App">
      <div className="app_color_container" style={{backgroundColor : `${uiColor}`}}>
      </div>
    
     </div>
     <CallBack getColor={getColor}></CallBack>
     </center>
    </>
  )
}

export default App
