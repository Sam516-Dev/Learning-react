import React from 'react';
import { useParams } from 'react-router-dom';

const Color = ({ colors }) => {
  const { color: colorName } = useParams();
  const color = colors.find((c) => c.name === colorName);

  return (
    <div>
      <h2>Color Details</h2>
      {color ? (
        <div>
          <div style={{ backgroundColor: color.hex, width: '100px', height: '100px' }}></div>
          <p>Name: {color.name}</p>
          <p>Hex: {color.hex}</p>
        </div>
      ) : (
        <p>Color not found.</p>
      )}
    </div>
  );
};

export default Color;
