'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp, Hand } from 'lucide-react'

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
      className="text-style-body-main h-8 w-8 cursor-pointer p-0 transition-all hover:text-(--c-text-100)"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between p-3 px-6">
      <p className="text-style-body-italic-transparent flex items-center gap-2">
        Made with <span className="text-style-body-italic">❤️</span> using my
        actual <Hand className="inline-block h-4 w-4" />
      </p>
      <ScrollToTop />
    </footer>
  )
}
