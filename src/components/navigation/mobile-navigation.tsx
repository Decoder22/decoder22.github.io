import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { Menu } from '@mui/icons-material'
import styled from "styled-components"

const MobileMenuButton = styled.div`
    position: absolute;
    height: 2rem;
    top: calc(2.5rem - 1rem); // Half of 5rem nav height minus half of button height
    left: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    
    svg {
        width: 2rem;
        height: 2rem;
    }
`

const MobileMenuContainer = styled.div`
    position: relative;
    height: 100%;
`

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 99;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MobileMenuItem = styled(Link)`
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default function MobileNavigation() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <MobileMenuContainer>
            <MobileMenuButton onClick={() => setShowMenu(!showMenu)}>
                <Menu />
            </MobileMenuButton>
            
            <MobileMenuOverlay isOpen={showMenu}>
                <MobileMenuItem 
                    activeClass='active' 
                    to='hero'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500} 
                    onClick={() => setShowMenu(false)}
                >
                    Home
                </MobileMenuItem>
                <MobileMenuItem 
                    activeClass='active' 
                    to='AboutMe'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500} 
                    onClick={() => setShowMenu(false)}
                >
                    About
                </MobileMenuItem>
                <MobileMenuItem 
                    activeClass='active' 
                    to='projects'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500} 
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </MobileMenuItem>
                <MobileMenuItem 
                    activeClass='active' 
                    to='contact'  
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500} 
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </MobileMenuItem>
            </MobileMenuOverlay>
        </MobileMenuContainer>
    )
}