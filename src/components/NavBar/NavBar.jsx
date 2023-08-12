import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'
const navBar = () => {
  return (
    <div>
        <nav>
     <ul>
     <li>
      <Link to={'/home'}>Home</Link>
     </li>
     <li>
      <Link to={'/register'}>Register</Link>
     </li>
     <li>
      <Link to={'/login'}>Login</Link>
     </li>
     <li>
      <Link to={'/'}>wellcome</Link>
     </li>
     </ul>
     </nav>
    </div>
  )
}

export default navBar
