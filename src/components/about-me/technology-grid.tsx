import styled from 'styled-components'
import { IconType } from 'react-icons'

interface Technology {
  name: string
  icon: IconType
  description?: string
}

interface TechnologyGridProps {
  technologies: Technology[]
}

function TechnologyGrid({ technologies }: TechnologyGridProps) {
  return (
    <Grid>
      {technologies.map((tech) => (
        <TechTag key={tech.name}>
          <IconWrapper>
            <tech.icon size={20} />
          </IconWrapper>
          <TechName>{tech.name}</TechName>
        </TechTag>
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`

const TechTag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ theme }) => `${theme.colors.tertiary}dd`};
  }
`

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
`

const TechName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
`

export { TechnologyGrid }
export type { Technology } 