import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h2>Color List</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a Color</Link>
    </div>
  );
};

export default ColorList;
