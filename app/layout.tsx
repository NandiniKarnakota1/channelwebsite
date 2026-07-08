import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sankashtahara Devotional - Sri Guru Charithra',
  description: 'Read the complete Sri Guru Charithra with all 53 Adhyayams. Dedicated to Sri Guru Dattatreya. Watch narrated videos on our YouTube channel.',
  generator: 'v0.app',
  openGraph: {
    title: 'Sankashtahara Devotional - Sri Guru Charithra',
    description: 'Complete Sri Guru Charithra Adhyayams with devotional narration',
    url: 'https://sankashtahara.vercel.app',
    siteName: 'Sankashtahara Devotional',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: 'Sri Nrusimha Saraswati Swamy',
      },
    ],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'oklch(0.98 0.005 70)' },
    { media: '(prefers-color-scheme: dark)', color: 'oklch(0.15 0.01 33)' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
