'use client'

import React, { useState } from 'react'
import { ImageDialog } from './image-dialog'

interface ProjectTileProps {
  title: string
  description: string
  year: string
  image: string
}

export function ProjectTile({
  title,
  description,
  year,
  image,
}: ProjectTileProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm p-2 px-4 hover:bg-[var(--c-background-hover-10)]"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex flex-col">
          <h3 className="text-style-body-small-100">{title}</h3>
          <p className="text-style-body-extra-small">{description}</p>
        </div>

        {/* Simple connecting line */}
        <div className="flex flex-1 items-center">
          <div className="h-px w-full bg-[var(--c-separator)]"></div>
        </div>

        <div className="flex-shrink-0">
          <p className="text-style-body-small-100">{year}</p>
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
