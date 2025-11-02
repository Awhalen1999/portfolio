import { ProjectTile } from '@/components/ui/project-tile'
import { TerminalBackButton } from '@/components/ui/terminal-back-button'
import { Laptop } from 'lucide-react'

interface Project {
  icon: string | React.ReactNode
  title: string
  description: string
  year: string
  link?: string
  disabled?: boolean
}

const projects: Project[] = [
  {
    icon: '/kaboodle.png',
    title: 'Kaboodle',
    description:
      'A mobile app for creating and sharing packing lists for your adventures.',
    year: '2025',
    disabled: true,
  },
  {
    icon: '/random-bracket.png',
    title: 'Random Bracket Daily',
    description:
      'A daily game where 16 random things are put into a bracket and you pick the winner.',
    year: '2025',
    disabled: true,
  },
  {
    icon: <Laptop className="h-8 w-8" strokeWidth={1.5} />,
    title: 'OS Mock',
    description:
      'A web app that mimics an OS with resizable / draggable windows and a dock.',
    year: '2025',
    link: 'https://github.com/Awhalen1999/browser-sim',
  },
  {
    icon: '/beer-scout.png',
    title: 'Beer Scout',
    description:
      'A community driven app for finding and submitting the cheapest beer deals in your area.',
    year: '2024',
    link: 'https://github.com/beer-scout-project/beer-scout',
  },
  {
    icon: '/smart-sip.png',
    title: 'SmartSip AI',
    description:
      'An AI bartending app that will create cocktails based on your requests and ingredients.',
    year: '2024',
    link: 'https://github.com/Awhalen1999/smart-sip',
  },
  {
    icon: '/gameon-tap.png',
    title: 'GameOn Tap',
    description:
      'A collection of party games that can be played without any of the setup and items needed.',
    year: '2024',
    link: 'https://github.com/Awhalen1999/GameOn-Tap',
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
            link={project.link}
            disabled={project.disabled}
          />
        ))}
      </div>
      <TerminalBackButton />
    </div>
  )
}
