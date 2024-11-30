import React, { useEffect, useState } from 'react';
import { Container } from '../Container/Container';
import {
  CarPageWrapper,
  PageContainer,
  MainContent,
  LeftColumn,
  RightColumn,
  ImageContainer,
  Image,
  Title,
  Price,
  Location,
  Details,
  DetailItem,
  Label,
  Reviews,
  Description
} from './CarInfo.styled';
import { addToCart, 
} from '../../redux/Cart/cartOperations';
import { useDispatch } from 'react-redux';
import ColorSelect from './ColorSelect';
import QuantitySelect from './QuantitySelect';
import GetNewCarButton from './GetNewCarBtn';
import { Notify } from 'notiflix';

const CarItem = ({ car }) => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [avaliableQty, setAvaliableQty] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const handleGetNewCar = () => {
    dispatch(addToCart({...car, _id:car._id+selectedColor, quantity: Number(quantity),
      availableQuantity: Number(car.quantity), color: selectedColor}));
  };
  // const value = Math.floor(Number(event.target.value));

  const handleQuantityChange = (event) => {
    if (event.target.value < 0) {
      Notify.failure("The negative value appered!")
    } else if(event.target.value > avaliableQty){
      Notify.failure("I think you write a lot!")
    } else {
    setQuantity(event.target.value);
    }
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value)
  }

  useEffect(() => {
    setAvaliableQty(car ? car.quantity : 1)
  }, [car])

  return (
    <CarPageWrapper>
      <Container>
        <PageContainer>
          <MainContent>
            <LeftColumn>
              <ImageContainer>
                <Image src={car.image} alt={car.name} />
              </ImageContainer>
              <Title>{car.name}</Title>
              <Price>${car.price}</Price>
              <Location>{car.location}</Location>
              
              <Details>
                <DetailItem>
                  <Label>Year:</Label>
                  <span>{car.year}</span>
                </DetailItem>
                <DetailItem>
                  <Label>Drive:</Label>
                  <span>{car.drive}</span>
                </DetailItem>
                <DetailItem>
                  <Label>Fuel:</Label>
                  <span>{car.fuel}</span>
                </DetailItem>
                <DetailItem>
                  <Label>Transmission:</Label>
                  <span>{car.transmission}</span>
                </DetailItem>
                <DetailItem>
                  <Label>Mileage:</Label>
                  <span>{car.mileage} km</span>
                </DetailItem>
              </Details>

              <Reviews>
                <strong>{car.reviews} Reviews</strong>
              </Reviews>

              <Description>
                {car.description}
              </Description>
            </LeftColumn>

            <RightColumn>
              <ColorSelect colors={car.colors} selectedColor={selectedColor} onChange={handleColorChange} />
              <QuantitySelect onChange={handleQuantityChange} quantity={quantity} availableQuantity={avaliableQty}/>
              <GetNewCarButton onClick={handleGetNewCar} />
            </RightColumn>
          </MainContent>
        </PageContainer>
      </Container>
    </CarPageWrapper>
  );
};

export default CarItem;
