import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { ChatBubble } from '@mui/icons-material'
import { Menu } from '@mui/icons-material'
import styled from "styled-components";
import DesktopNavigation from './desktop-navigation'

const NavigationBar = styled.nav`
    background: ${({ theme }) => theme.colors.primary};
    height: 5rem;
    width: 100vw;
    position: sticky;
    top: 0;
    z-index: 3;
`

const StyledDesktopNavigation = styled.div`
    @media screen and (max-width:720px) {
        display: none;
    }
`


export default function Navigation() {

    return (
        <NavigationBar>
            <StyledDesktopNavigation>
                <DesktopNavigation />
            </StyledDesktopNavigation>
        </NavigationBar>
    )
}