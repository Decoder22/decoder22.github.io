import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa6'
import { ProjectData } from './projects.types'

function ProjectCard({ title, description, repoUrl, projectUrl }: ProjectData) {
  function handleCardClick() {
    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card onClick={handleCardClick} $isClickable={!!projectUrl}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {repoUrl && (
          <GithubLink 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={20} />
          </GithubLink>
        )}
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

export { ProjectCard }

const Card = styled.div<{ $isClickable: boolean }>`
  min-width: 300px;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};

  &:hover {
    transform: ${({ $isClickable }) => ($isClickable ? 'translateY(-5px)' : 'none')};
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`

const GithubLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
` 