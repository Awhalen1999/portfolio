interface ChipProps {
  children: React.ReactNode
  icon?: React.ReactNode // SVG icon (optional)
  href?: string
  className?: string
}

export function Chip({ children, icon, href, className = '' }: ChipProps) {
  const baseClasses =
    'inline-flex items-center gap-1 rounded-sm px-1 py-0 text-sm font-medium tracking-tight bg-zinc-700/20 backdrop-blur-md text-zinc600 hover:bg-zinc-800/30 dark:bg-white/10 dark:text-zinc-400 dark:hover:bg-white/20 transition-all cursor-pointer'

  const content = (
    <>
      {icon && (
        <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center [&>img]:h-full [&>img]:w-full [&>img]:object-contain [&>svg]:h-full [&>svg]:w-full">
          {icon}
        </div>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    )
  }

  return <span className={`${baseClasses} ${className}`}>{content}</span>
}
