import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises} from "../../features/exercises/exercisesSlice";
const Home = () => {
    const dispatch = useDispatch();
    const {exercises} = useSelector((state) => state.exercises);
    useEffect(()=>{
dispatch(getAllExercises())
    },[])
    useEffect(()=>{
console.log(exercises);
    },[exercises])
  return (
          <div>
      <h2>Bienvenido a la página de inicio</h2>
      <p>Esta es una página de inicio básica.</p>
      <div>
        {exercises.map((exercise) => (
          <h3 key={exercise._id}>{exercise.name}</h3>
        ))}
      </div>
    </div>

  );
};

export default Home;