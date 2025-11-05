import React from 'react'

interface ToolItemProps {
  title: string
  description?: string
  level?: 1 | 2 | 3 // 1 = main item, 2 = subsection, 3 = sub-subsection
  children?: React.ReactNode
}

export function ToolItem({
  title,
  description,
  level = 1,
  children,
}: ToolItemProps) {
  const getIndentation = () => {
    switch (level) {
      case 1:
        return 'ml-0'
      case 2:
        return 'ml-4'
      case 3:
        return 'ml-8'
      default:
        return 'ml-0'
    }
  }

  const getBulletStyle = () => {
    switch (level) {
      case 1:
        return 'text-style-body-main'
      case 2:
        return 'text-style-body-small-100'
      case 3:
        return 'text-style-body-extra-small'
      default:
        return 'text-style-body-main'
    }
  }

  return (
    <div className={`${getIndentation()} space-y-1`}>
      <div className="flex items-start gap-2">
        <span className={`${getBulletStyle()} shrink-0`}>•</span>
        <div className="flex items-center gap-2">
          <h3 className="text-style-body-bold">{title}</h3>
          {description && (
            <p className="text-style-body-italic">{description}</p>
          )}
        </div>
      </div>
      {children && <div className="space-y-1">{children}</div>}
    </div>
  )
}
