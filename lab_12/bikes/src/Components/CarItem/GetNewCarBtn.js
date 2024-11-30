import React from 'react';
import { Button } from './GetNewCarBtn.styled';

const GetNewCarButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Get New Bike
    </Button>
  );
};

export default GetNewCarButton;
