import axios from "axios";

const API_URL = "https://back-rutin-adri.vercel.app";

const getAllExercises = async () => {
    const res = await axios.get(`${API_URL}/exercises/all`);
    return res.data;
};



const exercisesService = {
    getAllExercises
   
};

export default exercisesService;