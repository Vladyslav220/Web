const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedCartAdd = [...state.cartItems, action.payload];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartAdd));
            return {
                ...state,
                cartItems: updatedCartAdd,
            };

        case 'UPDATE_CART':
            localStorage.setItem('cartItems', JSON.stringify(action.payload));
            return {
                ...state,
                cartItems: action.payload,
            };

        case 'REMOVE_FROM_CART':
            // Оновлена логіка видалення товару за id і selectedColor
            const updatedCartRemove = state.cartItems.filter(item =>
                !(item.id === action.payload.productId && item.selectedColor === action.payload.selectedColor)
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedCartRemove));
            return {
                ...state,
                cartItems: updatedCartRemove,
            };

        case 'CLEAR_CART':
            // Очистити кошик
            localStorage.removeItem('cartItems');
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
