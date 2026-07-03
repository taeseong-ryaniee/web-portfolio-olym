import projectsData from "./projects.json"

export interface Project {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly year: number
  readonly date: string
  readonly siteUrl: string
  readonly description: string
  readonly detailUrl: string
  readonly images: readonly string[]
}

export const allProjects: readonly Project[] = projectsData as Project[]

export function getYears(): readonly number[] {
  const years = [...new Set(allProjects.map((p) => p.year))]
  return years.sort((a, b) => b - a)
}

export function getMockupImage(id: string): string {
  return `/images/${id}/mockup.webp`
}
