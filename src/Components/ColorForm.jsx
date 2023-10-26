import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = ({ colors, setColors }) => {
  const [newColor, setNewColor] = useState({ name: '', hex: '' });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newColor.name && newColor.hex) {
      const updatedColors = [...colors, newColor];
      setColors(updatedColors);
      // Save to localStorage if needed
      // localStorage.setItem('colors', JSON.stringify(updatedColors));
      history.push('/colors');
    }
  };

  return (
    <div>
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newColor.name}
            onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
          />
        </div>
        <div>
          <label>Hex:</label>
          <input
            type="text"
            value={newColor.hex}
            onChange={(e) => setNewColor({ ...newColor, hex: e.target.value })}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;
