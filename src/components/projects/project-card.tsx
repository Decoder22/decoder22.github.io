import styled from 'styled-components'
import { FaGithub, FaFolder } from 'react-icons/fa6'
import { ProjectData } from './projects.types'

function ProjectCard({ title, description, repoUrl, type }: ProjectData) {
  return (
    <Card>
      <CardHeader>
        <FaFolder size={24} />
        <GithubLink href={repoUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </GithubLink>
      </CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

export { ProjectCard }

const Card = styled.div`
  min-width: 300px;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
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

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
` 