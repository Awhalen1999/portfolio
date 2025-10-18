import Link from 'next/link'
import Image from 'next/image'
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
        <h1 className="text-header-main text-zinc-900 dark:text-zinc-100">
          Alex Whalen
        </h1>
        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Hey! I'm Alex Whalen, a passionate full-stack developer and creative
          problem solver.
        </p>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-6">
        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Dreaming up cool ideas and making them come true is where my passion
          lies. I am enthusiastic about building tools that help myself and
          others to be more productive and enjoy the process of crafting. You
          can find my{' '}
          <Link
            href="/projects"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            full projects list here
          </Link>
          .
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          I give{' '}
          <strong className="text-body-bold text-zinc-900 dark:text-zinc-100">
            talks
          </strong>{' '}
          and write{' '}
          <strong className="text-body-bold text-zinc-900 dark:text-zinc-100">
            blog posts
          </strong>{' '}
          about web development, coding, and technology. Occasionally, I do live
          coding streams and share my development process. I am also passionate
          about open source and contribute to various projects. From time to
          time, I make some creative coding experiments and interactive art.
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Outside of programming, I enjoy doing{' '}
          <Camera className="mx-1 inline h-4 w-4" /> photography and traveling.
          I also love <Film className="mx-1 inline h-4 w-4" /> movies,{' '}
          <Code className="mx-1 inline h-4 w-4" /> anime, and exploring new
          technologies. Also, in case you are interested, here are the{' '}
          <Link
            href="/uses"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            hardware/software I use
          </Link>
          .
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          I'm currently based in <MapPin className="mx-1 inline h-4 w-4" />{' '}
          <strong className="text-body-bold text-zinc-900 dark:text-zinc-100">
            Your City
          </strong>
          , if you are around, please reach out and let's have some{' '}
          <Coffee className="mx-1 inline h-4 w-4" /> coffee or work together.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <p className="text-body-bold text-zinc-700 dark:text-zinc-300">
          Code stuff
        </p>
        {/* Languages */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Languages
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://www.typescriptlang.org"
              icon={
                <Image
                  src="/typescript.svg"
                  alt="TypeScript"
                  width={15}
                  height={15}
                />
              }
            >
              TypeScript
            </Chip>
            <Chip
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              icon={
                <Image
                  src="/javascript.svg"
                  alt="JavaScript"
                  width={15}
                  height={15}
                />
              }
            >
              JavaScript
            </Chip>
            <Chip
              href="https://dart.dev"
              icon={<Image src="/dart.svg" alt="Dart" width={15} height={15} />}
            >
              Dart
            </Chip>
          </div>
        </div>

        {/* Frontend */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Frontend
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://react.dev"
              icon={
                <Image src="/react.svg" alt="React" width={15} height={15} />
              }
            >
              React
            </Chip>
            <Chip
              href="https://nextjs.org"
              icon={
                <Image src="/next.svg" alt="Next.js" width={15} height={15} />
              }
            >
              Next.js
            </Chip>
            <Chip
              href="https://tailwindcss.com"
              icon={
                <Image
                  src="/tailwindcss.svg"
                  alt="Tailwind CSS"
                  width={15}
                  height={15}
                />
              }
            >
              Tailwind CSS
            </Chip>
            <Chip
              href="https://flutter.dev"
              icon={
                <Image
                  src="/flutter.svg"
                  alt="Flutter"
                  width={15}
                  height={15}
                />
              }
            >
              Flutter
            </Chip>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Backend
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://nodejs.org"
              icon={<span className="text-green-500">N</span>}
            >
              Node.js
            </Chip>
            <Chip
              href="https://expressjs.com"
              icon={<span className="text-orange-500">E</span>}
            >
              Express
            </Chip>
            <Chip
              href="https://www.postgresql.org"
              icon={<span className="text-blue-400">P</span>}
            >
              PostgreSQL
            </Chip>
            <Chip
              href="https://www.mongodb.com"
              icon={<span className="text-green-600">M</span>}
            >
              MongoDB
            </Chip>
            <Chip
              href="https://firebase.google.com"
              icon={<span className="text-red-500">F</span>}
            >
              Firebase
            </Chip>
            <Chip
              href="https://supabase.com"
              icon={<span className="text-blue-500">S</span>}
            >
              Supabase
            </Chip>
          </div>
        </div>

        {/* Design & UI */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Design & UI
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://www.figma.com"
              icon={<span className="text-purple-600">F</span>}
            >
              Figma
            </Chip>
            <Chip
              href="https://www.adobe.com/products/xd.html"
              icon={<span className="text-blue-500">A</span>}
            >
              Adobe XD
            </Chip>
            <Chip
              href="https://www.adobe.com/creativecloud.html"
              icon={<span className="text-orange-500">A</span>}
            >
              Adobe Creative Suite
            </Chip>
            <Chip
              href="https://principleformac.com"
              icon={<span className="text-pink-500">P</span>}
            >
              Principle
            </Chip>
          </div>
        </div>

        {/* Tools & Development */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Tools & Development
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://vitejs.dev"
              icon={<span className="text-yellow-500">V</span>}
            >
              Vite
            </Chip>
            <Chip
              href="https://webpack.js.org"
              icon={<span className="text-orange-600">W</span>}
            >
              Webpack
            </Chip>
            <Chip
              href="https://jestjs.io"
              icon={<span className="text-green-600">J</span>}
            >
              Jest
            </Chip>
            <Chip
              href="https://testing-library.com/react"
              icon={<span className="text-blue-500">R</span>}
            >
              React Testing Library
            </Chip>
            <Chip
              href="https://www.cypress.io"
              icon={<span className="text-purple-500">C</span>}
            >
              Cypress
            </Chip>
            <Chip
              href="https://eslint.org"
              icon={<span className="text-red-500">E</span>}
            >
              ESLint
            </Chip>
            <Chip
              href="https://prettier.io"
              icon={<span className="text-pink-400">P</span>}
            >
              Prettier
            </Chip>
            <Chip
              href="https://vercel.com"
              icon={<span className="text-black dark:text-white">V</span>}
            >
              Vercel
            </Chip>
            <Chip
              href="https://www.docker.com"
              icon={<span className="text-orange-500">D</span>}
            >
              Docker
            </Chip>
            <Chip
              href="https://aws.amazon.com"
              icon={<span className="text-blue-500">A</span>}
            >
              AWS
            </Chip>
            <Chip
              href="https://github.com"
              icon={<span className="text-orange-500">G</span>}
            >
              GitHub
            </Chip>
            <Chip
              href="https://gitlab.com"
              icon={<span className="text-blue-500">G</span>}
            >
              GitLab
            </Chip>
            <Chip
              href="https://linear.app"
              icon={<span className="text-purple-500">L</span>}
            >
              Linear
            </Chip>
            <Chip
              href="https://slack.com"
              icon={<span className="text-green-500">S</span>}
            >
              Slack
            </Chip>
          </div>
        </div>
      </div>

      {/* Find Me On */}
      <div className="space-y-3">
        <p className="text-body-bold text-zinc-700 dark:text-zinc-300">
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
        <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
          Or mail me at{' '}
          <Link
            href="mailto:alex@alexwhalen.co"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            alex@alexwhalen.co
          </Link>
        </p>
      </div>
    </div>
  )
}
