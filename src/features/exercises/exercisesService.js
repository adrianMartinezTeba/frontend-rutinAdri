import axios from "axios";

const getAllExercises = async () => {
    const res = await axios.get('https://back-rutinadri-production.up.railway.app/exercises/all');
    return res.data;
};



const exercisesService = {
    getAllExercises
   
};

export default exercisesService;