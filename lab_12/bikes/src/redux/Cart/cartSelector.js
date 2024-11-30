// Selector to get all cars in the cart
export const selectCarsInCart = (state) => state.cart.carsInCart;

// Selector to get the total amount of the cart
export const selectTotalAmount = (state) => state.cart.totalAmount;

// Selector to check if the cart is loading
export const selectIsLoading = (state) => state.cart.isLoading;

// Selector to get any error in the cart operations
export const selectCartError = (state) => state.cart.error;
