'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 opacity-60 transition-opacity hover:opacity-100"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between p-4 px-8">
        <Link
          href="/"
          className="text-caption tracking-tight opacity-60 transition-opacity hover:opacity-100"
        >
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold tracking-tight">
            {'>'} cd ..
          </code>
        </Link>
        <ScrollToTop />
      </div>
    </footer>
  )
}
