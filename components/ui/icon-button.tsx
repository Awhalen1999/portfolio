import React from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  icon: React.ReactNode
  text: string
  onClick?: () => void
  highlightColor?: string
}

export function IconButton({
  icon,
  text,
  onClick,
  highlightColor = 'bg-yellow-500',
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium',
        'border border-gray-400 text-gray-400',
        'hover:border-transparent hover:text-white',
        'transition-all duration-200',
        'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none',
        `hover:${highlightColor}`,
      )}
    >
      <span className="h-4 w-4 flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </button>
  )
}
