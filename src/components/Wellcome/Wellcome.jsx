import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const Wellcome = () => {
    const navigate = useNavigate()
    useEffect(()=>{
      
setTimeout(() => {
    
}, 2000);
    },[])
  return (
    <div>
      <div>
        <h1>Wellcome to routinAdri</h1>
      </div>
    </div>
  )
}

export default Wellcome
