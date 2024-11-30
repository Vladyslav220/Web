export const addToCart = (updatedCart) => ({
    type: 'UPDATE_CART',
    payload: updatedCart,
});


export const removeFromCart = (productId, selectedColor) => ({
    type: 'REMOVE_FROM_CART',
    payload: { productId, selectedColor },
});


export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    };
};
