'use client'

import { useClouds } from '@/lib/clouds-context'
import { PixelClouds } from './pixel-clouds'

/**
 * CloudsBackground - Simple show/hide with smooth fade transition
 */
export function CloudsBackground() {
  const { showClouds } = useClouds()

  return (
    <div
      className="transition-opacity duration-1000"
      style={{ opacity: showClouds ? 1 : 0 }}
    >
      <PixelClouds />
    </div>
  )
}
