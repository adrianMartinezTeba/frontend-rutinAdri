import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/users/usersSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isSuccess, message, isError,user } = useSelector((state) => state.users);
  useEffect(()=>{
console.log(formData);
console.log(user);
  },[formData,user])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Email:</label>
          <input type="email" name='email' value={email} onChange={onChange} placeholder='email' />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" value={password} onChange={onChange} placeholder='password' />
        </div>
        <button type="submit">Iniciar sesión</button>
        <p>Si no tienes cuenta registrate haciendo click <Link to={'/register'}>aqui</Link></p>
      </form>
    </div>
  );
};

export default Login;
