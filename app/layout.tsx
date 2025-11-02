import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { ThemeProvider } from 'next-themes'
import { Footer } from './footer'
import { CloudsProvider } from '@/lib/clouds-context'
import { CloudsBackground } from '@/components/ui/clouds-background'
import { Inter, DM_Mono } from 'next/font/google'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://awhalen.dev/'),
  alternates: {
    canonical: 'https://awhalen.dev/',
  },
  title: {
    default: 'Alex Whalen - Personal Website',
    template: '%s | Alex Whalen',
  },
  description:
    "Hey! I'm Alex, a full stack developer who loves building cool stuff for the web and mobile. Currently building SaaS products and having way too much fun with it. Based in St. John's, NL.",
  keywords: [
    'Alex Whalen',
    'Full Stack Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Mobile Development',
    'Mobile App Development',
    'Mobile App',
    'Mobile',
    'App',
    'App Development',
    'Flutter',
    'Dart',
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'SaaS Developer',
    'Web Development',
    'Software Engineer',
    'Personal Website',
    "St. John's NL",
    'Developer',
    'Coding',
  ],
  authors: [{ name: 'Alex Whalen', url: 'https://awhalen.dev/' }],
  creator: 'Alex Whalen',
  publisher: 'Alex Whalen',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://awhalen.dev/',
    siteName: 'Alex Whalen',
    title: 'Alex Whalen - Personal Website',
    description:
      "Hey! I'm Alex, a full stack developer who loves building cool stuff with TypeScript, React, and Next.js. Currently building SaaS products and having way too much fun with it.",
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'Alex Whalen - Personal Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Whalen - Personal Website',
    description:
      "Hey! I'm Alex, a full stack developer who loves building cool stuff with TypeScript, React, and Next.js. Currently building SaaS products and having way too much fun with it.",
    images: ['/cover.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmMono.variable} font-sans tracking-tight text-zinc-900 antialiased transition-colors dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange={false}
        >
          <CloudsProvider>
            <CloudsBackground />
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
                {children}
              </main>
              <Footer />
            </div>
          </CloudsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
