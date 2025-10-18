'use client'

import './pixel-clouds.css'

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
 * Clean CSS-based pixel patterns for authentic retro aesthetic
 */
function PixelCloud({ size }: PixelCloudProps) {
  const pixelCount = {
    small: 9,
    medium: 15,
    large: 21,
    xlarge: 27,
  }

  return (
    <div className={`cloud-${size} relative`}>
      {Array.from({ length: pixelCount[size] }, (_, i) => (
        <div key={i} className="cloud-pixel" />
      ))}
    </div>
  )
}
