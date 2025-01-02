import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ProjectCard } from './project-card'
import { ProjectData } from './projects.types'
import { SectionTitle } from '../common/section-title'

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: Math.min(projectsData.length, 3),
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: Math.min(projectsData.length, 2),
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
      <SectionTitle isSecondary>Projects</SectionTitle>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={projectsData.length > 1}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
          centerMode={projectsData.length < 3}
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
  margin: 0 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`

const CarouselContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  
  .carousel-container {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }

  .carousel-item {
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }

  /* Center the track when fewer items */
  .react-multi-carousel-track {
    justify-content: center;
    margin: 0 auto;
  }

  /* Custom arrow styling */
  .react-multiple-carousel__arrow {
    background: ${({ theme }) => theme.colors.tertiary};
    min-width: 40px;
    min-height: 40px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
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
    title: 'MultiForce',
    description: 'A Raycast extension that streamlines Salesforce development by enabling quick, seamless logins to multiple orgs directly from your desktop.',
    repoUrl: 'https://github.com/Decoder22/MultiForce',
    type: 'project',
    projectUrl: 'https://www.raycast.com/brian_j_decoder22/multi-force'
  },
  {
    id: 2,
    title: 'SimpleStroke',
    description: 'An Apple Watch app that allows you to easily keep track of your golf game directly on your watch.',
    type: 'project',
    projectUrl: 'https://apps.apple.com/us/app/simplestroke/id1519102080'
  }
] 