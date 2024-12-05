export interface Technology {
  name: string
  proficiency: 'beginner' | 'intermediate' | 'advanced'
}

export interface AboutMeProps {
  technologies?: Technology[]
  description?: string
}

// If you don't have any types to export yet, you can use:
export {} 