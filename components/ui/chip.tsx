import React from 'react'
import { cn } from '@/lib/utils'

interface ChipProps {
  children: React.ReactNode
  icon?: React.ReactNode
  href: string
}

export function Chip({ children, icon, href }: ChipProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'text-chip hover:text-chip-active bg-chip hover:bg-chip-active inline-flex cursor-pointer items-center gap-1 rounded-sm px-1 py-0 text-sm font-medium backdrop-blur-md transition-all',
      )}
    >
      {icon && <div className="h-4 w-4 flex-shrink-0">{icon}</div>}
      {children}
    </a>
  )
}
