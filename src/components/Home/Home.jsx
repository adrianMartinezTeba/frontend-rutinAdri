import React, { useEffect } from 'react';
import './Home.scss'
import CreateRoutine from '../CreateRoutine/CreateRoutine';
import Exercises from '../Exercises/Exercises';
const Home = () => {
  
  return (
          <div className='home-container'>
      <h2>Bienvenido a la página de inicio</h2>
      <div>
        {/* <CreateRoutine/> */}
        <Exercises/>
      </div>
    </div>

  );
};

export default Home;