import React, { useState, useEffect } from 'react';
import SearchInput from '../FilterHud/SearchInput';
import SearchButton from '../FilterHud/SearchButton';
import FilterSelect from '../FilterHud/FilterSelect';
import FilterButton from '../FilterHud/FilterButton';
import FuelFilterSelect from '../FilterHud/FuelFilter';
import CarCard from './CarItem';
import { Container } from '../Container/Container';
import {
  Section, 
  RecommendWrapper, 
  Heading, 
  FilterContainer, 
  SelectList, 
  CarsContainer
} from './CatalogCars.styled'
import { filterCars } from '../../api/filterCars';
import Loader from '../Loader/Loader';

const CatalogCars = () => {
  const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('year');
    const [fuel, setFuelType] = useState('all')
    const [cars, setCars] = useState([])

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleFuelTypeChange = (event) => {
      setFuelType(event.target.value);
    };
  
    const handleSortChange = (event) => {
      setSortType(event.target.value);
    };

    useEffect(()=> {
      filterCars(searchQuery.trim(), sortType, fuel).then(setCars)
      setIsLoading(false)
    }, [searchQuery, sortType, fuel])

  return (
    <Section>
      <Container>
        <RecommendWrapper>
          <Heading>Bike Catalog</Heading>
          <FilterContainer>
            <SelectList>
                <li key={0}><FuelFilterSelect label="Fuel type" value={fuel} onChange={handleFuelTypeChange}/></li>
                <li key={1}><FilterSelect label="Sort by" value={sortType} onChange={handleSortChange} /></li>
                <li key={2}><FilterButton /></li>
                <li key={3}><SearchInput value={searchQuery} onChange={handleSearchChange} /></li>
                <li key={4}><SearchButton  /></li>
            </SelectList>
          </FilterContainer>
          { isLoading ? <Loader/> :
            <CarsContainer>
                {cars.map((car) => (
                <CarCard key={car._id} car={car} />
                ))}
            </CarsContainer>
            }
        </RecommendWrapper>
      </Container>
    </Section>
  );
};

export default CatalogCars;
