import React, { useState } from 'react';
import Cloud from './components/clouds';
import ImageContainer from './components/imageContainer';

const App = () => {
  const [clouds, setClouds] = useState([{ id: 1, left: 50, top: 50 }]);

  const handleDrop = (cloud, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    const { id } = cloud;
    const newPosition = {
      id,
      left: delta.x,
      top: delta.y,
    };
  
    setClouds(() => [newPosition]);
  };
  

  return (
    <div>
      <h1>Drag and Drop Clouds</h1>
      <ImageContainer onDrop={handleDrop}>
        {clouds.map((cloud) => (
          <Cloud key={cloud.id} {...cloud} />
        ))}

      </ImageContainer>
    </div>
  );
};

export default App;