'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/lakshaysharma2005', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/lakshaysharma2005/', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'Twitter' },
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-6 py-4 bg-void/95 backdrop-blur border-b border-border">
        <Link href="#" className="text-white font-sans text-sm font-medium">
          LS
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-muted hover:text-white transition-colors"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-void pt-16 px-6">
          <nav className="flex flex-col gap-2 py-8" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-white/90 text-lg hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 pt-8">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-[min(180px,20vw)] hidden md:flex flex-col py-24 pl-8">
        <nav className="flex flex-col gap-0" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="side-link">
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors text-sm"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}
