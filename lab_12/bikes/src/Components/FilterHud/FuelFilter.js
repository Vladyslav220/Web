import React from 'react';
import {
  SelectContainer,
  Label,
  Select
} from './FilterSelect.styled';
import { fuelOptions } from '../../data/data'; // Import fuelOptions from data

const FuelFilterSelect = ({ value, onChange }) => {
  return (
    <>
      <SelectContainer>
        <Label>Fuel Type</Label>
        <Select value={value} onChange={onChange}>
          {fuelOptions.map(({ value, label }, i) => (
            <option key={i} value={value}>{label}</option>
          ))}
        </Select>
      </SelectContainer>
    </>
  );
};

export default FuelFilterSelect;
