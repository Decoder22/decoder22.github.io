import React from 'react'
import styled from 'styled-components'
import defaultLogo from '../../assets/logo.png'

interface Technology {
    name: string
    icon: string
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    width: 100%;
    margin: 2rem 0;
`

const TechCard = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff10;
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
    }

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        margin-right: 1rem;
    }

    span {
        color: #fff;
        font-size: 1rem;
    }
`

const technologies: Technology[] = [
    { name: 'C Language', icon: defaultLogo },
    { name: 'TypeScript', icon: defaultLogo },
    { name: 'Express', icon: defaultLogo },
    { name: 'NodeJS', icon: defaultLogo },
    { name: 'Postman', icon: defaultLogo },
    { name: 'Dart', icon: defaultLogo },
    { name: 'Flutter', icon: defaultLogo },
    { name: 'React Native', icon: defaultLogo },
    { name: 'HTML', icon: defaultLogo },
    { name: 'CSS', icon: defaultLogo },
    { name: 'Bootstrap', icon: defaultLogo },
    { name: 'Redux', icon: defaultLogo },
    { name: 'Sass', icon: defaultLogo },
    { name: 'Javascript', icon: defaultLogo },
    { name: 'Tailwind CSS', icon: defaultLogo },
    { name: 'React', icon: defaultLogo },
    { name: 'MySQL', icon: defaultLogo },
    { name: 'Mongo DB', icon: defaultLogo },
    { name: 'Heroku', icon: defaultLogo },
    { name: 'Git', icon: defaultLogo },
    { name: 'Firebase', icon: defaultLogo },
]

export function TechnologyGrid() {
    return (
        <Grid>
            {technologies.map((tech) => (
                <TechCard key={tech.name}>
                    <img src={tech.icon} alt={`${tech.name} logo`} />
                    <span>{tech.name}</span>
                </TechCard>
            ))}
        </Grid>
    )
} 