import React from 'react'
import styled from 'styled-components'
import { FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs, FaSalesforce } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiFirebase, SiMysql, SiHeroku } from 'react-icons/si'
import { TbBolt } from 'react-icons/tb'
import { VscSymbolNamespace } from 'react-icons/vsc'
import { TechnologyGrid, Technology } from './technology-grid'
import { SectionTitle } from '../common/section-title'

const AboutMeSection = styled.section`
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
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
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.text};
    }
`

export default function AboutMe() {
    const technologies: Technology[] = [
        {
            name: 'TypeScript',
            icon: SiTypescript
        },
        {
            name: 'JavaScript',
            icon: SiJavascript
        },
        {
            name: 'NodeJS',
            icon: FaNodeJs
        },
        {
            name: 'HTML',
            icon: FaHtml5
        },
        {
            name: 'CSS',
            icon: FaCss3Alt
        },
        {
            name: 'MySQL',
            icon: SiMysql
        },
        {
            name: 'Apex',
            icon: VscSymbolNamespace
        },
        {
            name: 'Lightning Web Components',
            icon: TbBolt
        },
        {
            name: 'Git',
            icon: FaGitAlt
        },
        {
            name: 'Heroku',
            icon: SiHeroku
        },
        {
            name: 'Firebase',
            icon: SiFirebase
        },
        {
            name: 'Salesforce',
            icon: FaSalesforce
        }
    ]

    return (
        <AboutMeSection id='AboutMe'>
            <ContentContainer>
                <SectionTitle>About Me</SectionTitle>
                <h3>A bit about me</h3>
                <p>I'm a Purdue Boilermaker with a knack for building intuitive, scalable web applications. With experience in React, TypeScript, and Node.js, I specialize in crafting fluid user interfaces and solving complex technical challenges. My projects range from developer tools to innovative apps, reflecting my curiosity and drive to make technology accessible. Beyond coding, I love diving into 3D printing, gaming, and exploring the fascinating world of IoT. I'm always eager to learn, create, and collaborate on projects that push boundaries. </p>
                <h3>Technologies and Tools</h3>
                <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
                <TechnologyGrid technologies={technologies} />
            </ContentContainer>
        </AboutMeSection>
    )
} 