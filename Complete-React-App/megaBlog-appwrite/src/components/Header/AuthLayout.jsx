import React, {useState , useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication = true}) {
const navigate = useNavigate()
const [loader , setLoader] = useState(true)
const authStatus = useSelector((state)=>state.auth.status)

useEffect(()=>{
  //todo :we can make it more easy

  /* if (authStatus === true) {
    navigate("/")
  }else if(authStatus === false){
    navigate("/login")
  } */
  if (authentication && authStatus!=authentication) {
    navigate("/login")
  }else if(!authentication && authStatus!==authentication)
  navigate("/")
},[authStatus , navigate , authentication])
setLoader(false)
  return loader ? <h1>Loading.....</h1> : {children}
}

