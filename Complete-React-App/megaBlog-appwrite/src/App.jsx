import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useDispatch} from "react-redux"
import authService from "./Appwrite/auth";
import { login , logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import {Outlet} from "react-router-dom"


function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch
  useEffect(()=>{
    authService.getCurrentUser()
    .then(((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }))
    .catch((error)=>console.log("Error: unable to fetch user data", error)
    )
    .finally(()=>setLoading(false))
  } , [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
      <div className="w-full block">
        <Header></Header>
        <main>
          Todo:{/* <Outlet/> */}
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null
}

export default App;
