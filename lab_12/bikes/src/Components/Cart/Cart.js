import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/Cart/cartOperations';
import CartItem from './CartItem';
import { CartContainer, CartTitle, CartItemList, TotalPrice, CheckoutButton } from './Cart.styled';
import { Container } from '../Container/Container';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carsInCart, totalAmount } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ carId: id, quantity }));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CartContainer>
      <Container>
        <CartTitle>Your Cart</CartTitle>
        <CartItemList>
          {carsInCart.map((car) => (
            <CartItem 
              key={car._id + car.color} 
              car={car} 
              onRemove={handleRemove} 
              onUpdateQuantity={handleUpdateQuantity} 
            />
          ))}
        </CartItemList>
        <TotalPrice>Total: ${totalAmount.toFixed(2)}</TotalPrice>
        <CheckoutButton type="button" onClick={handleCheckout}>
          Proceed to Checkout
        </CheckoutButton>
      </Container>
    </CartContainer>
  );
};

export default Cart;
