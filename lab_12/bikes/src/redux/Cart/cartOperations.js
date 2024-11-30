import { createAsyncThunk } from '@reduxjs/toolkit';

// Example operation to add item to cart (no API call)
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  (car, thunkAPI) => {
    try {
      // console.log(car, quantity, selectedColosr)
      return car; // Just return the car object to add it to the cart
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Example operation to remove item from cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  (carId, thunkAPI) => {
    try {
      return carId; // Return the car ID to remove from the cart
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Example operation to update quantity of a car in the cart
export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  ({ carId, quantity }, thunkAPI) => {
    try {
      return { carId, quantity };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvaliableQuantity = createAsyncThunk(
  'cart/updateAvaliableQuantity',
  ({ carId, avaliableQuantity }, thunkAPI) => {
    try {
      return { carId, avaliableQuantity };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }

);



