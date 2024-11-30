import styled from 'styled-components';

export const ColorSelectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  div {
    height: 30px;
    margin-left: 5px;
    width: 30px;
    border-radius: 4px;
    background-color: ${(props) => (props.color)};
  }
  label {
    font-size: 1.1em;
    color: #bbb;
    font-weight: bold;
  }

  select {
    margin-left: 10px;
    padding: 8px;
    font-size: 1em;
    background-color: #1f2a37;
    color: #ddd;
    outline: 1px solid #333;
    border-radius: 4px;
  }
`;
