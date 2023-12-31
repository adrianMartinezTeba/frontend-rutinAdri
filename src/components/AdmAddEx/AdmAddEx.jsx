import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createExercise } from "../../features/exercises/exercisesSlice";

const AdmAddEx = () => {
  const dispatch = useDispatch();
  
  const [exerciseFormData, setExerciseFormData] = useState({
    equipment: "",
    name: "",
    description: "",
    muscleZonePrincipal: "",
    muscleZoneSecundaries: "",
    difficulty: "",
    imageMZP: "",
    videoId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddExercise = () => {
    dispatch(createExercise(exerciseFormData)); // Envía los datos del ejercicio a Redux para su almacenamiento
    setExerciseFormData(
      {  equipment: "",
      name: "",
      description: "",
    
      difficulty: "",
      imageMZP: "",
      videoId: ""}
    )
  };

  useEffect(() => {
    console.log(exerciseFormData);
  }, [exerciseFormData]);

  return (
    <div>
      <h2>Agregar Ejercicio</h2>
      <div>
        <label>Equipamiento:</label>
           <select
          name="equipment"
          value={exerciseFormData.equipment}
          onChange={handleInputChange}
        >
            <option value="">Seleccione una opción</option>
          <option value="Maquina/mancuerna">Maquina/mancuerna</option>
          <option value="Parque de barras">Parque de barras</option>
          <option value="Ejercicios corporales">Ejercicios corporales</option>
          <option value="Gomas">Gomas</option>
        </select>
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={exerciseFormData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={exerciseFormData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Zona Muscular Principal:</label>
        <input
          type="text"
          name="muscleZonePrincipal"
          value={exerciseFormData.muscleZonePrincipal}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Zonas Musculares Secundarias:</label>
        <input
          type="text"
          name="muscleZoneSecundaries"
          value={exerciseFormData.muscleZoneSecundaries}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Dificultad:</label>
        <select
          name="difficulty"
          value={exerciseFormData.difficulty}
          onChange={handleInputChange}
        >
            <option value="">Seleccione una opción</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div>
        <label>ID del Video:</label>
        <input
          type="text"
          name="videoId"
          value={exerciseFormData.videoId}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddExercise}>Agregar Ejercicio</button>
    </div>
  );
}

export default AdmAddEx;
