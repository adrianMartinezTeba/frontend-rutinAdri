import React, { useEffect, useState } from 'react';
import './Exercises.scss';
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises, getExerciseById } from "../../features/exercises/exercisesSlice";
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [showExercise, setShowExercise] = useState(false);
    const dispatch = useDispatch();
    const { exercises } = useSelector((state) => state.exercises);

    useEffect(() => {
        dispatch(getAllExercises());
    }, []);
    useEffect(() => {
       
    }, [showExercise]);

    const handleExerciseInd = async(id) => {
        await dispatch(getExerciseById(id));
        setShowExercise(true)
    };

    return (
        <div>
            {showExercise ? (
                <div>
                    <div>
                        <Exercise /> 
                        <button onClick={()=>setShowExercise(false)}>Cerrar exercise</button>
                    </div>
                    {exercises.map((exercise) => (
                        <div
                            onClick={() => handleExerciseInd(exercise._id)}
                            className='exContainer'
                            key={exercise._id}
                        >
                            <h3>Exercise: {exercise.name}</h3>
                            <p>Description: {exercise.description}</p>
                            <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {exercises.map((exercise) => (
                        <div
                            onClick={() => handleExerciseInd(exercise._id)}
                            className='exContainer'
                            key={exercise._id}
                        >
                            <h3>Exercise: {exercise.name}</h3>
                            <p>Description: {exercise.description}</p>
                            <p>Primary muscle zone: {exercise.muscleZonePrincipal}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Exercises;
