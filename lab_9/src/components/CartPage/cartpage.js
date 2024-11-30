import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Імпорт useNavigate
import { removeFromCart, clearCart } from '../../redux/actions/cartActions'; // Імпорт clearCart
import './cartpage.css'; // Підключення CSS

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Використання useNavigate для переходу між сторінками

    const handleRemoveFromCart = (id, selectedColor) => {
        dispatch(removeFromCart(id, selectedColor));
    };

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        dispatch(clearCart()); // Очищаємо кошик перед оформленням замовлення
        navigate('/checkout'); // Переходить на сторінку оформлення замовлення
    };

    return (
        <div className="cart-container">
            <h2 className="cart-header">Кошик</h2>
            {cartItems.length === 0 ? (
                <p>Ваш кошик порожній.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={`${item.id}-${item.selectedColor}`} className="cart-item">
                                <p>{item.title}</p>
                                <div className="color-indicator-container">
                                    <div
                                        className="color-indicator"
                                        style={{ backgroundColor: item.selectedColor ? item.selectedColor.toLowerCase() : 'transparent' }}
                                    ></div>
                                    <p>{item.selectedColor}</p>
                                </div>
                                <p>Ціна за одиницю: {item.price} UAH</p>
                                <p>Кількість: {item.quantity}</p>
                                <p>Загальна сума для цього товару: {item.price * item.quantity} UAH</p>
                                <button onClick={() => handleRemoveFromCart(item.id, item.selectedColor)}>Видалити</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="cart-total">Загальна сума кошика: {totalAmount} UAH</h3>
                    {/* Додаємо кнопку для переходу до Checkout */}
                    <button onClick={handleCheckout} className="checkout-button">
                        Перейти до оформлення
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
