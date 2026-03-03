import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lakshay Sharma | Full-Stack Developer',
  description: 'Full-Stack Developer passionate about creating innovative solutions and building exceptional user experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans bg-void text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-void focus:rounded font-medium"
        >
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="ml-0 md:ml-[min(180px,20vw)] px-6 md:px-12 py-24 md:py-20 pt-28 md:pt-20 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  )
}
