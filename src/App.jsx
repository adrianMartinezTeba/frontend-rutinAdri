import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Wellcome from "./components/Wellcome/Wellcome";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import Register from "./components/Register/Register";
import Exercise from "./components/Exercise/Exercise";
import AdmAddEx from "./components/AdmAddEx/AdmAddEx";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/createEx" element={<AdmAddEx/>} />
          <Route path="/exerciseInd" element={<Exercise />} />
          <Route path="/" element={<Wellcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
