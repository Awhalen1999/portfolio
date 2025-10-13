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
    'inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-sm font-medium tracking-tight bg-zinc-100 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition-colors'

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
