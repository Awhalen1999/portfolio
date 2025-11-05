'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon, Github, Folder, Wrench, Cloud } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { useClouds } from '../lib/clouds-context'

const AnimatedSignature = React.memo(function AnimatedSignature() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

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
      src={signatureSrc}
      alt="Alex Whalen Signature"
      width={100}
      height={100}
      className="h-14 w-auto object-contain"
      priority
      unoptimized
    />
  )
})

const ThemeSwitch = React.memo(function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-7 w-7" />
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-style-body-main inline-flex h-7 w-7 items-center justify-center transition-all hover:text-(--c-text-100)"
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
})

const CloudsToggle = React.memo(function CloudsToggle() {
  const [mounted, setMounted] = useState(false)
  const { showClouds, toggleClouds } = useClouds()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-7 w-7" />
  }

  return (
    <button
      onClick={toggleClouds}
      className="text-style-body-main inline-flex h-7 w-7 items-center justify-center transition-all hover:text-(--c-text-100)"
      type="button"
      aria-label="Toggle clouds"
    >
      <Cloud className="h-4 w-4" fill={showClouds ? 'currentColor' : 'none'} />
    </button>
  )
})

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
            className="text-style-body-main transition-all hover:text-(--c-text-100)"
          >
            <span className="hidden md:inline">Projects</span>
            <span className="md:hidden">
              <Folder className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/tools"
            className="text-style-body-main transition-all hover:text-(--c-text-100)"
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
            className="text-style-body-main inline-flex h-7 w-7 items-center justify-center transition-all hover:text-(--c-text-100)"
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
