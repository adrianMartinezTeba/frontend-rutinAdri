import React, { useEffect, useState } from 'react';
import { getExercisesByDifficulty, reset } from '../../features/exercises/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SeByDifficulty = () => {
  const dispatch = useDispatch();
  const { exercisesByDifficulty } = useSelector((state) => state.exercises);

  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const difficultyOptions = ['Easy', 'Medium', 'Hard'];

  useEffect(() => {
    if (selectedDifficulty) {
      dispatch(getExercisesByDifficulty(selectedDifficulty));
    }
  }, [selectedDifficulty, dispatch]);

  return (
    <div>
      {difficultyOptions.map((difficulty) => (
        <button key={difficulty} onClick={() => handleDifficultyClick(difficulty)}>
          {difficulty}
        </button>
      ))}
      {exercisesByDifficulty ? (
        exercisesByDifficulty.map((exercise) => (
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
        <h2>Choose one difficulty.</h2>
      )}
    </div>
  );
};

export default SeByDifficulty;
