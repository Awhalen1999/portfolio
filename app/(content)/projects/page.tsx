import { ProjectTile } from '@/components/ui/project-tile'
import { Github } from 'lucide-react'

interface Project {
  icon: string | React.ReactNode
  title: string
  description: string
  year: string
  image: string
}

const projects: Project[] = [
  {
    icon: '/postman.svg',
    title: 'Kaboodle',
    description:
      'A mobile app for creating and sharing packing lists for your adventures.',
    year: '2025',
    image: '/cover.jpg',
  },
  {
    icon: <Github className="h-6 w-6" strokeWidth={1.5} />,
    title: 'Project Alpha',
    description: 'A revolutionary SaaS platform that changes everything.',
    year: '2025',
    image: '/cover.jpg',
  },
  {
    icon: '/postman.svg',
    title: 'Project Beta',
    description: 'A revolutionary SaaS platform that changes everything.',
    year: '2025',
    image: '/cover.jpg',
  },
  {
    icon: '/postman.svg',
    title: 'Project Gamma',
    description: 'A revolutionary SaaS platform that changes everything.',
    year: '2025',
    image: '/cover.jpg',
  },
  {
    icon: '/postman.svg',
    title: 'Project Delta',
    description: 'A revolutionary SaaS platform that changes everything.',
    year: '2025',
    image: '/cover.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-12">
      <div>
        <h1 className="text-style-header-main mb-2">Projects</h1>
        <p className="text-style-body-italic">
          Some are finished, some are works in progress...
        </p>
      </div>

      <div className="w-full space-y-2">
        {projects.map((project, index) => (
          <ProjectTile
            key={`${project.title}-${index}`}
            icon={project.icon}
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
