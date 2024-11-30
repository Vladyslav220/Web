import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  background-color: #2d2338;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  padding: 15px;
  text-decoration: none;
`;

export const Price = styled.h3`
  color: #00b9ff;
  font-size: 1.5em;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
`;

export const Reviews = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 0.9em;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: white;
`