import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of my projects and experiments. Some are finished, some are works in progress, and some are just wild ideas I couldn&apos;t resist building.',
  openGraph: {
    title: 'Projects | Alex Whalen',
    description:
      'A collection of my projects and experiments. Some are finished, some are works in progress, and some are just wild ideas I couldn&apos;t resist building.',
  },
  twitter: {
    title: 'Projects | Alex Whalen',
    description:
      'A collection of my projects and experiments. Some are finished, some are works in progress, and some are just wild ideas I couldn&apos;t resist building.',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
