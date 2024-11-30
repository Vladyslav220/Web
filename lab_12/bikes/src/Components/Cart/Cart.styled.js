import styled from 'styled-components';

export const CartContainer = styled.div`
  min-height: 500px;
  padding: 20px;
  margin: 0 auto;
  background-color: #19131f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CartTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffd700;
`;

export const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d2338;
  padding: 15px;
  border-radius: 8px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CarName = styled.h3`
  font-size: 1.4em;
  color: #00bfa6;
`;

export const CarPrice = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  color: #ffd700;
  margin-bottom: 5px;
`;

export const RemoveButton = styled.button`
  background-color: #e63946;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: #c53030;
  }
`;

export const TotalPrice = styled.p`
  font-size: 1.5em;
  color: #00bfa6;
  text-align: right;
  margin-top: 20px;
`;

export const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #00bfa6;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  width: 400px;
  margin-left: 70px;

  &:hover {
    background-color: #00a394;
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 300px; 
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const CarContainer = styled.div`
  display: flex;
  flex-direction: row;
`


export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  font-size: 1rem;
  color: #fff;
  background-color: #00bfa6;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  padding: 4px 8px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    background-color: #009e87;
  }
`;

export const ColorBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const ColorBox = styled.div`
  height: 30px;
  margin-left: 5px;
  width: 30px;
  border-radius: 4px;
  background-color: ${(props) => (props.color)};
`