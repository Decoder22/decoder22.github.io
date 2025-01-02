import React from 'react'
import styled from "styled-components"
import DesktopNavigation from './desktop-navigation'
import MobileNavigation from './mobile-navigation'

const NavigationBar = styled.nav`
    background: ${({ theme }) => theme.colors.primary};
    height: 5rem;
    width: 100vw;
    position: sticky;
    top: 0;
    z-index: 3;
`

const StyledDesktopNavigation = styled.div`
    @media screen and (max-width: 720px) {
        display: none;
    }
`

const StyledMobileNavigation = styled.div`
    display: none;
    @media screen and (max-width: 720px) {
        display: block;
    }
`

export default function Navigation() {
    return (
        <NavigationBar>
            <StyledDesktopNavigation>
                <DesktopNavigation />
            </StyledDesktopNavigation>
            <StyledMobileNavigation>
                <MobileNavigation />
            </StyledMobileNavigation>
        </NavigationBar>
    )
}