import React from 'react';
import { 
  CarInfo,
  CarName,
  CarPrice, 
  RemoveButton, 
  CartItemWrapper, 
  ImageContainer, 
  Image, 
  CarContainer, 
  QuantityContainer, 
  QuantityButton,
  ColorBox,
  ColorBoxWrapper
} from './Cart.styled';

const CartItem = ({ car, onRemove, onUpdateQuantity }) => {
  return (
    <CartItemWrapper>
      <CarInfo>
        <CarContainer>
          <ImageContainer>
            <Image src={car.image} alt={car.name} />
          </ImageContainer>
          <div>
            <CarName>{car.name}</CarName>
            <CarPrice>${car.price} x {car.quantity}</CarPrice>
            <QuantityContainer>
              <QuantityButton onClick={() => onUpdateQuantity(car._id, car.quantity - 1)} disabled={car.quantity <= 1}>-</QuantityButton>
              <span>{car.quantity}</span>
              <QuantityButton 
                onClick={() => onUpdateQuantity(car._id, car.quantity + 1)} 
                disabled={car.quantity >= car.availableQuantity}
              >
                +
              </QuantityButton>
            </QuantityContainer>
            <ColorBoxWrapper>
              <CarPrice>Color:</CarPrice>
              <ColorBox color={car.color}></ColorBox>
            </ColorBoxWrapper>
          </div>
          
        </CarContainer>
      </CarInfo>
      <RemoveButton onClick={() => onRemove(car._id)}>Remove</RemoveButton>
    </CartItemWrapper>
  );
};

export default CartItem;
