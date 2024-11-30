import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: #19131f;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const FormContainer = styled.div`
  background-color: #2d2338;
  color: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const FieldContainer = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1em;
`;

export const Input = styled.input`
  width: 94%;
  padding: 8px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #00b9ff;
  background-color: #1c2c39;
  color: white;

  &:focus {
    outline: none;
    border-color: #00b9ff;
  }
`;

export const SubmitButton = styled.button`
  background-color: #00b9ff;
  color: white;
  font-size: 1em;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #008fcc;
  }
`;
