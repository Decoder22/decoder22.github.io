import styled from 'styled-components'

interface SectionTitleProps {
  children: React.ReactNode
  isSecondary?: boolean
  className?: string
}

export function SectionTitle({ 
  children, 
  isSecondary = false,
  className 
}: SectionTitleProps) {
  return (
    <StyledTitle 
      $isSecondary={isSecondary} 
      className={className}
    >
      {children}
    </StyledTitle>
  )
}

const StyledTitle = styled.h2<{ $isSecondary: boolean }>`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme, $isSecondary }) => 
    $isSecondary ? '#FFFFFF' : theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
` 