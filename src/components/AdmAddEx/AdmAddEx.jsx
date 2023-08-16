import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createExercise } from "../../features/exercises/exercisesSlice";

const AdmAddEx = () => {
    const dispatch = useDispatch();
    const { exercise } = useSelector((state) => state.exercises);
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [muscleZonePrincipal, setMuscleZonePrincipal] = useState('');
  const [muscleZoneSecundaries, setMuscleZoneSecundaries] = useState([]);
  const [exerciseDifficulty, setExerciseDifficulty] = useState('');
  const [exerciseImage, setExerciseImage] = useState('');
  const [exerciseVideoId, setExerciseVideoId] = useState('');

  const handleAddExercise = () => {
    // Aquí puedes enviar los datos del ejercicio al servidor o Redux para su almacenamiento
    const newExercise = {
      type: exerciseType,
      name: exerciseName,
      description: exerciseDescription,
      muscleZonePrincipal: muscleZonePrincipal,
      muscleZoneSecundaries: muscleZoneSecundaries,
      difficulty: exerciseDifficulty,
      imageMZP: exerciseImage,
      videoId: exerciseVideoId,
    };
dispatch(createExercise(newExercise))
    // Lógica para enviar los datos del ejercicio al backend (usando Redux, por ejemplo)
    // dispatch(addExerciseAction(newExercise));
  };
useEffect(()=>{

},[])
  return (
    <div>
      <h2>Agregar Ejercicio</h2>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={exerciseDescription}
          onChange={(e) => setExerciseDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Zona Muscular Principal:</label>
        <input
          type="text"
          value={muscleZonePrincipal}
          onChange={(e) => setMuscleZonePrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Zonas Musculares Secundarias:</label>
        <input
          type="text"
          value={muscleZoneSecundaries.join(', ')}
          onChange={(e) => setMuscleZoneSecundaries(e.target.value.split(', '))}
        />
      </div>
      <div>
        <label>Dificultad:</label>
        <select
          value={exerciseDifficulty}
          onChange={(e) => setExerciseDifficulty(e.target.value)}
        >
          <option value="Fácil">Fácil</option>
          <option value="Moderado">Moderado</option>
          <option value="Difícil">Difícil</option>
        </select>
      </div>
      <div>
        <label>URL de la Imagen:</label>
        <input
          type="text"
          value={exerciseImage}
          onChange={(e) => setExerciseImage(e.target.value)}
        />
      </div>
      <div>
        <label>ID del Video:</label>
        <input
          type="text"
          value={exerciseVideoId}
          onChange={(e) => setExerciseVideoId(e.target.value)}
        />
      </div>
      <button onClick={handleAddExercise}>Agregar Ejercicio</button>
    </div>
  );
};

export default AdmAddEx;
