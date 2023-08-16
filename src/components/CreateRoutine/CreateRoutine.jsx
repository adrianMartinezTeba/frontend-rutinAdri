import React, { useState } from 'react';

const CreateRoutine = () => {
  const [routineName, setRoutineName] = useState('');
  const [routineDescription, setRoutineDescription] = useState('');
  const [exerciseId, setExerciseId] = useState('');
  const [routineDays, setRoutineDays] = useState([
    { dayName: 'Lunes', exercises: [] },
    { dayName: 'Martes', exercises: [] },
    { dayName: 'Miércoles', exercises: [] },
    { dayName: 'Jueves', exercises: [] },
    { dayName: 'Viernes', exercises: [] },
    { dayName: 'Sábado', exercises: [] },
    { dayName: 'Domingo', exercises: [] },
  ]);

  const handleAddExercise = (dayIndex, exerciseId) => {
    const updatedDays = [...routineDays];
    updatedDays[dayIndex].exercises.push({ exerciseId });
    setRoutineDays(updatedDays);
  };

  return (
    <div>
      <h2>Crear Rutina</h2>
      <div>
        <label>Nombre de la Rutina:</label>
        <input
          type="text"
          value={routineName}
          onChange={(e) => setRoutineName(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción de la Rutina:</label>
        <textarea
          value={routineDescription}
          onChange={(e) => setRoutineDescription(e.target.value)}
        />
      </div>
      {routineDays.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h3>{day.dayName}</h3>
          <ul>
            {day.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>{exercise.exerciseId}</li>
            ))}
          </ul>
          {/* Agregar ejercicio a este día */}
          <button onClick={() => handleAddExercise(dayIndex, exerciseId)}>Agregar Ejercicio</button>
        </div>
      ))}
    </div>
  );
};

export default CreateRoutine;
