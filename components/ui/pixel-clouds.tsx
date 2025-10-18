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
  version: 1 | 2 // Two possible versions for each size
  duration: number // seconds
  delay: number // seconds
  top: string // percentage
}

const clouds: Cloud[] = [
  { id: 1, size: 'small', version: 1, duration: 50, delay: 0, top: '8%' },
  { id: 2, size: 'medium', version: 2, duration: 70, delay: 15, top: '18%' },
  { id: 3, size: 'large', version: 1, duration: 90, delay: 30, top: '12%' },
  { id: 4, size: 'small', version: 2, duration: 55, delay: 45, top: '28%' },
  { id: 5, size: 'xlarge', version: 1, duration: 100, delay: 60, top: '5%' },
  { id: 6, size: 'medium', version: 1, duration: 65, delay: 75, top: '38%' },
  { id: 7, size: 'small', version: 1, duration: 52, delay: 90, top: '48%' },
  { id: 8, size: 'large', version: 2, duration: 85, delay: 105, top: '35%' },
  { id: 9, size: 'medium', version: 2, duration: 68, delay: 120, top: '58%' },
  { id: 10, size: 'xlarge', version: 2, duration: 95, delay: 135, top: '52%' },
  { id: 11, size: 'small', version: 2, duration: 58, delay: 150, top: '68%' },
  { id: 12, size: 'large', version: 1, duration: 88, delay: 165, top: '62%' },
  { id: 13, size: 'medium', version: 1, duration: 72, delay: 180, top: '78%' },
  { id: 14, size: 'small', version: 1, duration: 60, delay: 195, top: '72%' },
  { id: 15, size: 'xlarge', version: 2, duration: 92, delay: 210, top: '85%' },
]

export function PixelClouds() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: `
          linear-gradient(to right, 
            black 0%, 
            black 15%, 
            rgba(0,0,0,0.2) 25%, 
            rgba(0,0,0,0.2) 75%, 
            black 85%, 
            black 100%
          )
        `,
        WebkitMaskImage: `
          linear-gradient(to right, 
            black 0%, 
            black 15%, 
            rgba(0,0,0,0.2) 25%, 
            rgba(0,0,0,0.2) 75%, 
            black 85%, 
            black 100%
          )
        `,
      }}
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
          <PixelCloud size={cloud.size} version={cloud.version} />
        </div>
      ))}
    </div>
  )
}

interface PixelCloudProps {
  size: 'small' | 'medium' | 'large' | 'xlarge'
  version: 1 | 2
}

/**
 * Individual pixel-art cloud component
 * Detailed pixel patterns for authentic retro aesthetic
 */
function PixelCloud({ size, version }: PixelCloudProps) {
  const sizeClasses = {
    small: 'w-20 h-12',
    medium: 'w-28 h-16',
    large: 'w-36 h-20',
    xlarge: 'w-44 h-24',
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0">
        {/* Small clouds */}
        {size === 'small' && version === 1 && (
          <>
            <div className="absolute top-2 left-6 h-2 w-8 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-4 h-2 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-2 w-16 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-4 h-2 w-12 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === 'small' && version === 2 && (
          <>
            <div className="absolute top-1 left-4 h-2 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-2 h-2 w-10 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-1 h-2 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-3 h-2 w-10 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-5 h-2 w-8 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {/* Medium clouds */}
        {size === 'medium' && version === 1 && (
          <>
            <div className="absolute top-2 left-8 h-2 w-6 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-6 h-2 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-4 h-2 w-20 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-2 h-2 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-4 h-2 w-20 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-6 h-2 w-16 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === 'medium' && version === 2 && (
          <>
            <div className="absolute top-1 left-6 h-2 w-8 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-4 h-2 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-2 h-2 w-18 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-1 h-2 w-22 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-3 h-2 w-18 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-5 h-2 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-7 h-2 w-10 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {/* Large clouds */}
        {size === 'large' && version === 1 && (
          <>
            <div className="absolute top-1 left-10 h-2 w-10 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-8 h-2 w-16 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-6 h-2 w-24 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-4 h-2 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-2 h-2 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-4 h-2 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-6 h-2 w-24 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === 'large' && version === 2 && (
          <>
            <div className="absolute top-0 left-8 h-2 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-6 h-2 w-18 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-4 h-2 w-26 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-2 h-2 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-1 h-2 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-3 h-2 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-5 h-2 w-26 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-14 left-7 h-2 w-20 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {/* XLarge clouds */}
        {size === 'xlarge' && version === 1 && (
          <>
            <div className="absolute top-1 left-14 h-2 w-12 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-3 left-10 h-2 w-20 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-5 left-8 h-2 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-7 left-6 h-2 w-32 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-9 left-4 h-2 w-36 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-11 left-2 h-2 w-40 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-13 left-4 h-2 w-36 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-15 left-8 h-2 w-30 bg-black/20 dark:bg-white/15" />
          </>
        )}

        {size === 'xlarge' && version === 2 && (
          <>
            <div className="absolute top-0 left-12 h-2 w-14 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-2 left-8 h-2 w-22 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-4 left-6 h-2 w-30 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-6 left-4 h-2 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-8 left-2 h-2 w-38 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-10 left-1 h-2 w-40 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-12 left-3 h-2 w-38 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-14 left-5 h-2 w-34 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-16 left-7 h-2 w-28 bg-black/20 dark:bg-white/15" />
            <div className="absolute top-18 left-10 h-2 w-20 bg-black/20 dark:bg-white/15" />
          </>
        )}
      </div>
    </div>
  )
}
