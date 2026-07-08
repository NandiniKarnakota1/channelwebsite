import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chapter | Sankashtahara Stotra',
  description: 'Read the sacred chapters of Sankashtahara Stotra',
}

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
