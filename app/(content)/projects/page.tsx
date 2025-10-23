'use client'

import { ProjectCard } from '@/components/ui/project-card'
import React from 'react'

const projectsPage = () => {
  const projects = [
    {
      title: 'Motion Primitives Pro',
      description:
        'Advanced components and templates to craft beautiful websites.',
      image: '/cover.jpg',
    },
    {
      title: 'Project Alpha',
      description: 'A revolutionary SaaS platform that changes everything.',
      image: '/cover.jpg',
    },
    {
      title: 'Wild Experiment',
      description: 'Just a crazy idea I had to build. Still figuring it out.',
      image: '/cover.jpg',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-style-header-main">Projects</h1>
        <p className="text-style-body-main">
          Some are finished, some are works in progress..
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default projectsPage
