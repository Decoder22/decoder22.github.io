import React, { useEffect } from 'react'
import styled from 'styled-components'

interface StatusModalProps {
  isOpen: boolean
  isSuccess: boolean
  message: string
  onClose: () => void
  autoClose?: boolean
}

export function StatusModal({ isOpen, isSuccess, message, onClose, autoClose = false }: StatusModalProps) {
  useEffect(() => {
    if (autoClose && isOpen && isSuccess) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, isSuccess, onClose, autoClose])

  if (!isOpen) {
    return null
  }

  return (
    <ModalOverlay>
      <ModalContent>
        {isSuccess ? (
          <SuccessIcon>✓</SuccessIcon>
        ) : (
          <ErrorIcon>✕</ErrorIcon>
        )}
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`

const IconBase = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const SuccessIcon = styled(IconBase)`
  background-color: #4CAF50;
  color: white;
`

const ErrorIcon = styled(IconBase)`
  background-color: #f44336;
  color: white;
`

const Message = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: #333;
`

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #d32f2f;
  }
` 