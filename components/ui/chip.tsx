interface ChipProps {
  children: React.ReactNode
  icon?: React.ReactNode
  image?: string
  href?: string
  className?: string
}

export function Chip({
  children,
  icon,
  image,
  href,
  className = '',
}: ChipProps) {
  const baseClasses =
    'inline-flex items-center gap-1 rounded-sm px-1 py-0 text-sm font-medium tracking-tight bg-zinc-900/20 backdrop-blur-md text-zinc-500 hover:bg-zinc-800/30 dark:bg-white/10 dark:text-zinc-400 dark:hover:bg-white/20 transition-all cursor-pointer'

  const content = (
    <>
      {image && <img src={image} alt="" className="h-4 w-4" />}
      {icon && !image && icon}
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
