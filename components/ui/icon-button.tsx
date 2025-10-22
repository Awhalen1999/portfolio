import React from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  children: React.ReactNode
  icon: React.ReactNode
  href: string
  hoverBg?: string
  hoverBorder?: string
  hoverText?: string
}

export function IconButton({
  children,
  icon,
  href,
  hoverBg,
  hoverBorder,
  hoverText,
}: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-sm border border-zinc-300 px-2 py-1 text-zinc-700 transition-all dark:border-zinc-900 dark:text-zinc-400',
        hoverBg,
        hoverBorder,
        hoverText,
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium">{children}</span>
    </a>
  )
}
