import React from 'react'
import bg from '../../assets/hero.png'
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  height: calc(100vh / 2); /* Ensures the image is never taller than 1/3 of the viewport height */
  overflow: hidden; /* Ensures the image doesn't spill outside the container */
  position: relative; /* Allows text and overlay to be positioned on top of the image */
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image maintains its aspect ratio while covering the container */
  object-position: center center; /* Keeps the center of the image visible */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 48px;

  @media (max-width: 1024px) {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  max-width: 90%;
  color: #000000;

  span {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: #000000;
  margin-top: 16px;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export default function Hero(){
    return (
        <HeroContainer>
            <HeroImage src={bg} alt="Hero" />
            <Overlay />
            <TextContainer>
                <Title>Hello, My name is <span>Brian Johncox</span></Title>
                <Subtitle>I am a Full Stack Engineer</Subtitle>
            </TextContainer>
        </HeroContainer>
    )
}