import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import Wellcome from "./components/Wellcome/Wellcome";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import Exercise from "./components/Exercise/Exercise";
import AdmAddEx from "./components/AdmAddEx/AdmAddEx";
import Searcher from "./components/Searcher/Searcher";

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/createEx" element={<AdmAddEx/>} />
          <Route path="/exercise/:id" element={<Exercise />} />
          <Route path="/" element={<Wellcome/>} />
          <Route path="/searcher" element={<Searcher/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
   
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
