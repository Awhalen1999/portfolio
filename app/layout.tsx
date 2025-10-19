import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { ThemeProvider } from 'next-themes'
import { Footer } from './footer'
import { CloudsProvider } from '@/lib/clouds-context'
import { CloudsBackground } from '@/components/ui/clouds-background'

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
  // todo: update all this metadata
  metadataBase: new URL('https://alexwhalen.co/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Alex Whalen - Personal Website',
    template: '%s | Alex Whalen',
  },
  description: 'Alex Whalen - Personal website',
  keywords: ['Alex', 'portfolio', 'developer', 'designer', 'personal website'],
  authors: [{ name: 'Alex Whalen' }],
  creator: 'Alex',
  publisher: 'Alex',
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
    url: 'https://alexwhalen.co/',
    siteName: 'Alex Whalen - Personal Website',
    title: 'Alex Whalen - Personal Website',
    description: 'Alex Whalen - Personal website',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Whalen - Personal Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Whalen - Personal Website',
    description: 'Alex Whalen - Personal website',
    images: ['/cover.jpg'],
  },
}

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} bg-background font-[family-name:var(--font-jetbrains-mono)] tracking-tight text-zinc-900 antialiased transition-colors dark:bg-zinc-950 dark:text-zinc-100`}
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
              <main className="mx-auto max-w-2xl flex-1 px-6 py-16 lg:px-8">
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
