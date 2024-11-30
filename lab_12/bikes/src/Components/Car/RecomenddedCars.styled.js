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

export const LoadMoreButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;