import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  color: #ff4d4d;
  font-size: 0.9em;
  margin-top: 5px;
`;

const ErrorMessage = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export default ErrorMessage;
