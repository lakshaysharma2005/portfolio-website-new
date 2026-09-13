'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const next = stored === 'light'
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    document.documentElement.classList.toggle('dark', !next)
  }, [])

  function toggle() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    document.documentElement.classList.toggle('dark', !next)
    window.localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-[13px] text-muted hover:text-fg transition-colors"
    >
      {light ? 'dark' : 'light'}
    </button>
  )
}
