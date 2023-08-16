import axios from "axios";

const API_URL = "https://back-rutin-adri.vercel.app";

const getAllRoutines = async () => {
    const res = await axios.get(`${API_URL}/routines/all`);
    return res.data;
};

const createRoutine = async (routine) => {
    const res = await axios.post(`${API_URL}/routines/create`,routine);
    return res.data;
}

const exercisesService = {
   getAllRoutines,
   createRoutine
};

export default exercisesService;