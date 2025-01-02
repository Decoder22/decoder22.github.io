export const theme = {
  colors: {
    primary: '#1E90FF',
    primaryHover: '#87CEEB',
    secondary: '#FF6F61',
    background: '#F4F4F9',
    tertiary: '#87CEEB',
    secondaryBackground: '#FF6F61',
    cardBackground: '#f7f7f7',
    text: '#333333',
    buttonText: '#F4F4F9',
    buttonHover: '#FF6F61',
    textSecondary: '#F4F4F9',
    error: '#ff0000',
    sectionTitlePrimaryColor: '#FFFFFF',
    sectionTitleSecondaryColor: '#147EFB'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '3000px'
  }
}

export const darkTheme = {
  colors: {
    primary: '#0070f3',
    primaryHover: '#0051a2',
    secondary: '#7928ca',
    background: '#F4F4F9',
    cardBackground: '#f7f7f7',
    text: '#333333',
    textSecondary: '#666666',
    error: '#ff0000',
    sectionTitlePrimaryColor: '#FFFFFF',
    sectionTitleSecondaryColor: '#147EFB'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '3000px'
  }
}

export type Theme = typeof theme 