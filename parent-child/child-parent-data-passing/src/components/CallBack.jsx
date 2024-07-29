
import React from 'react'
import { useState } from 'react'


function CallBack({getColor}) {
  const[activeColor , setActiveColor] = useState("")

  const handleChange=(value)=>{
    console.log(value);
    setActiveColor(value)
    getColor(value)
  }
  return ( 
    <div>
      <input type="text"
       id="input"
       aria-label='input'
       onChange={(e)=>handleChange && handleChange(e.target.value)}
       value={activeColor}
      />
    </div>
  )
}

export default CallBack
