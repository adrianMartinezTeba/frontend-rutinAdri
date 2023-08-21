import React, { useState } from 'react';
import SeByName from '../SeByName/SeByName';
import SeByDifficulty from '../SeByDifficulty/SeByDifficulty';
import SeByPrMsc from '../SeByPrMsc/SeByPrMsc';
import SeByType from '../SeByType/SeByType';

const Searcher = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      {activeComponent === null ? (
        <>
          <button onClick={() => handleComponentClick('byName')}>Buscar por Nombre</button>
          <button onClick={() => handleComponentClick('byDifficulty')}>Buscar por Dificultad</button>
          <button onClick={() => handleComponentClick('byPrMsc')}>Buscar por Zona Muscular Principal</button>
          <button onClick={() => handleComponentClick('byType')}>Buscar por Tipo</button>
        </>
      ) : (
        <>
          {activeComponent === 'byName' && <SeByName />}
          {activeComponent === 'byDifficulty' && <SeByDifficulty />}
          {activeComponent === 'byPrMsc' && <SeByPrMsc />}
          {activeComponent === 'byType' && <SeByType />}
        </>
      )}
    </div>
  );
};

export default Searcher;
