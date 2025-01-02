import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'
import { Projects } from './components/projects/projects'
import { theme } from './theme/theme'
import { Contact } from './components/contact/contact'

// Using dynamic imports for better code splitting
const Navigation = React.lazy(() => import('./components/navigation/navigation'))
const Hero = React.lazy(() => import('./components/hero/hero'))
const AboutMe = React.lazy(() => import('./components/about-me/about-me'))

// Fallback components
const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const ErrorFallback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.error};
`

function ErrorComponent({ error }: { error: Error }) {
  return (
    <ErrorFallback>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </ErrorFallback>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <ErrorBoundary FallbackComponent={ErrorComponent}>
          <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
            <Navigation />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </StyledApp>
    </ThemeProvider>
  )
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`
