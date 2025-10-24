'use client'

import React, { useState } from 'react'
import { ImageDialog } from './image-dialog'

interface ProjectCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
}

export function ProjectCard({
  title,
  description,
  icon,
  image,
}: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <div
        className="flex cursor-zoom-in items-center gap-4 rounded-sm p-2 hover:bg-[var(--c-background-hover)]"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex flex-shrink-0 items-center justify-center text-[var(--c-text-transparent)]">
          {icon}
        </div>
        <div>
          <h3 className="text-style-body-main">{title}</h3>
          <p className="text-style-body-small">{description}</p>
        </div>
      </div>

      {/* Image Dialog */}
      <ImageDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        imageSrc={image}
        title={title}
      />
    </>
  )
}
