import axios from "axios";

const API_URL = "https://back-rutin-adri.vercel.app";

const getAllExercises = async () => {
    const res = await axios.get(`${API_URL}/exercises/all`);
    return res.data;
};
const getExerciseById = async (id) => {
    const res = await axios.get(`${API_URL}/exercises/byID/${id}`);
    return res.data;
};
const getExerciseByName = async (name) => {
    const res = await axios.get(`${API_URL}/exercises/byName/${name}`);
    return res.data;
};
const getExerciseByType = async (type) => {
    const res = await axios.get(`${API_URL}/exercises/byType/${type}`);
    return res.data;
};
const getExercisesByDifficulty = async (difficulty) => {
    const res = await axios.get(`${API_URL}/exercises/byName/${difficulty}`);
    return res.data;
};
const getExerciseByMuscleZoneSecundaries = async (muscleZoneSecundaries) => {
    const res = await axios.get(`${API_URL}/exercises/byMuscleZoneSecundaries/${muscleZoneSecundaries}`);
    return res.data;
};
const getExerciseByMuscleZonePrincipal = async (muscleZonePrincipal) => {
    const res = await axios.get(`${API_URL}/exercises/byMuscleZonePrincipal/${muscleZonePrincipal}`);
    return res.data;
};
const createExercise = async (exercise) => {
    const res = await axios.post(`${API_URL}/exercises/create`, exercise);
    return res.data;
}

const exercisesService = {
    getAllExercises,
    getExerciseById,
    createExercise,
    getExerciseByName,
    getExercisesByDifficulty,
    getExerciseByMuscleZonePrincipal,
    getExerciseByMuscleZoneSecundaries,
    getExerciseByType
};

export default exercisesService;