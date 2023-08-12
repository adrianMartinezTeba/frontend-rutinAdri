import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Wellcome from "./components/Wellcome/Wellcome";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Wellcome/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
