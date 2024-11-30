import React from 'react';
import {
  SelectContainer,
  Label,
  Select
} from './FilterSelect.styled'
import { options } from '../../data/data';



const FilterSelect = ({ label, value, onChange }) => {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <Select value={value} onChange={onChange}>
        {options.map(({value, label}, i) => (
          <option key={i} value={value}>{label}</option>
        ))}
      </Select>
    </SelectContainer>
  );
};


export default FilterSelect;