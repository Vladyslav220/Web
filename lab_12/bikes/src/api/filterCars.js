import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api'

export const filterCars = async (searchQuery, sortType, fuel) => {
  try {
    console.log(process.env.BACK_LINK)
    const response = await axios.get(`/cars/filtered`
      , {
      params: { searchQuery, sortType, fuel },
    }
  );
  console.log(response)
    return response.data.data.cars;
  } catch (error) {
    console.error('Error fetching cars data:', error);
  }
};