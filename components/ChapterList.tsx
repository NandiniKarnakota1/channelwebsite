'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllChapters } from '@/lib/chapters'
import { Bookmark } from 'lucide-react'

interface ChapterListProps {
  highlightBookmarked?: boolean
  bookmarkedIds?: number[]
}

export function ChapterList({ highlightBookmarked = false, bookmarkedIds = [] }: ChapterListProps) {
  const chapters = getAllChapters()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredChapters = useMemo(() => {
    if (!searchQuery) return chapters
    const query = searchQuery.toLowerCase()
    return chapters.filter((ch) => ch.title.toLowerCase().includes(query) || ch.slug.includes(query))
  }, [searchQuery])

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="search"
          placeholder="Search chapters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.map((chapter) => {
          const isBookmarked = bookmarkedIds.includes(chapter.id)
          return (
            <Link
              key={chapter.id}
              href={`/chapter/${chapter.id}`}
              className={`group p-4 rounded-lg border transition-all hover:shadow-md ${
                isBookmarked && highlightBookmarked
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {chapter.title}
                  </h3>
                  {chapter.titleTelugu && (
                    <p className="text-sm text-muted-foreground">{chapter.titleTelugu}</p>
                  )}
                </div>
                {isBookmarked && (
                  <Bookmark className="w-4 h-4 fill-primary text-primary flex-shrink-0 ml-2" />
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{chapter.description}</p>
            </Link>
          )
        })}
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-2">No chapters found matching "{searchQuery}"</p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-primary hover:underline font-medium"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}
