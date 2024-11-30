import React, { useState, useEffect } from 'react';
import CarCard from './CarItem';
import { Container } from '../Container/Container';
import {
  Section,
  RecommendWrapper,
  Heading,
  CarsContainer,
  LoadMoreButton
} from './RecomenddedCars.styled'
import { fetchAllCars } from '../../api/getAll';
import Loader from '../Loader/Loader';

import { useDispatch } from 'react-redux';
// import { getAllCars } from '../../redux/Car/carOperations';

const RecommendedCars = () => {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const [visibleCars, setVisibleCars] = useState(3); 
  const [cars, setCars] = useState([]);

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 3);
  };

  const handleLoadLess = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars - 3);
  };


  useEffect(()=> {
    // dispatch(getAllCars())
    fetchAllCars().then(setCars)
    setIsLoading(false)
  }, [dispatch])

  return (
    <Section>
        <Container>
            <RecommendWrapper>
                <Heading>Recommended Bikes</Heading>
                {isLoading ? <Loader/> :
                <CarsContainer>
                    {cars.slice(0, visibleCars).map((car) => (
                    <CarCard key={car._id} car={car} />
                    ))}
                </CarsContainer>
                }
                <LoadMoreButton onClick={visibleCars <= 3 ? handleLoadMore : handleLoadLess}>Load {visibleCars <= 3 ? "More" : "Less"}</LoadMoreButton>
            </RecommendWrapper>
        </Container>
    </Section>
  );
};

export default RecommendedCars;