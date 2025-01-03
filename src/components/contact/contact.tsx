import styled from 'styled-components'
import { ContactForm } from './contact-form'
import { SocialInformation } from './social-information'
import { SectionTitle } from '../common/section-title'

function Contact() {
  return (
    <ContactSection id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactContainer>
        <ContactForm />
        <SocialInformation />
      </ContactContainer>
      <CopyrightSection>
        <CopyrightText>
          © {new Date().getFullYear()} All Rights Reserved
        </CopyrightText>
      </CopyrightSection>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const CopyrightSection = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  opacity: 0.8;
`

export { Contact } 