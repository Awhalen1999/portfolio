'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon, Github, Folder, Wrench, Cloud } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useClouds } from '../lib/clouds-context'

function AnimatedSignature() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  // Only add cache-busting on mount, not every render
  const [cacheBuster] = useState(() => Date.now())

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Image
        src="/transparent-sig-black.gif"
        alt="Alex Whalen Signature"
        width={100}
        height={100}
        className="h-14 w-auto object-contain"
        priority
        unoptimized
      />
    )
  }

  const signatureSrc =
    theme === 'light'
      ? '/transparent-sig-black.gif'
      : '/transparent-sig-white.gif'

  return (
    <Image
      src={`${signatureSrc}?v=${cacheBuster}`}
      alt="Alex Whalen Signature"
      width={100}
      height={100}
      className="h-14 w-auto object-contain"
      priority
      unoptimized
    />
  )
}

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 hover:text-zinc-950 focus-visible:outline-2 dark:hover:text-zinc-50"
      type="button"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  )
}

function CloudsToggle() {
  const [mounted, setMounted] = useState(false)
  const { showClouds, toggleClouds } = useClouds()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleClouds}
      className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 hover:text-zinc-950 focus-visible:outline-2 dark:hover:text-zinc-50"
      type="button"
      aria-label="Toggle clouds"
    >
      <Cloud className="h-4 w-4" fill={showClouds ? 'currentColor' : 'none'} />
    </button>
  )
}

export function Header() {
  return (
    <header className="relative z-40">
      <div className="flex items-center p-4 px-8">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="xl:fixed xl:left-1">
            <AnimatedSignature />
          </Link>
        </div>

        {/* Right side - Navigation */}
        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="/projects"
            className="text-body-main text-zinc-700 opacity-60 transition-opacity hover:opacity-100 dark:text-zinc-300"
          >
            <span className="hidden md:inline">Projects</span>
            <span className="md:hidden">
              <Folder className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/Tools"
            className="text-body-main text-zinc-700 opacity-60 transition-opacity hover:opacity-100 dark:text-zinc-300"
          >
            <span className="hidden md:inline">Tools</span>
            <span className="md:hidden">
              <Wrench className="h-4 w-4" />
            </span>
          </Link>
          <a
            href="https://github.com/awhalen1999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <CloudsToggle />
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  )
}
