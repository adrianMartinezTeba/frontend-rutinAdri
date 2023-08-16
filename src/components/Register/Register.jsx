import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from "../../features/users/usersSlice";

const Register = () => {
  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    age: '' // Agrega un campo de edad en el estado si es necesario
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={userData.password} onChange={onChange} />
        </div>
        {/* Agrega un campo de entrada de Edad si es necesario */}
        <div>
          <label htmlFor="age">Edad:</label>
          <input type="number" id="age" name="age" value={userData.age} onChange={onChange} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
