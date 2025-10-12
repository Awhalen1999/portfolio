// todo:
// - add more quotes
// - name him
// - message animations
// - priority quotes
// - add "squint" animation
// - if blink happens while animation is happening, blink will not happen
// - fix weird line around eyes which pupil is near edge
// - default eye sizing
// - reorder hot keys

'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Kbd } from '@/components/ui/kbd'

// * TYPES
type Expression =
  | 'closed'
  | 'happy'
  | 'sad'
  | 'surprised'
  | 'open'
  | 'suspicious'

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
// Duration of confused tilt animation
const TILT_DURATION = 2000
// Duration of blink animation
const BLINK_DURATION = 150
// Duration of mouth expression animation
const MOUTH_DURATION = 4000
// Offset for eye tracking to center on mouse
const CENTER_OFFSET = 16
// Vertical offset for eye tracking
const VERTICAL_OFFSET = 12
// Minimum blink delay
const BLINK_DELAY_MIN = 4000
// Maximum blink delay
const BLINK_DELAY_MAX = 8000

// * EXPRESSION SCALING CONSTANTS
const EYE_SCALE_HAPPY = 'scale-105'
const EYE_SCALE_SAD = 'scale-95'
const EYE_SCALE_SURPRISED = 'scale-110'
const EYE_SCALE_SUSPICIOUS = 'scale-90'

const PUPIL_SCALE_SURPRISED = 'scale-115'

// * MOUTH SIZE CONSTANTS
const MOUTH_CLOSED = 'h-1 w-40'
const MOUTH_HAPPY = 'h-12 w-48'
const MOUTH_SAD = 'h-8 w-30'
const MOUTH_SURPRISED = 'h-16 w-40'
const MOUTH_SUSPICIOUS = 'h-1 w-20'

// * EYE HEIGHT CONSTANTS
const EYE_HEIGHT_CLOSED = 'h-1'
const EYE_HEIGHT_SAD = 'h-24'
const EYE_HEIGHT_SUSPICIOUS = 'h-24'
const EYE_HEIGHT_HAPPY = 'h-36'
const EYE_HEIGHT_NORMAL = 'h-32'

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
  const [isOpen, setIsOpen] = useState(true)
  const [allQuotes, setAllQuotes] = useState<
    Array<{ id: number; text: string }>
  >([])
  const [showHelpMenu, setShowHelpMenu] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isWinking, setIsWinking] = useState(false)
  const [isTilted, setIsTilted] = useState(false)
  const [tiltDirection, setTiltDirection] = useState<'left' | 'right'>('left')
  const [expression, setExpression] = useState<Expression>('closed')

  // * HELPER FUNCTIONS
  const addQuote = (text: string) => {
    const newQuote = { id: Date.now(), text }
    setAllQuotes((prev) => {
      const updated = [...prev, newQuote]
      return updated.length > 3 ? updated.slice(-3) : updated
    })
  }

  // * MOUSE TRACKING EFFECT
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX * 100) / window.innerWidth - 50 + CENTER_OFFSET
      const y =
        (event.clientY * 100) / window.innerHeight - 50 - VERTICAL_OFFSET

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
    const blink = () => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), BLINK_DURATION)
    }

    const scheduleNextBlink = () => {
      const delay =
        Math.random() * (BLINK_DELAY_MAX - BLINK_DELAY_MIN) + BLINK_DELAY_MIN
      setTimeout(() => {
        blink()
        scheduleNextBlink()
      }, delay)
    }

    scheduleNextBlink()
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
        // * HELP MENU
        case 'h':
          setShowHelpMenu(!showHelpMenu)
          break
        case 'escape':
          setShowHelpMenu(false)
          break

        // * SIMPLE ANIMATIONS
        case 'j':
          setIsJumping(true)
          setTimeout(() => setIsJumping(false), JUMP_DURATION)
          addQuote('👆 I just jumped! 😎')
          break
        case 'w':
          setIsWinking(true)
          addQuote('😉 Just winking at you!')
          setTimeout(() => {
            setIsWinking(false)
          }, INTERACTION_BUBBLE_DURATION)
          break
        case 'c':
          // Random tilt direction
          const randomDirection = Math.random() < 0.5 ? 'left' : 'right'
          setTiltDirection(randomDirection)
          setIsTilted(true)
          addQuote("🤔 Hmm, that's confusing...")
          setTimeout(() => {
            setIsTilted(false)
          }, TILT_DURATION)
          break

        // * EMOTIONS (eye + mouth expressions)
        case 'y':
          setExpression('happy')
          addQuote("😊 I'm so happy!")
          setTimeout(() => {
            setExpression('closed')
          }, MOUTH_DURATION)
          break
        case 'n':
          setExpression('sad')
          addQuote("😢 I'm feeling sad...")
          setTimeout(() => {
            setExpression('closed')
          }, MOUTH_DURATION)
          break
        case 's':
          setExpression('surprised')
          addQuote('😱 Woah! That surprised me!')
          setTimeout(() => {
            setExpression('closed')
          }, INTERACTION_BUBBLE_DURATION)
          break
        case 'x':
          setExpression('suspicious')
          addQuote('🤔 Something seems fishy...')
          setTimeout(() => {
            setExpression('closed')
          }, MOUTH_DURATION)
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
        className={`relative transition-all duration-300 ${isJumping ? '-translate-y-8 transform' : ''} ${
          isTilted
            ? tiltDirection === 'left'
              ? '-rotate-12'
              : 'rotate-12'
            : ''
        }`}
      >
        {/* EYES CONTAINER */}
        <div className="flex gap-20">
          {/* LEFT EYE */}
          <div
            className={`relative w-60 overflow-hidden rounded-full bg-gray-200 transition-all duration-300 ease-out dark:bg-white ${
              !isOpen || isBlinking || isWinking
                ? EYE_HEIGHT_CLOSED
                : expression === 'sad'
                  ? EYE_HEIGHT_SAD
                  : expression === 'suspicious'
                    ? EYE_HEIGHT_SUSPICIOUS
                    : expression === 'happy'
                      ? EYE_HEIGHT_HAPPY
                      : EYE_HEIGHT_NORMAL
            } ${
              expression === 'surprised'
                ? EYE_SCALE_SURPRISED
                : expression === 'suspicious'
                  ? EYE_SCALE_SUSPICIOUS
                  : expression === 'happy'
                    ? EYE_SCALE_HAPPY
                    : expression === 'sad'
                      ? EYE_SCALE_SAD
                      : ''
            }`}
          >
            <div
              ref={(el) => {
                ballRefs.current[0] = el
              }}
              className={`absolute h-20 w-20 rounded-full bg-black transition-all duration-100 ease-out ${
                expression === 'surprised' ? PUPIL_SCALE_SURPRISED : ''
              }`}
              style={{ transform: 'translate(50%, 50%)' }}
            />
          </div>

          {/* RIGHT EYE */}
          <div
            className={`relative w-60 overflow-hidden rounded-full bg-gray-200 transition-all duration-300 ease-out dark:bg-white ${
              !isOpen || isBlinking
                ? 'h-1'
                : expression === 'sad'
                  ? 'h-24'
                  : expression === 'suspicious'
                    ? 'h-24'
                    : expression === 'happy'
                      ? 'h-36'
                      : 'h-32'
            } ${
              expression === 'surprised'
                ? EYE_SCALE_SURPRISED
                : expression === 'suspicious'
                  ? EYE_SCALE_SUSPICIOUS
                  : expression === 'happy'
                    ? EYE_SCALE_HAPPY
                    : expression === 'sad'
                      ? EYE_SCALE_SAD
                      : ''
            }`}
          >
            <div
              ref={(el) => {
                ballRefs.current[1] = el
              }}
              className={`absolute h-20 w-20 rounded-full bg-black transition-all duration-100 ease-out ${
                expression === 'surprised' ? PUPIL_SCALE_SURPRISED : ''
              }`}
              style={{ transform: 'translate(50%, 50%)' }}
            />
          </div>
        </div>

        {/* MOUTH */}
        <div
          className={`absolute top-full left-1/2 mt-8 -translate-x-1/2 overflow-hidden rounded-full border-4 border-red-300 bg-red-500 transition-all duration-300 ease-out ${
            expression === 'closed'
              ? MOUTH_CLOSED
              : expression === 'happy'
                ? MOUTH_HAPPY
                : expression === 'sad'
                  ? MOUTH_SAD
                  : expression === 'suspicious'
                    ? MOUTH_SUSPICIOUS
                    : expression === 'surprised'
                      ? MOUTH_SURPRISED
                      : MOUTH_SURPRISED
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
              Keyboard Shortcuts to interact
            </h4>
            <div className="space-y-2 text-sm">
              {/* EXPRESSIONS */}
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">Y</Kbd>
                <span>Smile</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">N</Kbd>
                <span>Frown</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">S</Kbd>
                <span>Surprised</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">X</Kbd>
                <span>Suspicious</span>
              </div>

              {/* OTHER ANIMATIONS */}
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">J</Kbd>
                <span>Jump</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">W</Kbd>
                <span>Wink</span>
              </div>
              <div className="flex items-center justify-between">
                <Kbd className="font-mono font-semibold">C</Kbd>
                <span>Head Tilt</span>
              </div>

              {/* MENU OPTIONS */}
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
