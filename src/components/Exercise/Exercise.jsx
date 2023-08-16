import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
const Exercise = () => {
  const { exercise} = useSelector((state) => state.exercises);
  useEffect(()=>{

  },[exercise])
  return (
    <div>
                <div className='exContainer' key={exercise._id}>
                    <h3>Exercise: {exercise.name}</h3>
                    <p>Description: {exercise.description}</p>
                    <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
                    <p>Secundaries muscles zones:
                        {exercise.muscleZoneSecundaries.map((mzs) => (
                            <span key={mzs}>
                                {mzs}
                            </span>
                        ))}
                    
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
                </div>
            
    </div>
  )
}

export default Exercise
