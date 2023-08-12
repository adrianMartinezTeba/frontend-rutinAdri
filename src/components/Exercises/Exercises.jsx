import React, { useEffect } from 'react'
import './Exercises.scss'
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises } from "../../features/exercises/exercisesSlice";
const Exercises = () => {
    const dispatch = useDispatch();
    const { exercises } = useSelector((state) => state.exercises);
    useEffect(() => {
        dispatch(getAllExercises())
    }, [])
    useEffect(() => {
        console.log(exercises);
    }, [exercises])
    return (
        <div>
            {exercises.map((exercise) => (
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
                    <p>Difficulty:{exercise.difficuty}</p>
                    <div className='vi-img-container'>
                        <img src={exercise.imageMZP} alt="Principal muscle" />
                        <iframe
                            src={`https://www.youtube.com/embed/${exercise.videoId}`} // URL del video
                            title="YouTube Video"
                            frameborder="0" // Sin borde del reproductor
                            allowfullscreen // Permite pantalla completa
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Exercises
