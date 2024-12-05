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
  background-color: rgba(0, 0, 0, 0.6); /* Adds the dark overlay */
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 50%; /* Left half of the screen */
  transform: translateY(-50%); /* Vertically center the text */
  padding-left: 20px; /* Add some padding from the left edge */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  z-index: 2; /* Ensure the text appears above the overlay */
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: white;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  color: darkblue;
  margin-top: 10px;
`;

export default function Hero(){
    return (
        <HeroContainer>
            <HeroImage src={bg} alt="Hero" />
            <Overlay />
            <TextContainer>
                <Title>Hello, My name is Brian Johncox</Title>
                <Subtitle>I am a Full Stack Engineer</Subtitle>
            </TextContainer>
        </HeroContainer>
    )
}