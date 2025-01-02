import { useState } from 'react'
import styled from 'styled-components'
import { z } from 'zod'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const validatedData = contactFormSchema.parse(formData)
      console.log('Form data:', validatedData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path) {
            errorMessages[err.path[0]] = err.message
          }
        })
        setErrors(errorMessages)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormContainer>
      <FormTitle>Get in Touch</FormTitle>
      <FormDescription>
        Have a question or want to work together? Feel free to reach out!
      </FormDescription>
      
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            hasError={!!errors.message}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  )
}

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const FormContainer = styled.div`
  width: 100%;
`

const FormTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const FormDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem;
  border: 2px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 0.75rem;
  border: 2px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
`

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export { ContactForm } 