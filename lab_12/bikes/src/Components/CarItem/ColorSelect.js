import React from 'react';
import { ColorSelectContainer } from './ColorSelect.styled';

const ColorSelect = ({ colors= [], selectedColor, onChange }) => {
  return (
    <ColorSelectContainer color={selectedColor}>
      <label>Choose Color:</label>
      <div></div>
      <select value={selectedColor} onChange={onChange}>
        {colors.map((color, i) => (
          <>
            <option key={color} value={color}>{color}</option>
          </>
        ))}
      </select>
    </ColorSelectContainer>
  );
};

export default ColorSelect;
