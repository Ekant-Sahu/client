import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';



const WelcomeContainer = styled.div`
  background-color: #0e0e0e;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #00ffb9;
  color: #1b1b1b;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #00e6a5;
  }
`;


const Welcome = () => {
  

  const navigate = useNavigate();

  const navigateToFormPageCar = () => {
    navigate('Carform');
  };
  const navigateToFormPageBike = () => {
    navigate('Bikeform');
  };
 

  return (
    <WelcomeContainer>
      <Title>Welcome to FinSure!!</Title>
      <Subtitle>Redefining the standard for digital Insurance</Subtitle>
      <Description>Get quota for Cars and Bikes</Description>
      <ButtonContainer>
        <Button onClick={navigateToFormPageCar}>
          <FontAwesomeIcon icon={faCar} />
          Cars
        </Button>
        <Button onClick={navigateToFormPageBike}>
          <FontAwesomeIcon icon={faMotorcycle} />
          Bikes
        </Button>
      </ButtonContainer>
    </WelcomeContainer>
  );
};

export default Welcome;