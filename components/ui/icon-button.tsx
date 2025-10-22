import React from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  children: React.ReactNode
  icon: React.ReactNode
  href: string
  hoverBg?: string
  hoverBorder?: string
  hoverText?: string
  className?: string
}

export function IconButton({
  children,
  icon,
  href,
  hoverBg,
  hoverBorder,
  hoverText,
  className,
}: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // Base styles
        'flex cursor-pointer items-center gap-2 rounded-sm border px-2 py-1 transition-all',
        // Default state
        'border-zinc-300 text-gray-400 dark:border-zinc-900',
        // Hover styles
        hoverBg,
        hoverBorder,
        hoverText,
        className,
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium">{children}</span>
    </a>
  )
}
