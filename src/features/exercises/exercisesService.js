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
const createExercise = async (exercise) => {
    const res = await axios.post(`${API_URL}/exercises/create`,exercise);
    return res.data;
}

const exercisesService = {
    getAllExercises,
    getExerciseById,
    createExercise
   
};

export default exercisesService;