import Link from 'next/link'
import Image from 'next/image'
import { Chip } from '@/components/ui/chip'
import { MapPin, Coffee } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Main text sections */}
      <div className="space-y-5">
        <h1 className="text-header-main text-zinc-900 dark:text-zinc-200">
          Alex Whalen
        </h1>
        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Hey! I'm Alex. This is my website... you could call it a portfolio
          website or a blog, but I like to think of it as a collection of my
          work and thoughts.{' '}
          <span className="text-body-italic">
            Maybe the ramblings of a madman.{' '}
          </span>
          who knows.
        </p>
        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          I'm a serial SaaS developer with way too many{' '}
          <span className="text-xs tracking-wide">
            amazing and revolutionary
          </span>{' '}
          ideas. I'm also a bit of a nerd and love turning said wild ideas into
          real tools that people <span className="text-body-italic">(me)</span>{' '}
          actually use.
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Currently, I lead the enterprise software team at{' '}
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            Nutraforge Technologies
          </Link>
          , building tools for nutrition analysis that help health
          professionals. I'm also working on and contributing to various (too
          many){' '}
          <Link
            href="/projects"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            projects
          </Link>
          . When I find the time, I try to attend as many hackathons and coding
          experiments as I can.
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          Outside of coding, I enjoy exploring new places, sports, anime and
          movies - I am trying to list some of my{' '}
          <Link
            href="/media"
            className="text-body-main text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-600 dark:text-zinc-100 dark:hover:decoration-zinc-300"
          >
            media consumption
          </Link>{' '}
          on my website if you're interested.
        </p>

        <p className="text-body-main text-zinc-700 dark:text-zinc-300">
          I'm currently based in <MapPin className="mx-1 inline h-4 w-4" />{' '}
          <strong className="text-body-bold text-zinc-900 dark:text-zinc-100">
            St. John's NL
          </strong>
          , if you are around, reach out and let's have some{' '}
          <Coffee className="mx-1 inline h-4 w-4" /> or work together.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <p className="text-body-bold text-zinc-700 dark:text-zinc-300">
          Code and software
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
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
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
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              JavaScript
            </Chip>
            <Chip
              href="https://dart.dev"
              icon={
                <Image
                  src="/dart.svg"
                  alt="Dart"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
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
                <Image
                  src="/react.svg"
                  alt="React"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              React
            </Chip>
            <Chip
              href="https://nextjs.org"
              icon={
                <Image
                  src="/next.svg"
                  alt="Next.js"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
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
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
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
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
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
              icon={
                <Image
                  src="/nodejs.svg"
                  alt="Node.js"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Node.js
            </Chip>
            <Chip
              href="https://deno.land"
              icon={
                <Image
                  src="/deno.svg"
                  alt="Deno"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Deno
            </Chip>
            <Chip
              href="https://hono.dev"
              icon={
                <Image
                  src="/hono.svg"
                  alt="Hono"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Hono
            </Chip>
            <Chip
              href="https://www.postgresql.org"
              icon={
                <Image
                  src="/postgresql.svg"
                  alt="PostgreSQL"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              PostgreSQL
            </Chip>
            <Chip
              href="https://www.mongodb.com"
              icon={
                <Image
                  src="/mongodb.svg"
                  alt="MongoDB"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              MongoDB
            </Chip>
            <Chip
              href="https://cloud.google.com"
              icon={
                <Image
                  src="/gcloud.svg"
                  alt="Google Cloud"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Google Cloud
            </Chip>
            <Chip
              href="https://aws.amazon.com"
              icon={
                <Image
                  src="/aws.svg"
                  alt="AWS"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              AWS
            </Chip>
          </div>
        </div>

        {/* Tools & Development */}
        <div className="flex items-start gap-2">
          <p className="text-chip-main text-zinc-700 dark:text-zinc-300">
            Tools
          </p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://github.com"
              icon={
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              GitHub
            </Chip>
            <Chip
              href="https://www.figma.com"
              icon={
                <Image
                  src="/figma.svg"
                  alt="Figma"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Figma
            </Chip>
            <Chip
              href="https://firebase.google.com"
              icon={
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Firebase
            </Chip>
            <Chip
              href="https://supabase.com"
              icon={
                <Image
                  src="/supabase.svg"
                  alt="Supabase"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Supabase
            </Chip>
            <Chip
              href="https://auth0.com"
              icon={
                <Image
                  src="/auth0.svg"
                  alt="Auth0"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Auth0
            </Chip>
            <Chip
              href="https://www.framer.com"
              icon={
                <Image
                  src="/framer.svg"
                  alt="Framer"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Framer
            </Chip>
            <Chip
              href="https://postman.com"
              icon={
                <Image
                  src="/postman.svg"
                  alt="Postman"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Postman
            </Chip>
            <Chip
              href="https://railway.app"
              icon={
                <Image
                  src="/railway.svg"
                  alt="Railway"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Railway
            </Chip>
            <Chip
              href="https://zod.dev"
              icon={
                <Image
                  src="/zod.svg"
                  alt="Zod"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Zod
            </Chip>
            <Chip
              href="https://vercel.com"
              icon={
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Vercel
            </Chip>
          </div>
        </div>
      </div>

      {/* Find Me On */}
      <div className="space-y-4">
        <p className="text-body-bold text-zinc-700 dark:text-zinc-300">
          Find me on
        </p>
        <div className="flex flex-wrap gap-1">
          <Chip
            href="https://github.com/awhalen1999"
            icon={
              <Image
                src="/github.svg"
                alt="GitHub Profile"
                width={16}
                height={16}
                className="h-full w-full object-contain"
              />
            }
          >
            GitHub
          </Chip>
          <Chip
            href="https://linkedin.com/in/alexwhalen"
            icon={
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Profile"
                width={16}
                height={16}
                className="h-full w-full object-contain"
              />
            }
          >
            LinkedIn
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
