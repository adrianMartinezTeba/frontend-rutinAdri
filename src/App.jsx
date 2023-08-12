import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Wellcome from "./components/Wellcome/Wellcome";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
function App() {

  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Wellcome/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
