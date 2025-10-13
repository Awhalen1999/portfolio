import Link from 'next/link'
import { Chip } from '@/components/ui/chip'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  Camera,
  Film,
  Code,
  Mic,
  Palette,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Name and Introduction */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
          Alex Whalen
        </h1>
        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          Hey! I'm Alex Whalen, a passionate full-stack developer and creative
          problem solver.
        </p>
      </div>

      {/* Working At */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
            Working at
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              icon={<span className="text-blue-600">💼</span>}
              href="https://example.com"
            >
              Your Company
            </Chip>
            <Chip
              icon={<span className="text-green-600">🚀</span>}
              href="https://example.com"
            >
              Freelance
            </Chip>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-2">
          <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip icon={<span className="text-blue-500">⚛️</span>}>React</Chip>
            <Chip icon={<span className="text-blue-600">🔷</span>}>
              TypeScript
            </Chip>
            <Chip icon={<span className="text-black dark:text-white">▲</span>}>
              Next.js
            </Chip>
            <Chip icon={<span className="text-green-500">🟢</span>}>
              Node.js
            </Chip>
            <Chip icon={<span className="text-purple-500">💜</span>}>
              Tailwind CSS
            </Chip>
            <Chip icon={<span className="text-yellow-500">⚡</span>}>Vite</Chip>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-4">
        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          Dreaming up cool ideas and making them come true is where my passion
          lies. I am enthusiastic about building tools that help myself and
          others to be more productive and enjoy the process of crafting. You
          can find my{' '}
          <Link
            href="/projects"
            className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            full projects list here
          </Link>
          .
        </p>

        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          I give <strong>talks</strong> and write <strong>blog posts</strong>{' '}
          about web development, coding, and technology. Occasionally, I do live
          coding streams and share my development process. I am also passionate
          about open source and contribute to various projects. From time to
          time, I make some creative coding experiments and interactive art.
        </p>

        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          Outside of programming, I enjoy doing{' '}
          <Camera className="mx-1 inline h-4 w-4" /> photography and traveling.
          I also love <Film className="mx-1 inline h-4 w-4" /> movies,{' '}
          <Code className="mx-1 inline h-4 w-4" /> anime, and exploring new
          technologies. Also, in case you are interested, here are the{' '}
          <Link
            href="/uses"
            className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            hardware/software I use
          </Link>
          .
        </p>

        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          I'm currently based in <MapPin className="mx-1 inline h-4 w-4" />{' '}
          <strong>Your City</strong>, if you are around, please reach out and
          let's have some <Coffee className="mx-1 inline h-4 w-4" /> coffee or
          work together.
        </p>
      </div>

      {/* Find Me On */}
      <div className="flex items-center gap-1">
        <p className="leading-snug tracking-tight text-zinc-700 dark:text-zinc-300">
          Find me on
        </p>
        <div className="flex flex-wrap gap-1">
          <Chip
            href="https://github.com/awhalen1999"
            icon={<Github className="h-4 w-4" />}
          >
            GitHub
          </Chip>
          <Chip
            href="https://linkedin.com/in/alexwhalen"
            icon={<Linkedin className="h-4 w-4" />}
          >
            LinkedIn
          </Chip>
          <Chip
            href="mailto:alex@alexwhalen.co"
            icon={<Mail className="h-4 w-4" />}
          >
            Email
          </Chip>
        </div>
      </div>

      {/* Email Contact */}
      <div className="pt-3">
        <p className="tracking-tight text-zinc-600 dark:text-zinc-400">
          Or mail me at{' '}
          <Link
            href="mailto:alex@alexwhalen.co"
            className="text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            alex@alexwhalen.co
          </Link>
        </p>
      </div>
    </div>
  )
}
