import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/Header'
import UnregisterSW from '@/components/UnregisterSW'

const lora = Lora({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lakshay Sharma',
  description: 'CS senior at UMD. Full-stack products, internal tools, and AI workflows.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${lora.variable}`}>
      <body className={`${GeistSans.className} min-h-screen bg-page text-fg antialiased`}>
        {process.env.NODE_ENV === 'development' ? <UnregisterSW /> : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-fg focus:text-page focus:rounded text-sm"
        >
          Skip to content
        </a>
        <div className="mx-auto w-full max-w-[40rem] px-6">
          <Header />
          <main id="main-content">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
