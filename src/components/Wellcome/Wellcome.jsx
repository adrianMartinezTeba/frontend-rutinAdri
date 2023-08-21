import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const Wellcome = () => {
    const navigate = useNavigate()
    useEffect(()=>{
      
setTimeout(() => {
    navigate('login')
}, 2000);
    },[])
  return (
    <div>
      <div>
        <h1>Wellcome to routinAdri</h1>
        <p>Una red social donde crear tus rutinas y ver las de los demás</p>
      </div>
    </div>
  )
}

export default Wellcome
