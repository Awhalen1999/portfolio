'use client'

/**
 * PixelClouds - Animated pixel-art clouds for a cozy, lo-fi aesthetic
 *
 * Features:
 * - Pure CSS animations for optimal performance
 * - Parallax effect with multiple layers
 * - Respects prefers-reduced-motion
 * - Theme-aware opacity
 */

interface Cloud {
  id: number
  size: 'small' | 'medium' | 'large' | 'xlarge'
  duration: number // seconds
  delay: number // seconds
  top: string // percentage
}

const clouds: Cloud[] = [
  { id: 1, size: 'small', duration: 50, delay: 0, top: '8%' },
  { id: 2, size: 'medium', duration: 70, delay: 15, top: '18%' },
  { id: 3, size: 'large', duration: 90, delay: 30, top: '12%' },
  { id: 4, size: 'small', duration: 55, delay: 45, top: '28%' },
  { id: 5, size: 'xlarge', duration: 100, delay: 60, top: '5%' },
  { id: 6, size: 'medium', duration: 65, delay: 75, top: '38%' },
  { id: 7, size: 'small', duration: 52, delay: 90, top: '48%' },
  { id: 8, size: 'large', duration: 85, delay: 105, top: '35%' },
  { id: 9, size: 'medium', duration: 68, delay: 120, top: '58%' },
  { id: 10, size: 'xlarge', duration: 95, delay: 135, top: '52%' },
  { id: 11, size: 'small', duration: 58, delay: 150, top: '68%' },
  { id: 12, size: 'large', duration: 88, delay: 165, top: '62%' },
  { id: 13, size: 'medium', duration: 72, delay: 180, top: '78%' },
  { id: 14, size: 'small', duration: 60, delay: 195, top: '72%' },
  { id: 15, size: 'xlarge', duration: 92, delay: 210, top: '85%' },
]

export function PixelClouds() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="animate-cloud absolute"
          style={{
            top: cloud.top,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `-${cloud.delay}s`, // Negative delay starts animation mid-way
          }}
        >
          <PixelCloud size={cloud.size} />
        </div>
      ))}
    </div>
  )
}

interface PixelCloudProps {
  size: 'small' | 'medium' | 'large' | 'xlarge'
}

/**
 * Individual pixel-art cloud component
 * Detailed pixel patterns for authentic retro aesthetic
 */
function PixelCloud({ size }: PixelCloudProps) {
  const sizeClasses = {
    small: 'w-20 h-12',
    medium: 'w-28 h-16',
    large: 'w-36 h-20',
    xlarge: 'w-44 h-24',
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0">
        {/* Small cloud - detailed puffy shape with shading */}
        {size === 'small' && (
          <>
            {/* Top layer - bright white */}
            <div className="absolute top-2 left-6 h-2 w-2 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-2 left-8 h-2 w-4 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-2 left-12 h-2 w-2 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-4 left-4 h-2 w-12 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-2 w-16 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-8 left-4 h-2 w-12 bg-white/20 dark:bg-white/15" />
            {/* Bottom layer - subtle shadow */}
            <div className="absolute top-4 left-5 h-2 w-10 bg-zinc-300/10 dark:bg-zinc-200/5" />
            <div className="absolute top-6 left-3 h-2 w-14 bg-zinc-300/10 dark:bg-zinc-200/5" />
            <div className="absolute top-8 left-5 h-2 w-10 bg-zinc-300/10 dark:bg-zinc-200/5" />
          </>
        )}

        {/* Medium cloud - detailed with layered shading */}
        {size === 'medium' && (
          <>
            {/* Top layer - bright white */}
            <div className="absolute top-2 left-8 h-2 w-4 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-2 left-12 h-2 w-2 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-4 left-6 h-2 w-8 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-4 left-14 h-2 w-4 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-6 left-4 h-2 w-20 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-8 left-2 h-2 w-24 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-10 left-4 h-2 w-20 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-12 left-6 h-2 w-16 bg-white/20 dark:bg-white/15" />
            {/* Middle layer - medium tone */}
            <div className="absolute top-4 left-7 h-2 w-6 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-6 left-5 h-2 w-18 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-8 left-3 h-2 w-22 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-10 left-5 h-2 w-18 bg-zinc-200/12 dark:bg-zinc-300/8" />
            {/* Bottom layer - subtle shadow */}
            <div className="absolute top-6 left-6 h-2 w-16 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-8 left-4 h-2 w-20 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-10 left-6 h-2 w-16 bg-zinc-300/8 dark:bg-zinc-200/4" />
          </>
        )}

        {/* Large cloud - fluffy with deep shading */}
        {size === 'large' && (
          <>
            {/* Top layer - bright white highlights */}
            <div className="absolute top-1 left-10 h-2 w-6 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-1 left-16 h-2 w-4 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-3 left-8 h-2 w-10 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-3 left-18 h-2 w-6 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-5 left-6 h-2 w-24 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-7 left-4 h-2 w-28 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-2 w-32 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-11 left-4 h-2 w-28 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-13 left-6 h-2 w-24 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-15 left-10 h-2 w-16 bg-white/20 dark:bg-white/15" />
            {/* Middle layer - medium tone */}
            <div className="absolute top-3 left-9 h-2 w-8 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-5 left-7 h-2 w-22 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-7 left-5 h-2 w-26 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-9 left-3 h-2 w-30 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-11 left-5 h-2 w-26 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-13 left-7 h-2 w-22 bg-zinc-200/12 dark:bg-zinc-300/8" />
            {/* Bottom layer - deep shadow */}
            <div className="absolute top-5 left-8 h-2 w-20 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-7 left-6 h-2 w-24 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-9 left-4 h-2 w-28 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-11 left-6 h-2 w-24 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-13 left-8 h-2 w-20 bg-zinc-300/8 dark:bg-zinc-200/4" />
          </>
        )}

        {/* XLarge cloud - most detailed with full shading */}
        {size === 'xlarge' && (
          <>
            {/* Top layer - bright white highlights */}
            <div className="absolute top-1 left-14 h-2 w-8 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-1 left-22 h-2 w-4 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-3 left-10 h-2 w-12 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-3 left-22 h-2 w-8 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-5 left-8 h-2 w-28 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-7 left-6 h-2 w-32 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-9 left-4 h-2 w-36 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-11 left-2 h-2 w-40 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-13 left-4 h-2 w-36 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-15 left-6 h-2 w-32 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-17 left-8 h-2 w-28 bg-white/20 dark:bg-white/15" />
            <div className="absolute top-19 left-12 h-2 w-20 bg-white/20 dark:bg-white/15" />
            {/* Middle layer - medium tone */}
            <div className="absolute top-3 left-11 h-2 w-10 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-5 left-9 h-2 w-26 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-7 left-7 h-2 w-30 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-9 left-5 h-2 w-34 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-11 left-3 h-2 w-38 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-13 left-5 h-2 w-34 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-15 left-7 h-2 w-30 bg-zinc-200/12 dark:bg-zinc-300/8" />
            <div className="absolute top-17 left-9 h-2 w-26 bg-zinc-200/12 dark:bg-zinc-300/8" />
            {/* Bottom layer - deep shadow */}
            <div className="absolute top-5 left-10 h-2 w-24 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-7 left-8 h-2 w-28 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-9 left-6 h-2 w-32 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-11 left-4 h-2 w-36 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-13 left-6 h-2 w-32 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-15 left-8 h-2 w-28 bg-zinc-300/8 dark:bg-zinc-200/4" />
            <div className="absolute top-17 left-10 h-2 w-24 bg-zinc-300/8 dark:bg-zinc-200/4" />
          </>
        )}
      </div>
    </div>
  )
}
