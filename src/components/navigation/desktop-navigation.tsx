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

export default function DesktopNavigation() {

    const contactMeLink = function() {
        document.getElementById('contactPage')?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <NavigationBar>
            <NavigationBarImage src={logo} alt="Logo"></NavigationBarImage>
            <DesktopMenu>
                <DesktopMenuLink activeClass='active' to='intro'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home </DesktopMenuLink>
                <DesktopMenuLink activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</DesktopMenuLink>
                <DesktopMenuLink activeClass='active' to='works'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</DesktopMenuLink>
                <DesktopMenuLink activeClass='active' to='contact'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact Me</DesktopMenuLink>
            </DesktopMenu>
        </NavigationBar>
        
    )
}