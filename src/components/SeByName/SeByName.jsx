import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExerciseByName, reset } from '../../features/exercises/exercisesSlice';

const SeByName = () => {
  const dispatch = useDispatch();
  const { isSuccess, message, isError, exercisesByName } = useSelector((state) => state.exercises);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      dispatch(getExerciseByName(searchTerm));
    }
  }, [searchTerm]);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Buscar Ejercicios</h2>
      <input
        type="text"
        placeholder="Buscar ejercicio..."
        value={searchTerm}
        onChange={onChange}
      />
      <ul>
        {exercisesByName.map((exercise) => (
          <div className='exContainer' key={exercise._id}>
          <h3>Exercise: {exercise.name}</h3>
          <p>Description: {exercise.description}</p>
          <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
          <p>
            Secundaries muscles zones:
            {exercise.muscleZoneSecundaries}
          </p>
          <p>Difficulty: {exercise.difficulty}</p>
          <div className='vi-img-container'>
            <img src={exercise.imageMZP} alt='Principal muscle' />
            <iframe
              src={`https://www.youtube.com/embed/${exercise.videoId}`} // URL del video
              title='YouTube Video'
              frameBorder='0' // Sin borde del reproductor
              allowFullScreen // Permite pantalla completa
            ></iframe>
          </div>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default SeByName;
