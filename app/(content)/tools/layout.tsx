import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Technologies and tools I use daily for development. From programming languages to deployment platforms, here are the tools that power my projects.',
  openGraph: {
    title: 'Tools | Alex Whalen',
    description:
      'Technologies and tools I use daily for development. From programming languages to deployment platforms, here are the tools that power my projects.',
  },
  twitter: {
    title: 'Tools | Alex Whalen',
    description:
      'Technologies and tools I use daily for development. From programming languages to deployment platforms, here are the tools that power my projects.',
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
