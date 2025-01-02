import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { Menu } from '@mui/icons-material'
import styled from "styled-components"

const MobileMenuContainer = styled.div`
    position: relative;
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoImage = styled.img`
    height: 3rem;
    width: 4rem;
    object-fit: cover;
    cursor: pointer;
`

const MobileMenuButton = styled.div`
    position: absolute;
    height: 2rem;
    left: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    
    svg {
        width: 2rem;
        height: 2rem;
    }
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <MobileMenuContainer>
            <MobileMenuButton onClick={() => setShowMenu(!showMenu)}>
                <Menu />
            </MobileMenuButton>
            
            <LogoImage 
                src={logo} 
                alt="Logo" 
                onClick={scrollToTop}
            />
            
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
                    About Me
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
                    Projects
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