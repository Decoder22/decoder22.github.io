import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function SocialInformation() {
  return (
    <ContactInfo>
      <InfoTitle>Contact Information</InfoTitle>
      
      <InfoSection>
        <InfoLabel>Name</InfoLabel>
        <InfoText>Brian Johncox</InfoText>
      </InfoSection>

      <InfoSection>
        <InfoLabel>Location</InfoLabel>
        <InfoText>Chicago, IL</InfoText>
      </InfoSection>

      <SocialLinks>
        <InfoLabel>Connect With Me</InfoLabel>
        <SocialIconsContainer>
          <SocialLink 
            href="https://github.com/Decoder22" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/brian-johncox" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </SocialLink>
        </SocialIconsContainer>
      </SocialLinks>
    </ContactInfo>
  )
}

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
`

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
`

const InfoSection = styled.div`
  margin-bottom: 1.5rem;
`

const InfoLabel = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`

const InfoText = styled.p`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
`

const SocialLinks = styled.div`
  margin-top: 2rem;
`

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

const SocialLink = styled.a`
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export { SocialInformation } 