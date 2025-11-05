'use client'

import React from 'react'
import Image from 'next/image'

interface ProjectTileProps {
  title: string
  description: string
  year: string
  icon: string | React.ReactNode
  link?: string
  disabled?: boolean
}

export function ProjectTile({
  title,
  description,
  year,
  icon,
  link,
  disabled = false,
}: ProjectTileProps) {
  const handleClick = () => {
    if (!disabled && link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className={`flex w-full items-center justify-between gap-4 rounded-sm p-2 px-4 transition-colors ${
        disabled || !link
          ? 'cursor-not-allowed hover:bg-(--c-background-hover)'
          : 'cursor-pointer hover:bg-(--c-background-hover-10)'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        {/* Project Icon */}
        <div className="flex shrink-0 items-center justify-center">
          {typeof icon === 'string' ? (
            <Image
              src={icon}
              alt={`${title} icon`}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          ) : (
            icon
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="text-style-body-small-100">{title}</h3>
          <p className="text-style-body-extra-small-body">{description}</p>
        </div>
      </div>

      {/* Simple connecting line */}
      <div className="flex flex-1 items-center">
        <div className="h-px w-full bg-(--c-separator)"></div>
      </div>

      <div className="shrink-0">
        <p className="text-style-body-small-100">{year}</p>
      </div>
    </div>
  )
}
