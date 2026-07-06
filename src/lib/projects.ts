import projectsData from "./projects.json"

export interface Project {
  readonly id: string
  readonly title: string
  readonly year: number
  readonly siteUrl: string
  readonly detailUrl: string
}

export const allProjects: readonly Project[] = (projectsData as Project[])
  .slice()
  .sort((a, b) => b.year - a.year)

export function getYears(): readonly number[] {
  const years = [...new Set(allProjects.map((p) => p.year))]
  return years.sort((a, b) => b - a)
}
