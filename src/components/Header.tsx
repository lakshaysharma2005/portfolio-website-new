import ThemeToggle from './ThemeToggle'
import { site } from '@/data/site'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-5 pt-16 pb-10">
      <a href="#" className="font-serif italic text-[22px] text-fg tracking-tight">
        {site.name}
      </a>
      <nav className="flex flex-wrap items-center justify-center gap-5 text-[13px] text-muted">
        <a href="#about" className="hover:text-fg transition-colors">
          about
        </a>
        <a href="#projects" className="hover:text-fg transition-colors">
          projects
        </a>
        <a href={site.resume} className="hover:text-fg transition-colors" download>
          resume
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
