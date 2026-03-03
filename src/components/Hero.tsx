'use client'

import { useState, useEffect } from 'react'

const NAME = 'Lakshay Sharma.'
const TYPING_INTERVAL = 80
const CURSOR_BLINK_MS = 530

export default function Hero() {
  const [displayName, setDisplayName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (displayName.length >= NAME.length) {
      setTypingDone(true)
      const t = setTimeout(() => setShowCursor(false), 600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDisplayName(NAME.slice(0, displayName.length + 1))
    }, TYPING_INTERVAL)
    return () => clearTimeout(t)
  }, [displayName])

  useEffect(() => {
    const t = setInterval(() => {
      if (!typingDone) setShowCursor((c) => !c)
    }, CURSOR_BLINK_MS)
    return () => clearInterval(t)
  }, [typingDone])

  return (
    <section className="min-h-[85vh] flex flex-col justify-center">
      <p className="text-muted text-sm mb-4">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight min-h-[1.2em]">
        {displayName}
        {showCursor && (
          <span className="text-white animate-pulse" aria-hidden>
            |
          </span>
        )}
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-white/80 leading-tight mt-2 tracking-tight">
        Full-Stack Developer passionate about creating innovative solutions and building exceptional user experiences.
      </h2>
      <p className="max-w-xl mt-6 text-muted text-lg leading-relaxed">
        I build modern web applications and love turning complex problems into simple, beautiful, and intuitive solutions.
      </p>
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-white/25 text-white rounded text-sm hover:bg-white/5 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#"
          className="inline-block px-6 py-3 border border-white/25 text-white rounded text-sm hover:bg-white/5 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
