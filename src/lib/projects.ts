import projectsData from "./projects.json"

export interface Project {
  readonly id: string
  readonly title: string
  readonly subtitle: string
  readonly category: string
  readonly year: number
  readonly date: string
  readonly siteUrl: string
  readonly description: string
  readonly detailUrl: string
  readonly images: readonly string[]
}

export const allProjects: readonly Project[] = projectsData as Project[]

export function getProjectsByYear(): ReadonlyMap<number, readonly Project[]> {
  const map = new Map<number, Project[]>()
  for (const project of allProjects) {
    const existing = map.get(project.year) ?? []
    map.set(project.year, [...existing, project])
  }
  return map
}

export function getYears(): readonly number[] {
  const years = [...new Set(allProjects.map((p) => p.year))]
  return years.sort((a, b) => b - a)
}

export function getProjectById(id: string): Project | undefined {
  return allProjects.find((p) => p.id === id)
}

export function getMockupImage(id: string): string {
  return `/images/${id}/mockup.png`
}

export function getDesktopImage(id: string): string {
  return `/images/${id}/desktop.png`
}

export function getMobileImage(id: string): string {
  return `/images/${id}/mobile.png`
}
