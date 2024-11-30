import React from 'react';
import {Button} from './FilterButton.styled'

const FilterButton = ({onClick}) => {
  return <Button onClick={onClick}>Apply Filters</Button>;
};

export default FilterButton;
