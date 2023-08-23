import React, { useEffect } from 'react';
import { getAllExercises } from '../../features/exercises/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelExerCrRout = ({ onSelectExercise }) => {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(getAllExercises());
  }, []);

  return (
    <div>
      {exercises.map((ex) => (
        <div key={ex.id} onClick={() => onSelectExercise(ex.id, ex.name)}> {/* Pasar el ID y el nombre del ejercicio */}
          {ex.name}
        </div>
      ))}
    </div>
  );
};

export default SelExerCrRout;
