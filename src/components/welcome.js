import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import financeImage from '../assets/finance.png'; // Adjust the path based on your directory structure

const WelcomeContainer = styled.div`
  background:linear-gradient(100deg, #ff1e71, #000000);
  color: white;
  padding: 5rem 2rem;
  font-family: 'Poppins', sans-serif; 
  text-align: center;
  background-size: cover;
  background-position: center;
  height: 41rem;  
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  animation: slideInTop 2s ease-in forwards;  
  position: relative;
  left: -20rem;
  top: 4rem;
`;
const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin-top: auto;
  position: relative;
  animation: ${moveUpDown} 1s infinite alternate ease-in-out;
  border-radius: 256px;
  box-shadow: 2px 21px 14px rgba(0, 0, 0, 0.3);
  top: -12rem;
  left: 24rem;
`;
const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  
  animation: fadeIn 3s ease-in forwards;  
  position: relative;
  left: -20rem;
  top: 4rem;
`;
const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  
  animation:fadeIn 3s ease-in forwards;
  position: relative;
  left: -20rem;
  top: 4rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;
const Button = styled.button`
  background: linear-gradient(100deg, #ffffff, #ffffff);
  color: #1b1b1b;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif; 
  position: relative;
  left: -20rem;
  top: -23rem;
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
      <Title>Welcome to FinSure 🪙</Title>
      <Subtitle>Redefining the standard for digital Insurance</Subtitle>
      <Description>Get quota for Cars and Bikes</Description>
      <Image src={financeImage} alt="Finance" />
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