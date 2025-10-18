'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

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
    <footer className="flex items-center justify-end p-4 px-8">
      <ScrollToTop />
    </footer>
  )
}
