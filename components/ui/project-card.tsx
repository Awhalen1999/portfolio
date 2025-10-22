'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { ImageDialog } from './image-dialog'

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <div className="space-y-3">
        {/* Image card */}
        <div
          onClick={() => setIsDialogOpen(true)}
          className="group relative cursor-zoom-in rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={image}
              alt={title}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* Title and description outside */}
        <div>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
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
