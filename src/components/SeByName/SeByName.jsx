import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExerciseByName, reset } from '../../features/exercises/exercisesSlice';

const SeByName = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { isSuccess, message, isError, exercises } = useSelector((state) => state.exercises);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getExerciseByName(searchTerm));

    } else {
      dispatch(reset()); // Reset exercises state when search term is empty
    }
    
  }, [searchTerm]);
useEffect(()=>{

},[exercises])
  // Sort and get the first 3 exercises alphabetically
  const sortedExercises = exercises.sort((a, b) => a.name.localeCompare(b.name)); // Create a copy to avoid mutating the original array
 // Sort exercises alphabetically
  const top3Exercises = sortedExercises.slice(0, 3); // Get the first 3 exercises

  return (
    <div>
      <h2>Buscar Ejercicios</h2>
      <input
        type="text"
        placeholder="Buscar ejercicio..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {top3Exercises.map((exercise) => (
          <li key={exercise._id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeByName;
