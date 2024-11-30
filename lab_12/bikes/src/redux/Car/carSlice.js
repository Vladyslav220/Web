import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, updateAvaliableQuantity, fetchCarById } from './carOperations';
import { Notify } from 'notiflix';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  cars: [],
  car: {},
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: { ...initialState },
  reducers: {
    updateCarQuantity: (state, action) => {
      const { carId, quantity } = action.payload;
      const existingCar = state.cars.find(item => item._id === carId);
      if (existingCar) {
        existingCar.quantity = quantity;
      } else {
        Notify.failure("Car not found.");
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getAllCars.rejected, handleRejected)

      .addCase(updateAvaliableQuantity.pending, handlePending)
      .addCase(updateAvaliableQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        const {carId, quantity} = action.payload
        console.log(quantity)
        const existingCar = state.cars.find(item => item._id === carId);
        if(existingCar.quantity){
          existingCar.quantity = quantity 
        }
        console.log(existingCar.quantity)      
      })
      .addCase(updateAvaliableQuantity.rejected, handleRejected)

      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        const car = action.payload
        state.isLoading = false;
        const existingCar = state.cars.find(item => item._id === car._id);
        if(existingCar.quantity){
          car.quantity =  existingCar.quantity
        }
        state.car = car
      })
      .addCase(fetchCarById.rejected, handleRejected)
  }
});


export const { updateCarQuantity } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
