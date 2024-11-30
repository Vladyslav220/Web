import React from 'react';
import { Button } from './SearchButton.styled';

const SearchButton = ({ onClick }) => {
    return <Button onClick={onClick}>Search</Button>;
};

export default SearchButton;
