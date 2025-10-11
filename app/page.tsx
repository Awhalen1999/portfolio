'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Kbd } from '@/components/ui/kbd'

// * CONSTANTS
// Delay for eyes opening on page load
const EYE_OPEN_DELAY = 1000
// Delay for blink start
const BLINK_START_DELAY = 2000
// Delay for first quote to appear
const FIRST_QUOTE_DELAY = 2000
// Minimum interval between quotes
const QUOTE_INTERVAL_MIN = 8000
// Maximum interval between quotes
const QUOTE_INTERVAL_MAX = 15000
// Duration of interaction bubble
const INTERACTION_BUBBLE_DURATION = 2000
// Duration of jump animation
const JUMP_DURATION = 600
// Duration of blink animation
const BLINK_DURATION = 150
// Duration of mouth expression animation
const MOUTH_DURATION = 4000
// Offset for eye tracking to center on mouse
const CENTER_OFFSET = 15

const randomQuotes = [
  'Hey there! 👋',
  'Welcome to my portfolio!',
  "I'm Alex, a developer who loves creating cool stuff",
  'Check out my projects! 🚀',
  'I love React, TypeScript, and building interactive experiences',
  "Want to see some magic? Press 'H' for help!",
  "Try pressing 'J' to make me jump!",
  "I'm always watching... 👀",
  'Building websites is my passion!',
  'Coffee and code - my daily routine ☕',
  'I turn ideas into reality through code',
  "Scroll around, I'll follow you!",
  'This site was built with Next.js and lots of ❤️',
  "Press 'S' to see me surprised!",
  "I'm a full-stack developer",
  "Let's build something amazing together!",
  'Technology is my playground 🎮',
  "Press 'W' to make me wink!",
  "I'm always learning new things",
]

function AnimatedEyes() {
  // * STATE MANAGEMENT
  const ballRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isBlinking, setIsBlinking] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [allQuotes, setAllQuotes] = useState<
    Array<{ id: number; text: string }>
  >([])
  const [showHelpMenu, setShowHelpMenu] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isSurprised, setIsSurprised] = useState(false)
  const [isWinking, setIsWinking] = useState(false)
  type MouthExpression = 'closed' | 'happy' | 'sad' | 'surprised' | 'open'
  const [mouthExpression, setMouthExpression] =
    useState<MouthExpression>('closed')

  // * MOUSE TRACKING EFFECT
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX * 100) / window.innerWidth - 50 + CENTER_OFFSET
      const y = (event.clientY * 100) / window.innerHeight - 50

      ballRefs.current.forEach((ball) => {
        if (ball) {
          ball.style.left = x + '%'
          ball.style.top = y + '%'
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // * EYE ANIMATION EFFECT
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true)
    }, EYE_OPEN_DELAY)

    const blinkTimer = setTimeout(() => {
      const blink = () => {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), BLINK_DURATION)
      }

      const scheduleNextBlink = () => {
        const delay = Math.random() * 4000 + 4000
        setTimeout(() => {
          blink()
          scheduleNextBlink()
        }, delay)
      }

      scheduleNextBlink()
    }, BLINK_START_DELAY)

    return () => {
      clearTimeout(openTimer)
      clearTimeout(blinkTimer)
    }
  }, [])

  // * RANDOM QUOTES SYSTEM
  useEffect(() => {
    const showRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * randomQuotes.length)
      const newQuote = {
        id: Date.now(),
        text: randomQuotes[randomIndex],
      }

      setAllQuotes((prev) => {
        const updated = [...prev, newQuote]
        // Keep only the last 3 quotes
        return updated.length > 3 ? updated.slice(-3) : updated
      })
    }

    // Show first quote after eyes open
    const firstQuoteTimer = setTimeout(() => {
      showRandomQuote()
    }, FIRST_QUOTE_DELAY)

    // Show random quotes every 8-15 seconds
    const scheduleNextQuote = () => {
      const delay =
        Math.random() * (QUOTE_INTERVAL_MAX - QUOTE_INTERVAL_MIN) +
        QUOTE_INTERVAL_MIN
      setTimeout(() => {
        showRandomQuote()
        scheduleNextQuote()
      }, delay)
    }

    scheduleNextQuote()

    return () => {
      clearTimeout(firstQuoteTimer)
    }
  }, [])

  // * KEYBOARD SHORTCUTS
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

      switch (key) {
        case 'h':
          setShowHelpMenu(!showHelpMenu)
          break
        case 'j':
          setIsJumping(true)
          setTimeout(() => setIsJumping(false), JUMP_DURATION)
          const jumpQuote = {
            id: Date.now(),
            text: '👆 I just jumped! 😎',
          }
          setAllQuotes((prev) => {
            const updated = [...prev, jumpQuote]
            return updated.length > 3 ? updated.slice(-3) : updated
          })
          break
        case 's':
          setIsSurprised(true)
          setMouthExpression('surprised')
          const surprisedQuote = {
            id: Date.now(),
            text: '😱 Woah! That surprised me!',
          }
          setAllQuotes((prev) => {
            const updated = [...prev, surprisedQuote]
            return updated.length > 3 ? updated.slice(-3) : updated
          })
          setTimeout(() => {
            setIsSurprised(false)
            setMouthExpression('closed')
          }, INTERACTION_BUBBLE_DURATION)
          break
        case 'w':
          setIsWinking(true)
          const winkQuote = {
            id: Date.now(),
            text: '😉 Just winking at you!',
          }
          setAllQuotes((prev) => {
            const updated = [...prev, winkQuote]
            return updated.length > 3 ? updated.slice(-3) : updated
          })
          setTimeout(() => {
            setIsWinking(false)
          }, INTERACTION_BUBBLE_DURATION)
          break
        case 'y':
          setMouthExpression('happy')
          const happyQuote = {
            id: Date.now(),
            text: "😊 I'm so happy!",
          }
          setAllQuotes((prev) => {
            const updated = [...prev, happyQuote]
            return updated.length > 3 ? updated.slice(-3) : updated
          })
          setTimeout(() => {
            setMouthExpression('closed')
          }, MOUTH_DURATION)
          break
        case 'n':
          setMouthExpression('sad')
          const sadQuote = {
            id: Date.now(),
            text: "😢 I'm feeling sad...",
          }
          setAllQuotes((prev) => {
            const updated = [...prev, sadQuote]
            return updated.length > 3 ? updated.slice(-3) : updated
          })
          setTimeout(() => {
            setMouthExpression('closed')
          }, MOUTH_DURATION)
          break
        case 'escape':
          setShowHelpMenu(false)
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [showHelpMenu])

  // * RENDER
  return (
    <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
      {/* FACE CONTAINER */}
      <div
        className={`relative transition-all duration-300 ${isJumping ? '-translate-y-8 transform' : ''}`}
      >
        {/* EYES CONTAINER */}
        <div className="flex gap-20">
          {/* LEFT EYE */}
          <div
            className={`relative w-60 overflow-hidden rounded-full bg-gray-200 transition-all duration-300 ease-out dark:bg-white ${
              !isOpen || isBlinking || isWinking ? 'h-1' : 'h-32'
            } ${isSurprised ? 'scale-110' : ''}`}
          >
            <div
              ref={(el) => {
                ballRefs.current[0] = el
              }}
              className={`absolute h-20 w-20 rounded-full bg-black transition-all duration-100 ease-out ${
                isSurprised ? 'scale-125' : ''
              }`}
              style={{ transform: 'translate(50%, 50%)' }}
            />
          </div>

          {/* RIGHT EYE */}
          <div
            className={`relative w-60 overflow-hidden rounded-full bg-gray-200 transition-all duration-300 ease-out dark:bg-white ${
              !isOpen || isBlinking ? 'h-1' : 'h-32'
            } ${isSurprised ? 'scale-110' : ''}`}
          >
            <div
              ref={(el) => {
                ballRefs.current[1] = el
              }}
              className={`absolute h-20 w-20 rounded-full bg-black transition-all duration-100 ease-out ${
                isSurprised ? 'scale-125' : ''
              }`}
              style={{ transform: 'translate(50%, 50%)' }}
            />
          </div>
        </div>

        {/* MOUTH */}
        <div
          className={`absolute top-full left-1/2 mt-8 -translate-x-1/2 overflow-hidden rounded-full border-4 border-red-300 bg-red-500 transition-all duration-300 ease-out ${
            mouthExpression === 'closed'
              ? 'h-1 w-40'
              : mouthExpression === 'happy'
                ? 'h-12 w-48'
                : mouthExpression === 'sad'
                  ? 'h-8 w-30'
                  : mouthExpression === 'surprised'
                    ? 'h-16 w-40'
                    : 'h-16 w-40'
          }`}
        >
          {/* Teeth */}
          <div className="absolute -top-4 left-1/2 z-10 h-6 w-8 -translate-x-1/2 transform rounded-b-lg bg-white"></div>
          <div className="absolute -bottom-4 left-1/2 z-10 h-6 w-8 -translate-x-1/2 transform rounded-t-lg bg-white"></div>
        </div>
      </div>

      {/* ALL QUOTES STACK */}
      <div className="pointer-events-none fixed right-6 bottom-8">
        <div className="flex flex-col items-end gap-2">
          {allQuotes.map((quote, index) => (
            <div
              key={quote.id}
              className="relative w-fit max-w-xs rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              style={{
                transform: `translateY(${index * 4}px)`,
                opacity: 1 - index * 0.1,
              }}
            >
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HELP MENU */}
      <Popover open={showHelpMenu} onOpenChange={setShowHelpMenu}>
        <PopoverTrigger asChild>
          <div className="pointer-events-none fixed bottom-4 left-4">
            <p className="text-xs text-zinc-500 opacity-60 dark:text-zinc-400">
              Press <Kbd className="font-mono font-semibold">H</Kbd> for help{' '}
              <Kbd className="font-mono font-semibold">esc</Kbd> to close
            </p>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80" side="top" align="start">
          <div className="space-y-2">
            <h4 className="mb-4 leading-none font-medium">
              Keyboard Shortcuts
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">J</Kbd>
                <span>Jump</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">S</Kbd>
                <span>Surprised</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">W</Kbd>
                <span>Wink</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">Y</Kbd>
                <span>Smile</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">N</Kbd>
                <span>Frown</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">H</Kbd>
                <span>Toggle help</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">Esc</Kbd>
                <span>Close help</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default function Page() {
  return <AnimatedEyes />
}
