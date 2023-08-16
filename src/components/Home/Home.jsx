import React, { useEffect } from 'react';
import './Home.scss'
import NavBar from '../NavBar/NavBar';
import CreateRoutine from '../CreateRoutine/CreateRoutine';
import Exercises from '../Exercises/Exercises';
const Home = () => {
  
  return (
          <div className='home-container'>
            <NavBar />
      <h2>Bienvenido a la página de inicio</h2>
      <div>
        <CreateRoutine/>
      </div>
    </div>

  );
};

export default Home;