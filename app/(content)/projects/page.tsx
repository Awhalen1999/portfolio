import { IconButton } from '@/components/ui/icon-button'
import { Github } from 'lucide-react'
import React from 'react'

const projectsPage = () => {
  return (
    <div>
      projectsPage
      <IconButton
        icon={<Github />}
        hoverBg="hover:bg-blue-600/10"
        hoverText="hover:text-blue-400"
        href="https://github.com/awhalen1999"
      >
        GitHub
      </IconButton>
    </div>
  )
}

export default projectsPage
