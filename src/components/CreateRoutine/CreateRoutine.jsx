import React, { useState } from 'react';

const CreateRoutine = () => {
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
    // Lógica para añadir un ejercicio a un día específico
  };

  return (
    <div>
      <h2>Crear Rutina</h2>
      {routineDays.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h3>{day.dayName}</h3>
          <ul>
            {day.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>{exercise.name}</li>
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
