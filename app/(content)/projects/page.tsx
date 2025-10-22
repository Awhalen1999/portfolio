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
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my projects and experiments. Some are finished, some
          are works in progress, and some are just wild ideas I couldn't resist
          building.
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
