import React, { useState, useEffect } from 'react';
import { getExercisesByMuscleZonePrincipal, reset } from '../../features/exercises/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SeByPrMsc = () => {
  const dispatch = useDispatch();
  const { exercisesByMscZonePrincipal } = useSelector((state) => state.exercises);

  const [selectedMscZone, setSelectedMscZone] = useState(null);

  const handleMscZoneClick = (mscZone) => {
    setSelectedMscZone(mscZone);
    dispatch(getExercisesByMuscleZonePrincipal(mscZone));
  };

  const muscleZoneOptions = [
    'Pectoral', 'Dorsal', 'Hombros', 'Tríceps', 'Bíceps', 'Antebrazos',
    'Abdominales', 'Glúteos', 'Cuádriceps', 'Isquiotibiales', 'Gemelos', 'Trapecios',
    'Lumbares', 'Oblicuos', 'Adductores', 'Abductores'
  ];

  useEffect(() => {
    if (selectedMscZone) {
      dispatch(getExercisesByMuscleZonePrincipal(selectedMscZone));
    }
  }, [selectedMscZone, dispatch]);

  return (
    <div>
      {muscleZoneOptions.map((mscZone) => (
        <button key={mscZone} onClick={() => handleMscZoneClick(mscZone)}>
          {mscZone}
        </button>
      ))}
      {exercisesByMscZonePrincipal ? (
        exercisesByMscZonePrincipal.map((exercise) => (
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
        ))
      ) : (
        <h2>Choose a muscle zone.</h2>
      )}
    </div>
  );
};

export default SeByPrMsc;
