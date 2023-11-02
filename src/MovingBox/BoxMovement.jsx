import React, { useState } from 'react';

function BoxMovement() {

  const [transform, setTransform] = useState(0);

  
  const movedown = () => {
    setTransform(transform + 10); 
  };

  return (
    <div>
      <button className='p-3 px-8 bg-orange-500' onClick={movedown}>Move down</button>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          transform: `translateY(${transform}px)`,
        }}
      ></div>
    </div>
  );
}

export default BoxMovement;
