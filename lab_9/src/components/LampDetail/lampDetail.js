import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import lamps from '../LampData/lampData';
import './lampDetail.css';

function LampDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Отримуємо інформацію про товар
  const [lamp] = useState(lamps.find((lamp) => lamp.id === parseInt(id)));
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Отримуємо всі товари з кошика
  const cartItems = useSelector(state => state.cart.cartItems);

  if (!lamp) {
    return <div>Lamp not found</div>;
  }

  // Знайдемо наявність обраного кольору
  const selectedColorStock = lamp.colors.find(c => c.color === color)?.stock || 0;

  const handleGoBack = () => {
    navigate('/catalog');
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setQuantity(1); // Скидаємо кількість при зміні кольору
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Math.min(Math.max(1, event.target.value), selectedColorStock);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (color) {
      // Перевірка, чи є вже товар з таким кольором у кошику
      const existingItem = cartItems.find(item => item.id === lamp.id && item.selectedColor === color);
      const availableStock = selectedColorStock - (existingItem ? existingItem.quantity : 0);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;
        if (updatedQuantity > selectedColorStock) {
          alert('Ви не можете додати більше товару, ніж є в наявності для обраного кольору.');
          return;
        }

        const updatedItem = { ...existingItem, quantity: updatedQuantity };
        const updatedCart = cartItems.map(item =>
            item.id === lamp.id && item.selectedColor === color ? updatedItem : item
        );
        dispatch(addToCart(updatedCart));
      } else {
        if (quantity > availableStock) {
          alert('Ви не можете додати більше товару, ніж є в наявності для обраного кольору.');
          return;
        }

        dispatch(addToCart([...cartItems, { ...lamp, selectedColor: color, quantity }]));
      }
    } else {
      alert('Будь ласка, виберіть колір.');
    }
  };

  return (
      <div className="lamp-detail-container">
        <div className="lamp-detail">
          <img src={process.env.PUBLIC_URL + '/' + lamp.image} alt={lamp.title} width="700" height="500" />
          <div className="lamp-info">
            <button className="characteristic-btn blue">1 characteristic</button>
            <button className="characteristic-btn black">2 characteristic</button>
            <h3>{lamp.title}</h3>
            <p>{lamp.description}</p>
            <div className="lamp-detail-add-info">
              <div className="lamp-id">
                <h4>ID</h4>
                <p className="lamp-id-number">{lamp.id}</p>
              </div>
              <div className="lamp-selector-container">
                <h4>Select Color:</h4>
                <select className="lamp-selector" value={color} onChange={handleColorChange}>
                  <option>Select</option>
                  {lamp.colors.map((c) => (
                      <option key={c.color} value={c.color}>{c.color}</option>
                  ))}
                </select>
              </div>
              <div className="lamp-quantity-container">
                <h4>Select Quantity:</h4>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={selectedColorStock} // Обмежуємо за доступним кольором
                />
                <p>Available: {selectedColorStock}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lamp-actions">
          <p className="lamp-price">Price: {lamp.price} uah</p>
          <div className="action-buttons">
            <button onClick={handleGoBack}>Go Back</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  );
}

export default LampDetail;
