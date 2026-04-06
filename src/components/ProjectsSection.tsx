"use client"

import Image from "next/image"
import { useState } from "react"
import {
  allProjects,
  getYears,
  getMockupImage,
  type Project,
} from "@/lib/projects"
import { RevealOnScroll } from "./RevealOnScroll"
import { ThemeToggle } from "./ThemeToggle"

function ProjectCard({
  project,
  variant = "default",
}: {
  readonly project: Project
  readonly variant?: "featured" | "default"
}) {
  const isFeatured = variant === "featured"
  const mockupSrc = getMockupImage(project.id)
  const linkProps = project.siteUrl
    ? { href: project.siteUrl, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : project.detailUrl
      ? { href: project.detailUrl, target: "_blank" as const, rel: "noopener noreferrer" as const }
      : { href: `#${project.id}` }

  return (
    <article className="group">
      <a {...linkProps} className="block">
        <div className="overflow-hidden bg-muted aspect-[16/9] relative">
          <Image
            src={mockupSrc}
            alt={project.title}
            fill
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 90vw"
                : "(max-width: 768px) 100vw, 45vw"
            }
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className={`mt-5 ${isFeatured ? "md:mt-8" : "md:mt-6"}`}>
          <span className="text-xs tracking-widest text-muted-foreground">
            {project.year}
          </span>
          <h3
            className={`font-serif tracking-tight group-hover:text-primary transition-colors duration-300 mt-1 ${
              isFeatured
                ? "text-3xl md:text-4xl"
                : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>
        </div>
      </a>
    </article>
  )
}

export function ProjectsSection() {
  const years = getYears()
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const filteredProjects = selectedYear
    ? allProjects.filter((p) => p.year === selectedYear)
    : allProjects

  const [featured, ...rest] = filteredProjects

  if (!featured) return null

  return (
    <>
      {/* Fixed year filter header */}
      <nav
        className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border"
        role="navigation"
        aria-label="연도별 필터"
      >
        <div className="mx-auto max-w-[160rem] px-6 md:px-10 lg:px-16">
          <div
            className="flex items-center justify-between h-12 md:h-14"
          >
          <div
            className="flex items-center gap-6 overflow-x-auto scrollbar-hide"
            role="group"
          >
            <button
              onClick={() => setSelectedYear(null)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 shrink-0 ${
                selectedYear === null
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={selectedYear === null}
            >
              All
              <span className="ml-1 text-xs text-muted-foreground">
                ({allProjects.length})
              </span>
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`text-sm tracking-widest transition-colors duration-300 shrink-0 ${
                  selectedYear === year
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={selectedYear === year}
              >
                {year}
              </button>
            ))}
          </div>
          <ThemeToggle />
          </div>
        </div>
      </nav>

      <section
        id="work"
        className="py-24 md:py-40"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-[160rem] px-6 md:px-10 lg:px-16">
          {/* Featured project — full width editorial spread */}
          <RevealOnScroll key={featured.id}>
            <div className="mb-20 md:mb-32">
              <ProjectCard project={featured} variant="featured" />
            </div>
          </RevealOnScroll>

          {/* Project grid — asymmetric magazine layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
            {rest.map((project, index) => (
              <RevealOnScroll
                key={project.id}
                delay={index % 2 === 1 ? 100 : 0}
                className={index % 2 === 1 ? "md:mt-12" : ""}
              >
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
