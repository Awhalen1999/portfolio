import { Footer } from '../footer'

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main content area with max-width and padding */}
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-16 lg:px-8">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
