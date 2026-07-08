'use client'

import { useState, useEffect } from 'react'
import { Bookmark, Share2, Copy, Check } from 'lucide-react'
import { isBookmarked, addBookmark, removeBookmark } from '@/lib/chapters'

interface ReadingToolbarProps {
  chapterId: number
  chapterTitle: string
  totalChapters?: number
}

export function ReadingToolbar({ chapterId, chapterTitle, totalChapters = 53 }: ReadingToolbarProps) {
  const [bookmarked, setBookmarked] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    setBookmarked(isBookmarked(chapterId))
  }, [chapterId])

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(chapterId)
    } else {
      addBookmark(chapterId)
    }
    setBookmarked(!bookmarked)
  }

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const shareText = `Read ${chapterTitle} from Sri Guru Charithra on Sankashtahara Devotional`

    if (navigator.share && typeof window !== 'undefined') {
      try {
        await navigator.share({
          title: chapterTitle,
          text: shareText,
          url,
        })
      } catch (error) {
        // User cancelled share
      }
    } else {
      // Fallback to copy to clipboard
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('Failed to copy:', error)
      }
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:static bg-white border-t border-border shadow-lg md:shadow-none md:bg-transparent md:border-0">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between md:justify-start md:gap-6 md:py-6">
        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all ${
            bookmarked
              ? 'bg-primary text-white'
              : 'bg-muted text-foreground hover:bg-primary/10'
          }`}
          title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
          <span className="hidden sm:inline">{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>

        {/* Font Size Controls */}
        <div className="hidden md:flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
          <button
            onClick={() => setFontSize(Math.max(14, fontSize - 2))}
            className="px-2 py-1 text-sm font-medium text-foreground hover:bg-border rounded transition-colors"
          >
            A−
          </button>
          <span className="text-xs text-muted-foreground min-w-8 text-center">{fontSize}px</span>
          <button
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            className="px-2 py-1 text-sm font-medium text-foreground hover:bg-border rounded transition-colors"
          >
            A+
          </button>
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium bg-muted text-foreground hover:bg-primary/10 transition-all ml-auto md:ml-0"
          title="Share chapter"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </>
          )}
        </button>

        {/* Mobile Font Size */}
        <div className="md:hidden flex items-center gap-1 bg-muted px-2 py-1.5 rounded-lg">
          <button
            onClick={() => setFontSize(Math.max(14, fontSize - 2))}
            className="px-1.5 py-0.5 text-xs font-medium text-foreground hover:bg-border rounded transition-colors"
          >
            A−
          </button>
          <button
            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
            className="px-1.5 py-0.5 text-xs font-medium text-foreground hover:bg-border rounded transition-colors"
          >
            A+
          </button>
        </div>
      </div>

        {/* Font size style */}
        <style>{`
          .reading-content {
            font-size: ${fontSize}px;
          }
        `}</style>
      </div>
    </>
  )
}
