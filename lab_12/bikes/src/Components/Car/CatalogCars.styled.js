import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px;
  background-color: #19131f;
`;

export const RecommendWrapper = styled.div`
    max-width: 1220px;
    margin: 0 auto;
`;

export const Heading = styled.h2`
  color: white;
  font-size: 2em;
  margin-bottom: 20px;
`;


export const CarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const FilterContainer = styled.div`
  background-color: #0e0b12;
  padding: 20px;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SelectList = styled.ul `
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
`
