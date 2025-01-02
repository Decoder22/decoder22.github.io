import { useState } from 'react'
import styled from 'styled-components'
import { z } from 'zod'
import { StatusModal } from '../common/status-modal'

interface FormData {
  name: string
  email: string
  message: string
}

interface ApiResponse {
  status: number
  success: boolean
  message?: string
  error?: string
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [modalState, setModalState] = useState({
    isOpen: false,
    isSuccess: false,
    message: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    
    // Validate form data before submission
    try {
      contactFormSchema.parse(formData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path) {
            errorMessages[err.path[0]] = err.message
          }
        })
        setErrors(errorMessages)
        return // Exit early if validation fails
      }
    }

    setIsLoading(true)

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx2XitQsJG0QaLww7sLh_qCbh0RNI3AG-yGUj2q5IE444Ytwr8QLeqLzW-tZ1Dvsfko/exec', {
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        redirect: "follow",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data: ApiResponse = await response.json()

      console.log(JSON.stringify(data))

      if (data.success) {
        setModalState({
          isOpen: true,
          isSuccess: true,
          message: data.message || 'Message sent successfully!'
        })
        // Reset form and errors
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        setErrors({})
      } else {
        const errorMessage = response.status >= 400 && response.status < 500
          ? (data.error || "An error occurred while sending your message")
          : "I'm sorry. An unknown error occurred. Please try sending me an email instead!"
        
        setModalState({
          isOpen: true,
          isSuccess: false,
          message: errorMessage
        })
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        isSuccess: false,
        message: "I'm sorry. An unknown error occurred. Please try sending me an email instead!"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
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

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </StyledForm>

      <StatusModal
        isOpen={modalState.isOpen}
        isSuccess={modalState.isSuccess}
        message={modalState.message}
        onClose={handleCloseModal}
        autoClose={modalState.isSuccess}
      />
    </FormContainer>
  )
}

const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Please enter your name (at least 2 characters)')
    .max(50, 'Name is too long (maximum 50 characters)')
    .regex(
      /^[a-zA-Z\s\-']+$/,
      'Name can only contain English letters, spaces, hyphens, and apostrophes'
    ),
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Please enter your email address')
    .max(100, 'Email is too long (maximum 100 characters)')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address using only English characters'
    ),
  message: z.string()
    .min(10, 'Please enter a message (at least 10 characters)')
    .max(250, 'Message is too long (maximum 250 characters)')
    .regex(
      /^[a-zA-Z0-9\s.,!?'"()\-_\n]+$/,
      'Message can only contain English letters, numbers, and basic punctuation'
    )
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