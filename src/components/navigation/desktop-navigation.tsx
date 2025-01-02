import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { ChatBubble } from '@mui/icons-material'
import { Menu } from '@mui/icons-material'
import styled from "styled-components";

const NavigationBar = styled.div`
    height: 5rem;
    width: 100vw;
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
`


const NavigationBarImage = styled.img`
    height: 3rem;
    width: 4rem;
    object-fit:cover;
`

const DesktopMenu = styled.div`
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
`

const DesktopMenuLink = styled(Link)`
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.25rem;

    &:hover {
        background-color: blue;
    }

    &.active {

        background-color: blue;
    }
`;

const NavButton = styled(Link)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
    
  &:hover::after {
    width: 100%;
  }
`

export default function DesktopNavigation() {

    const contactMeLink = function() {
        document.getElementById('contactPage')?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <NavigationBar>
            <NavigationBarImage src={logo} alt="Logo"></NavigationBarImage>
            <DesktopMenu>
                <NavButton activeClass='active' to='intro'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home </NavButton>
                <NavButton activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</NavButton>
                <NavButton activeClass='active' to='works'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</NavButton>
                <NavButton activeClass='active' to='contact'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact Me</NavButton>
            </DesktopMenu>
        </NavigationBar>
        
    )
}