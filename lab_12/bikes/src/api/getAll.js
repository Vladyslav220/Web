import axios from 'axios'


export const fetchAllCars = async () => {
    try {
      const response = await axios.get('/cars');
      const carsData = response.data.data.cars;
      return carsData;
    } catch (error) {
      console.error('Error fetching cars data:', error);
    }
  };


