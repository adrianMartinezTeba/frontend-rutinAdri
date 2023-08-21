import React, { useEffect, useState } from 'react';
import { getExercisesByDifficulty, reset } from '../../features/exercises/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SeByDifficulty = () => {
  const dispatch = useDispatch();
  const { exercisesByDifficulty } = useSelector((state) => state.exercises);

  const [difficulty, setDifficulty] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  const handleDifficultyEasy = () => {
    setDifficulty({
      easy: true,
      medium: false,
      hard: false,
    });
  };

  const handleDifficultyMedium = () => {
    setDifficulty({
      easy: false,
      medium: true,
      hard: false,
    });
  };

  const handleDifficultyHard = () => {
    setDifficulty({
      easy: false,
      medium: false,
      hard: true,
    });
  };

  useEffect(() => {
    if (difficulty.easy) {
      dispatch(getExercisesByDifficulty('easy'));
    } else if (difficulty.medium) {
      dispatch(getExercisesByDifficulty('medium'));
    } else if (difficulty.hard) {
      dispatch(getExercisesByDifficulty('hard'));
    }
  }, [difficulty, dispatch]);

  return (
    <div>
      <button onClick={handleDifficultyEasy}>Easy</button>
      <button onClick={handleDifficultyMedium}>Medium</button>
      <button onClick={handleDifficultyHard}>Hard</button>
      {exercisesByDifficulty ? (
        exercisesByDifficulty.map((exercise) => (
          <div className='exContainer' key={exercise._id}>
            <h3>Exercise: {exercise.name}</h3>
            <p>Description: {exercise.description}</p>
            <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
            <p>
              Secundaries muscles zones:{' '}
              {exercise.muscleZoneSecundaries.map((mzs) => (
                <span key={mzs}>{mzs}</span>
              ))}
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
        <h2>Choose one difficulty.</h2>
      )}
    </div>
  );
};

export default SeByDifficulty;
