import React from 'react';
import { Input } from './SearchInputStyled';

const SearchInput = ({ value, onChange }) => {
    return <Input type="text" value={value} onChange={onChange} placeholder="Search" />;
  };

export default SearchInput;
