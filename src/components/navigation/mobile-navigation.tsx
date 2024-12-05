import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { ChatBubble } from '@mui/icons-material'
import { Menu } from '@mui/icons-material'
import styled from "styled-components";

export default function MobileNavigation() {

    const [showMenu, setShowMenu] = useState(false);

    const contactMeLink = function() {
        document.getElementById('contactPage')?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
        <div className='mobMenuBtn'><Menu  onClick={() => setShowMenu(!showMenu)}/></div>
                <div className='mobileMenu' style={{display:  showMenu ? 'flex' : 'none'}}>
                    <Link activeClass='active' to='intro'  spy={true} smooth={true} offset={-50} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Home </Link>
                    <Link activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='works'  spy={true} smooth={true} offset={-50} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                    <Link activeClass='active' to='contactPage'  spy={true} smooth={true} offset={-50} duration={500} className='mobileListItem' onClick={() => setShowMenu(false)}>Contact Me</Link>
                </div>
        </>
        
    )
}