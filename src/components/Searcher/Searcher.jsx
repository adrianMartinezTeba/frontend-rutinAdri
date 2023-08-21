import React, { useEffect, useState } from 'react';
import SeByName from '../SeByName/SeByName';
import SeByDifficulty from '../SeByDifficulty/SeByDifficulty';
import SeByPrMsc from '../SeByPrMsc/SeByPrMsc';
import SeByEquipment from '../SeByEquipment/SeByEquipment';

const Searcher = () => {
  const [activeComponent, setActiveComponent] = useState('byName');

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };
useEffect(()=>{
setActiveComponent('')
},[])
  return (
    <div>
      <button onClick={() => handleComponentClick('byName')}>Buscar por Nombre</button>
      <button onClick={() => handleComponentClick('byDifficulty')}>Buscar por Dificultad</button>
      <button onClick={() => handleComponentClick('byPrMsc')}>Buscar por Zona Muscular Principal</button>
      <button onClick={() => handleComponentClick('byType')}>Buscar por Equipamiento</button>

      {activeComponent === 'byName' && <SeByName />}
      {activeComponent === 'byDifficulty' && <SeByDifficulty />}
      {activeComponent === 'byPrMsc' && <SeByPrMsc />}
      {activeComponent === 'byType' && <SeByEquipment />}
    </div>
  );
};

export default Searcher;
