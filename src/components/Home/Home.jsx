import React, { useEffect, useState } from 'react';
import './Home.scss'
import NavBar from '../NavBar/NavBar';
import CreateRoutine from '../CreateRoutine/CreateRoutine';
import Exercises from '../Exercises/Exercises';
import SeByName from '../SeByName/SeByName';
const Home = () => {
  const [fraseMot,setFraseMot]=useState('')
  const frasesMotivacionales = [
    "El éxito usualmente viene para aquellos que están demasiado ocupados buscándolo. - Henry David Thoreau",
    "No tienes que ser extremadamente bueno en algo, solo tienes que ser extremadamente apasionado. - Conor McGregor",
    "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "El entrenamiento es una de las partes más importantes de mi vida y siempre lo hará ser. - Arnold Schwarzenegger",
    "Lo que haces en el gimnasio es un reflejo de lo que haces fuera del gimnasio. Elige sabiamente. - David Goggins",
    "El ejercicio es un regalo, no un castigo. Tu cuerpo merece ser movido y celebrado. - Jessamyn Stanley",
    "No importa cuántas veces caigas, lo importante es cuántas veces te levantes. - Muhammad Ali",
    "No hay secretos para el éxito. Es el resultado de la preparación, el trabajo duro y aprender del fracaso. - Colin Powell",
    "La disciplina es la clave del éxito y nunca dejar de soñar es la clave para cumplir esos sueños. - Selena Gomez",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito. - Albert Schweitzer",
    "La única manera de hacer algo grandioso es amar lo que haces. - Steve Harvey",
    "El entrenamiento y la preparación son lo que te permiten sobrellevar la ansiedad. La falta de preparación es lo que te hace temer. - LeBron James",
    "El esfuerzo que pones en tus entrenamientos se reflejará en los resultados que ves. - Zig Ziglar",
    "No tienes que ser un atleta para establecer y lograr metas. Sin embargo, tienes que ser consciente de qué es lo que quieres y trabajar incansablemente hacia ello. - Venus Williams",
    "La perseverancia no es un largo camino; es muchos caminos cortos uno tras otro. - Seth Godin",
    "El entrenamiento te da el conocimiento, la preparación te da la confianza, y cuando tienes confianza, puedes actuar. - Maya Angelou",
    "Cada día, tienes la oportunidad de cambiar tu vida con cada decisión que tomas. - Jillian Michaels",
    "No importa cuán lento vayas, siempre y cuando no te detengas. - Confucio",
    "La excelencia es el resultado gradual de siempre esforzarte por hacer lo mejor posible. - Pat Riley",
    "No importa lo difícil que sea el camino, si sigues avanzando, llegarás a tu destino. - Ellen DeGeneres"
  ];
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * frasesMotivacionales.length);
    setFraseMot(frasesMotivacionales[randomIndex]);
  }, []);

  return (
          <div className='home-container'>
           
      <h2>Bienvenido a la página de inicio</h2>
      <div>
      <h2>{fraseMot}</h2>
        <CreateRoutine/>
        {/* <SeByName/> */}
      </div>
    </div>

  );
};

export default Home;