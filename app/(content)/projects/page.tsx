'use client'

import { ProjectTile } from '@/components/ui/project-tile'
import { Folder } from 'lucide-react'
import React from 'react'

interface ProjectTileProps {
  title: string
  description: string
  year: string
  image: string
}

const projectsPage = () => {
  const projects = [
    {
      title: 'Kaboodle',
      description:
        'A mobile app for creating and sharing packing lists for your adventures.',
      year: '2025',
      image: '/cover.jpg',
    },
    {
      title: 'Project Alpha',
      description: 'A revolutionary SaaS platform that changes everything.',
      year: '2025',
      image: '/cover.jpg',
    },
    {
      title: 'Wild Experiment',
      description: 'Just a crazy idea I had to build. Still figuring it out.',
      year: '2025',
      image: '/cover.jpg',
    },
  ]

  return (
    <div className="w-full space-y-8">
      <div className="mx-auto text-center">
        <h1 className="text-style-header-main">Projects</h1>
        <p className="text-style-body-main">
          Some are finished, some are works in progress..
        </p>
      </div>

      <div className="w-full space-y-2">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            title={project.title}
            description={project.description}
            year={project.year}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default projectsPage
