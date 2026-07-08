'use client'

import { useEffect } from 'react'
import { setCurrentReading } from '@/lib/chapters'

interface ChapterContentProps {
  chapterId: number
  content: string
}

export function ChapterContent({ chapterId, content }: ChapterContentProps) {
  useEffect(() => {
    // Track current reading position
    setCurrentReading(chapterId)
  }, [chapterId])

  return (
    <div
      className="reading-content text-foreground leading-relaxed whitespace-pre-wrap"
      style={{ fontSize: '16px', lineHeight: '1.8' }}
    >
      {content}
    </div>
  )
}
