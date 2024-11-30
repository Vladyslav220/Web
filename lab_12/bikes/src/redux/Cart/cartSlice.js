import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, updateQuantity, updateAvaliableQuantity } from './cartOperations';
import Notiflix from 'notiflix';

const initialState = {
  carsInCart: [],
  totalAmount: 0,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.carsInCart = [];
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, handlePending)
      .addCase(addToCart.fulfilled, (state, action) => {
        const car = action.payload;
        const existingCar = state.carsInCart.find(item => item._id === car._id);

        if (existingCar ) {
            if (existingCar.quantity <= existingCar.availableQuantity) {
              if (existingCar.quantity + car.quantity > car.availableQuantity) {
                Notiflix.Notify.failure('The quantity of adding cars is bigger than avaliable!')
              } else {
                existingCar.quantity += car.quantity;
                state.totalAmount += car.price * car.quantity;
                // state.totalAmount = 0;
                Notiflix.Notify.success(`The car with amount ${car.quantity} succesfully added!`)
              }
          }
        } else {
          state.carsInCart.push(car);
          state.totalAmount += car.price * car.quantity;
          Notiflix.Notify.success(`The ${car.quantity} ${car.color} ${car.name} was succesfully added!`)
        }
      })
      .addCase(addToCart.rejected, handleRejected)

      .addCase(removeFromCart.pending, handlePending)
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const carId = action.payload;
        const carIndex = state.carsInCart.findIndex(item => item._id === carId);
        if (carIndex !== -1) {
          const car = state.carsInCart[carIndex];
          state.totalAmount -= car.price * car.quantity;
          // state.totalAmount = 0
          state.carsInCart.splice(carIndex, 1);
        }
      })
      .addCase(removeFromCart.rejected, handleRejected)

      .addCase(updateQuantity.pending, handlePending)
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { carId, quantity } = action.payload;
        const car = state.carsInCart.find((car) => car._id === carId);
        if (car && quantity <= car.availableQuantity) {
          state.totalAmount += (quantity - car.quantity) * car.price;
          car.quantity = quantity;
        }
      })
      .addCase(updateQuantity.rejected, handleRejected)


      .addCase(updateAvaliableQuantity.pending, handlePending)
      .addCase(updateAvaliableQuantity.fulfilled, (state, action) => {
        const { carId, avaliableQuantity } = action.payload;
        for (let i = 0; i < state.carsInCart.length; i++) {
          if (state.carsInCart[i]._id.includes(carId)) {
            state.carsInCart[i].availableQuantity = avaliableQuantity
          }
          
        }
      })
      .addCase(updateAvaliableQuantity.rejected, handleRejected)
  }
});

export const { clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
