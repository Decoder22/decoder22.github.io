import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface CarouselButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
}

function CarouselButton({ direction, onClick }: CarouselButtonProps) {
  return (
    <Button onClick={onClick}>
      {direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
    </Button>
  )
}

export { CarouselButton }

const Button = styled.button`
  background: ${({ theme }) => theme.colors.tertiary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
` 