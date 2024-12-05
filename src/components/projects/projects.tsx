import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ProjectCard } from './project-card'
import { ProjectData } from './projects.types'

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Carousel>
      </CarouselContainer>
    </ProjectsSection>
  )
}

export { Projects }

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
`

const ProjectsTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #0ea5e9;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CarouselContainer = styled.div`
  .carousel-container {
    padding: 1rem 0;
  }

  .carousel-item {
    padding: 0 0.5rem;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }

  /* Custom arrow styling */
  .react-multiple-carousel__arrow {
    background: ${({ theme }) => theme.colors.primary};
    min-width: 40px;
    min-height: 40px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
  }
`

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'extension_video_speed',
    description: 'A web browser extension that allows users to control video playback speed with an intuitive interface.',
    repoUrl: 'https://github.com/yourusername/extension_video_speed',
    type: 'repository'
  },
  {
    id: 2,
    title: 'spotify_api_app',
    description: 'A Spotify-like application that simulates music streaming with custom playlists and recommendations.',
    repoUrl: 'https://github.com/yourusername/spotify_api_app',
    type: 'repository'
  },
  {
    id: 3,
    title: 'URL_Shortener_NextJs',
    description: 'A URL shortener application built with Next.js for converting long URLs into concise, shareable links.',
    repoUrl: 'https://github.com/yourusername/url-shortener',
    type: 'repository'
  },
  {
    id: 4,
    title: 'weatherApp_pwa',
    description: 'A Progressive Web App providing real-time weather updates and forecasts.',
    repoUrl: 'https://github.com/yourusername/weather-app',
    type: 'repository'
  },
  {
    id: 5,
    title: 'portfolio_site',
    description: 'A personal portfolio website built with React and styled-components.',
    repoUrl: 'https://github.com/yourusername/portfolio',
    type: 'repository'
  }
] 