import React from 'react';
import { QuantityContainer } from './QuantitySelect.styled';

const QuantitySelect = ({onChange, quantity, availableQuantity}) => {
  // const [quantity, setQuantity] = useState(1);

  // const handleQuantityChange = (e, ) => {
  //   const value = parseInt(e.target.value);
  //   if (value > 0) {
  //     setQuantity(value);
  //   }
  // };
  // console.log(availableQuantity)

  return (
    <QuantityContainer>
      <label>Quantity:</label>
      <input 
        type="number" 
        value={quantity} 
        onChange={onChange} 
        min="1"
        max={availableQuantity}
      />
      <p>/{availableQuantity}</p>
    </QuantityContainer>
  );
};

export default QuantitySelect;
