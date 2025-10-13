'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon, Github, Folder, UserSearch } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function AnimatedSignature() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const signatureSrc =
    theme === 'light'
      ? '/transparent-sig-black.gif'
      : '/transparent-sig-white.gif'

  // Add cache-busting parameter to ensure GIF restarts on page refresh
  const cacheBuster = Date.now()

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

export function Header() {
  return (
    <header className="relative z-40 border-b">
      <div className="flex items-center p-4 px-8">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="xl:fixed xl:left-1">
            <AnimatedSignature />
          </Link>
        </div>

        {/* Right side - Navigation */}
        <nav className="ml-auto flex items-center gap-6">
          <Link
            href="/about"
            className="text-caption tracking-tight opacity-60 transition-opacity hover:opacity-100"
          >
            <span className="hidden md:inline">About</span>
            <span className="md:hidden">
              <UserSearch className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/projects"
            className="text-caption tracking-tight opacity-60 transition-opacity hover:opacity-100"
          >
            <span className="hidden md:inline">Projects</span>
            <span className="md:hidden">
              <Folder className="h-4 w-4" />
            </span>
          </Link>
          <a
            href="https://github.com/awhalen1999"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 transition-opacity hover:opacity-100 md:inline"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  )
}
