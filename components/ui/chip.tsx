import React from 'react'
import { cn } from '@/lib/utils'

interface ChipProps {
  children: React.ReactNode
  icon?: React.ReactNode
  href?: string
}

export function Chip({ children, icon, href }: ChipProps) {
  const baseClasses = cn(
    'inline-flex items-center gap-1 rounded-sm px-1 py-0 text-sm font-medium',
    'bg-zinc-700/20 backdrop-blur-md text-zinc-600',
    'hover:bg-zinc-800/30 dark:bg-white/10 dark:text-zinc-400 dark:hover:bg-white/20',
    'transition-all cursor-pointer',
  )

  const content = (
    <>
      {icon && <div className="h-4 w-4 flex-shrink-0">{icon}</div>}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    )
  }

  return <span className={baseClasses}>{content}</span>
}
