import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExerciseById } from "../../features/exercises/exercisesSlice"
const Exercise = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
  const { exercise} = useSelector((state) => state.exercises);
  useEffect(()=>{
dispatch(getExerciseById(id))
console.log(exercise);
  },[])
  useEffect(()=>{

  },[exercise])
  return (
    <div>
                {
                    exercise ? (<div className='exContainer' key={exercise._id}>
                    <h3>Exercise: {exercise.name}</h3>
                    <p>Description: {exercise.description}</p>
                    <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
                    <p>Secundaries muscles zones:
                        {exercise.muscleZoneSecundaries}
                          
                    
                    </p>
                    <p>Difficulty:{exercise.difficulty}</p>
                    <div className='vi-img-container'>
                        <img src={exercise.imageMZP} alt="Principal muscle" />
                        <iframe
                            src={`https://www.youtube.com/embed/${exercise.videoId}`} // URL del video
                            title="YouTube Video"
                            frameBorder="0" // Sin borde del reproductor
                            allowFullScreen // Permite pantalla completa
                        ></iframe>
                    </div>
                </div>) : (
                    <p>Loading...</p>
                )
                }
            
    </div>
  )
}

export default Exercise
