import axios from "axios";

const API_URL = "https://back-rutin-adri.vercel.app";

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/users/register`, userData);
  return res.data;
};
const login = async (userData) => {
    const res = await axios.post(`${API_URL}/users/login` , userData);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
    return res.data; //action.payload
  };
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(`${API_URL}/users/logout`, {
      headers: {
        authorization: token,
      },
    });
    if (res.data) {
      localStorage.clear();
    }
    return res.data;
  };
const usersService = {
    register,
    login,
    logout
   
};

export default usersService;