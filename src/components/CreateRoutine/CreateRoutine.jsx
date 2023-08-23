import React, { useState } from 'react';
import SelExerCrRout from '../SelExerCrRout/SelExerCrRout';
import './CreateRoutine.scss';

const CreateRoutine = () => {
  const [routineData, setRoutineData] = useState({
    name: '',
    description: '',
    days: [
      { dayName: 'Lunes', exercises: [] },
      { dayName: 'Martes', exercises: [] },
      { dayName: 'Miércoles', exercises: [] },
      { dayName: 'Jueves', exercises: [] },
      { dayName: 'Viernes', exercises: [] },
      { dayName: 'Sábado', exercises: [] },
      { dayName: 'Domingo', exercises: [] },
    ],
  });

  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [isAddingExercise, setIsAddingExercise] = useState(false);

  const handleAddExercise = (exerciseId, exerciseName) => {
    if (selectedDayIndex !== null) {
      const updatedDays = [...routineData.days];
      updatedDays[selectedDayIndex].exercises.push({
        exerciseId,
        exerciseName, // Almacena el nombre del ejercicio
        notes: '',
        series: '',
      });
      setRoutineData({ ...routineData, days: updatedDays });
      setIsAddingExercise(false);
      setSelectedDayIndex(null);
    }
  };

  const handleCreateRoutine = () => {
    localStorage.setItem('Rutina', JSON.stringify(routineData));
    alert('Rutina creada y guardada en localStorage');
  };

  return (
    <div className='crRoutContainer'>
      {routineData.days.map((day, dayIndex) => (
        <div key={dayIndex} className='dayContainer'>
          <h3>{day.dayName}</h3>
          <ul>
            {day.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>{exercise.exerciseId}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedDayIndex(dayIndex)}>Agregar Ejercicio</button>
          {isAddingExercise && selectedDayIndex === dayIndex && (
            <div>
              <SelExerCrRout onSelectExercise={handleAddExercise} />
              <button onClick={() => setIsAddingExercise(false)}>Cancelar</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleCreateRoutine}>Crear rutina</button>
    </div>
  );
};

export default CreateRoutine;
