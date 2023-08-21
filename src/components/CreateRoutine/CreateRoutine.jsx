import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createRoutine } from "../../features/routines/routinesSlice";

const CreateRoutine = () => {
  const dispatch = useDispatch();
  const [opSearcher,setOpSearcher] = useState(false)
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

  const handleAddExercise = (dayIndex) => {
    const updatedDays = [...routineData.days];
    updatedDays[dayIndex].exercises.push({ exerciseId: routineData.exerciseId });
    setRoutineData({ ...routineData, days: updatedDays });
  };

  const handleCreateRoutine = async (e) => {
    e.preventDefault();
    await dispatch(createRoutine(routineData));
  }

  const handleChange = (key, value) => {
    setRoutineData({ ...routineData, [key]: value });
  }

  return (
    <div>
      <form onSubmit={handleCreateRoutine}>
        <h2>Crear Rutina</h2>
        <div>
          <label>Nombre de la Rutina:</label>
          <input
            type="text"
            value={routineData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>
        <div>
          <label>Descripción de la Rutina:</label>
          <textarea
            value={routineData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>
        {routineData.days.map((day, dayIndex) => (
          <div key={dayIndex}>
            <h3>{day.dayName}</h3>
            <ul>
              {day.exercises.map((exercise, exerciseIndex) => (
                <li key={exerciseIndex}>{exercise.exerciseId}</li>
              ))}
            </ul>
            <button onClick={() => handleAddExercise(dayIndex)}>Agregar Ejercicio</button>
          </div>
        ))}
        <div>
          <button type="submit">Crear Rutina</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoutine;
