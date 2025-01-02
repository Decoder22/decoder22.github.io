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
    object-fit: cover;
    cursor: pointer;
`

const DesktopMenu = styled.div`
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
`

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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <NavigationBar>
            <NavigationBarImage 
                src={logo} 
                alt="Logo" 
                onClick={scrollToTop}
            />
            <DesktopMenu>
                <NavButton 
                    activeClass='active' 
                    to='hero'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                >
                    Home
                </NavButton>
                <NavButton 
                    activeClass='active' 
                    to='AboutMe'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                >
                    About Me
                </NavButton>
                <NavButton 
                    activeClass='active' 
                    to='projects'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                >
                    Projects
                </NavButton>
                <NavButton 
                    activeClass='active' 
                    to='contact'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                >
                    Contact
                </NavButton>
            </DesktopMenu>
        </NavigationBar>
    )
}