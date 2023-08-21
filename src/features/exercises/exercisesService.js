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
const getExercisesByName = async (name) => {
    const res = await axios.get(`${API_URL}/exercises/byName/${name}`);
    return res.data;
};
const getExercisesByEquipment = async (equipment) => {
    const res = await axios.get(`${API_URL}/exercises/byEquipment/${equipment}`);
    return res.data;
};
const getExercisesByDifficulty = async (difficulty) => {
    const res = await axios.get(`${API_URL}/exercises/byDifficulty/${difficulty}`);
    return res.data;
};
const getExercisesByMuscleZonePrincipal = async (muscleZonePrincipal) => {
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
    getExercisesByName,
    getExercisesByDifficulty,
    getExercisesByMuscleZonePrincipal,
    getExercisesByEquipment
};

export default exercisesService;