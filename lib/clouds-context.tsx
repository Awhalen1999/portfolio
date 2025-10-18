'use client'

import { createContext, useContext, useEffect, useState } from 'react'

/**
 * CloudsContext - Simple visibility toggle with localStorage
 */

interface CloudsContextType {
  showClouds: boolean
  toggleClouds: () => void
}

const CloudsContext = createContext<CloudsContextType | undefined>(undefined)

export function CloudsProvider({ children }: { children: React.ReactNode }) {
  const [showClouds, setShowClouds] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('show-clouds')
    if (stored !== null) {
      setShowClouds(stored === 'true')
    }
  }, [])

  const toggleClouds = () => {
    setShowClouds((prev) => {
      const newValue = !prev
      localStorage.setItem('show-clouds', String(newValue))
      return newValue
    })
  }

  return (
    <CloudsContext.Provider value={{ showClouds, toggleClouds }}>
      {children}
    </CloudsContext.Provider>
  )
}

export function useClouds() {
  const context = useContext(CloudsContext)
  if (context === undefined) {
    throw new Error('useClouds must be used within CloudsProvider')
  }
  return context
}
