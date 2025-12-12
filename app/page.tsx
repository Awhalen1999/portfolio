import Link from "next/link";
import Image from "next/image";
import { Chip } from "@/components/ui/chip";
import {
  MapPin,
  Coffee,
  Linkedin,
  Github,
  CornerDownRight,
} from "lucide-react";
import { TextFade } from "@/components/ui/text-fade";
import { IconButton } from "@/components/ui/icon-button";

export default function AboutPage() {
  return (
    <TextFade direction="up" staggerChildren={0.05}>
      {/* Main text sections */}
      <h1 className="text-style-header-main mb-5">Alex Whalen</h1>
      <p className="text-style-body-main mb-5">
        Hey! I'm Alex. This is my website... you could call it a portfolio
        website or a blog, but I like to think of it as a collection of my work
        and thoughts.{" "}
        <span className="text-style-body-italic">
          This website is intentionally minimal and simple.{" "}
        </span>
        The best ones usually are.
      </p>
      <p className="text-style-body-main mb-5">
        I'm a serial SaaS developer with way too many{" "}
        <span className="text-style-body-tiny">amazing and revolutionary</span>{" "}
        ideas. I'm also a bit of a nerd and love turning said ideas into real
        tools that people <span className="text-style-body-italic">(me)</span>{" "}
        actually use.
      </p>

      <p className="text-style-body-main mb-5">
        Here are some of the{" "}
        <Link href="/tools" className="text-style-body-link">
          tools
        </Link>{" "}
        I am currently using everyday for work and personal projects if you're
        interested.
      </p>

      <p className="text-style-body-main mb-5">
        Right now, I'm just building stuff I think is cool and useful. I'm also
        working on and contributing to various{" "}
        <span className="text-style-body-italic">(too many)</span>{" "}
        <Link href="/projects" className="text-style-body-link">
          projects
        </Link>
        . When I find the time, I try to attend as many{" "}
        <Link href="dev-events" className="text-style-body-link">
          hackathons and coding experiment
        </Link>{" "}
        as I can.
      </p>

      <p className="text-style-body-main mb-5">
        Outside of coding, I enjoy exploring new places, sports, anime and
        movies.{" "}
        <span className="text-style-body-italic">
          Oh and trying way too hard to be good at running...
        </span>
      </p>

      <p className="text-style-body-main mb-10">
        I'm currently based in <MapPin className="mx-1 inline h-4 w-4" />{" "}
        <strong className="text-style-body-bold text-(--c-text-100)">
          St. John's NL
        </strong>
        , if you are around, reach out and let's have some{" "}
        <Coffee className="mx-1 inline h-4 w-4" /> or work together.
      </p>

      {/* Tech Stack */}
      <div className="mb-10 space-y-4">
        <p className="text-style-body-bold">Code and software</p>
        {/* Languages */}
        <div className="flex items-start gap-2">
          <p className="text-style-body-small-60">Languages</p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://www.typescriptlang.org"
              icon={
                <Image
                  src="/tech-icons/typescript.svg"
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
                  src="/tech-icons/javascript.svg"
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
                  src="/tech-icons/dart.svg"
                  alt="Dart"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Dart
            </Chip>
            <Chip
              href="https://swift.org"
              icon={
                <Image
                  src="/tech-icons/swift.svg"
                  alt="Swift"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Swift
            </Chip>
          </div>
        </div>

        {/* Frontend */}
        <div className="flex items-start gap-2">
          <p className="text-style-body-small-60">Frontend</p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://react.dev"
              icon={
                <Image
                  src="/tech-icons/react.svg"
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
                  src="/tech-icons/next.svg"
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
                  src="/tech-icons/tailwindcss.svg"
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
                  src="/tech-icons/flutter.svg"
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
          <p className="text-style-body-small-60">Backend</p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://nodejs.org"
              icon={
                <Image
                  src="/tech-icons/nodejs.svg"
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
                  src="/tech-icons/deno.svg"
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
                  src="/tech-icons/hono.svg"
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
                  src="/tech-icons/postgresql.svg"
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
                  src="/tech-icons/mongodb.svg"
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
                  src="/tech-icons/gcloud.svg"
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
                  src="/tech-icons/aws.svg"
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
          <p className="text-style-body-small-60">Tools</p>
          <div className="flex flex-wrap gap-1">
            <Chip
              href="https://github.com"
              icon={
                <Image
                  src="/tech-icons/github.svg"
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
                  src="/tech-icons/figma.svg"
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
                  src="/tech-icons/firebase.svg"
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
                  src="/tech-icons/supabase.svg"
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
                  src="/tech-icons/auth0.svg"
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
                  src="/tech-icons/framer.svg"
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
                  src="/tech-icons/postman.svg"
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
              href="https://zod.dev"
              icon={
                <Image
                  src="/tech-icons/zod.svg"
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
                  src="/tech-icons/vercel.svg"
                  alt="Vercel"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Vercel
            </Chip>
            <Chip
              href="https://tanstack.com"
              icon={
                <Image
                  src="/tech-icons/tanstack.svg"
                  alt="TanStack"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              TanStack
            </Chip>
            <Chip
              href="https://zustand-demo.pmnd.rs/"
              icon={
                <Image
                  src="/tech-icons/zustand.svg"
                  alt="Zustand"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Zustand
            </Chip>
            <Chip
              href="https://stripe.com"
              icon={
                <Image
                  src="/tech-icons/stripe.svg"
                  alt="Stripe"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Stripe
            </Chip>
            <Chip
              href="https://posthog.com"
              icon={
                <Image
                  src="/tech-icons/posthog.svg"
                  alt="PostHog"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              PostHog
            </Chip>
            <Chip
              href="https://neon.tech"
              icon={
                <Image
                  src="/tech-icons/neon.svg"
                  alt="Neon"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Neon
            </Chip>
            <Chip
              href="https://orm.drizzle.team/"
              icon={
                <Image
                  src="/tech-icons/drizzle.svg"
                  alt="Drizzle"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Drizzle ORM
            </Chip>
            <Chip
              href="https://www.revenuecat.com/"
              icon={
                <Image
                  src="/tech-icons/revenuecat.svg"
                  alt="Revenue Cat"
                  width={16}
                  height={16}
                  className="h-full w-full object-contain"
                />
              }
            >
              Revenue Cat
            </Chip>
          </div>
        </div>
      </div>

      {/* Find Me On */}
      <div className="mb-10 space-y-4">
        <p className="text-style-body-bold">Find me on</p>
        <div className="flex flex-wrap gap-1">
          <IconButton
            icon={<Github strokeWidth={1} />}
            href="https://github.com/awhalen1999"
            hoverBg="hover:bg-purple-600/10"
            hoverBorder="hover:border-purple-400/20 dark:hover:border-purple-400/10"
            hoverText="hover:text-purple-400 dark:hover:text-purple-400"
          >
            GitHub
          </IconButton>
          <IconButton
            icon={<Linkedin strokeWidth={1} />}
            href="https://www.linkedin.com/in/alex-whalen-0496b227b/"
            hoverBg="hover:bg-blue-600/10"
            hoverBorder="hover:border-blue-400/20 dark:hover:border-blue-400/10"
            hoverText="hover:text-blue-400 dark:hover:text-blue-400"
          >
            LinkedIn
          </IconButton>
        </div>
        <p className="text-style--60">
          Or mail me at{" "}
          <Link
            href="mailto:awhalendev@gmail.com"
            className="text-style-body-link"
          >
            awhalendev@gmail.com
          </Link>
        </p>
      </div>

      {/* Download CV */}
      <div className="space-y-2">
        <p className="text-style--60">
          <a
            href="/alex_whalen_resume.pdf"
            download="alex_whalen_resume.pdf"
            className="text-style-body-link inline-flex items-center gap-1"
          >
            <CornerDownRight strokeWidth={1.5} className="h-4 w-4" /> Download
            CV
          </a>
        </p>
      </div>
    </TextFade>
  );
}
