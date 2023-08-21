import React, { useEffect, useState } from 'react'
import { getExercisesByEquipment, reset } from '../../features/exercises/exercisesSlice';
import { useDispatch, useSelector } from 'react-redux';
const SeByType = () => {
  const dispatch = useDispatch();
  const { exercisesByEquipment } = useSelector((state) => state.exercises);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const handleTypeClick = (equipment) => {
    setSelectedEquipment(equipment);
  };
  useEffect(() => {
    if (selectedEquipment) {
      dispatch(getExercisesByEquipment(selectedEquipment))
    }
  }, [selectedEquipment, dispatch])
  const equipment = ['Maquina/mancuerna','Parque de barras','Ejercicios corporales','Gomas']
  return (
    <div>
      {
        equipment.map((equipment) => (
          <button key={equipment} onClick={() => handleTypeClick(equipment)}>{equipment}</button>
        ))
      }
      {
        exercisesByEquipment ? (
          exercisesByEquipment.map((exercise)=>(
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
        ):(
          <h2>Choose one equipment.</h2>
        )
      }
    </div>
  )
}

export default SeByType
