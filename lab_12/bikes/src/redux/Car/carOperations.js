import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCars = createAsyncThunk(
    'car/fetchCars',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/cars')
            return response.data.data.cars
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateAvaliableQuantity = createAsyncThunk(
    'car/updateavaliableQuantity',
    async({carId, quantity}, thunkAPI) => {
        try {
            return {carId, quantity}
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const fetchCarById = createAsyncThunk( 
    'car/getCarById',
    async (id) => {
    try {
      const response = await axios.get(`/cars/car/${id}`);
      return response.data.data.car; 
    } catch (error) {
      console.error("Error fetching car data:", error);
      throw error;
    }
  }
);