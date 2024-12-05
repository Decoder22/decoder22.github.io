import React from 'react'
import styled from 'styled-components'
import { TechnologyGrid } from './technology-grid'

const AboutMeSection = styled.section`
    width: 100vw;
    background-color: #2B2F37;
    color: #fff;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
`

const ContentContainer = styled.div`
    width: 100%;
    max-width: 80rem; // Adjust max-width to control the center content width
    padding: 0 2rem; // Padding for left and right
    text-align: left;
    
    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align:center
    }

    h3 {
        color: #4D90FE;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.6;
    }
`

export default function AboutMe() {
    return (
        <AboutMeSection id='AboutMe'>
            <ContentContainer>
                <h2>About Me</h2>
                <h3>A bit about me</h3>
                <p>I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
                <h3>Technologies and Tools</h3>
                <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
                <TechnologyGrid />
            </ContentContainer>
        </AboutMeSection>
    )
} 