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
    <footer>
      <div className="flex items-center justify-between p-4 px-8">
        <Link
          href="/"
          className="text-body-main text-zinc-700 opacity-60 transition-opacity hover:opacity-100 dark:text-zinc-300"
        >
          <code className="bg-muted text-body-main relative rounded px-[0.3rem] py-[0.2rem] font-mono font-semibold text-zinc-700 dark:text-zinc-300">
            {'>'} cd ..
          </code>
        </Link>
        <ScrollToTop />
      </div>
    </footer>
  )
}
