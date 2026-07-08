'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChapterList } from '@/components/ChapterList'
import { getCurrentReading, getBookmarks, getAllChapters } from '@/lib/chapters'
import { BookOpen, Bookmark } from 'lucide-react'

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState<number | null>(null)
  const [bookmarks, setBookmarks] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentChapter(getCurrentReading())
    setBookmarks(getBookmarks())
  }, [])

  const chapters = getAllChapters()
  const currentChapterData = currentChapter ? chapters.find((c) => c.id === currentChapter) : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-20 md:py-32 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold mb-6 opacity-90">స్వాగతం - Welcome</p>
              
              {/* Logo Image */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
                  <Image
                    src="/logo.png"
                    alt="Sri Nrusimha Saraswati Swamy"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance leading-tight">
                శ్రీ గురుచరిత్ర
              </h1>
              <p className="text-xl md:text-2xl mb-3 text-white/95">Presented by Sankashtahara Devotional</p>
              
              <div className="max-w-3xl mx-auto mt-8 mb-10 space-y-4 text-white/90">
                <p className="text-lg leading-relaxed">
                  Welcome to Sankashtahara Devotional.
                </p>
                <p className="text-base leading-relaxed">
                  Our YouTube channel offers devotional narration and visual presentations of Sri Guru Charithra in Telugu.
                </p>
                <p className="text-base leading-relaxed">
                  This website allows devotees to read the complete Sri Guru Charithra consisting of all 53 Adhyayams in a clean and peaceful reading experience.
                </p>
                <p className="text-sm italic mt-6">
                  May Sri Guru Dattatreya bless every devotee.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link
                  href="/#adhyayams"
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/95 transition-colors shadow-lg"
                >
                  📖 Start Reading
                </Link>
                <a
                  href="https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-accent/80 text-white font-semibold rounded-lg hover:bg-accent transition-colors shadow-lg"
                >
                  🎥 Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Reading Section */}
        {mounted && currentChapterData && (
          <section className="bg-white border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Continue Reading</h2>
              </div>
              <Link
                href={`/chapter/${currentChapter}`}
                className="block p-6 rounded-lg border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Where you left off</p>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80">
                      {currentChapterData.title}
                    </h3>
                    {currentChapterData.titleTelugu && (
                      <p className="text-lg text-muted-foreground mt-1">{currentChapterData.titleTelugu}</p>
                    )}
                  </div>
                  <div className="hidden sm:block text-4xl text-primary/20 group-hover:text-primary/30 transition-colors">
                    →
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Bookmarks Section */}
        {mounted && bookmarks.length > 0 && (
          <section className="bg-muted/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <div className="flex items-center gap-3 mb-6">
                <Bookmark className="w-6 h-6 text-primary fill-primary" />
                <h2 className="text-2xl font-bold text-foreground">Your Bookmarks</h2>
                <span className="ml-auto text-muted-foreground text-sm">{bookmarks.length} saved</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookmarks.map((bookmarkId) => {
                  const chapter = chapters.find((c) => c.id === bookmarkId)
                  if (!chapter) return null
                  return (
                    <Link
                      key={bookmarkId}
                      href={`/chapter/${bookmarkId}`}
                      className="p-4 rounded-lg border border-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-foreground">{chapter.title}</h4>
                          {chapter.titleTelugu && (
                            <p className="text-sm text-muted-foreground">{chapter.titleTelugu}</p>
                          )}
                        </div>
                        <Bookmark className="w-4 h-4 fill-primary text-primary flex-shrink-0" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Adhyayams Section */}
        <section id="adhyayams" className="bg-background py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">అధ్యాయాలను అన్వేషించండి</h2>
              <p className="text-muted-foreground">Browse and search through all 53 Adhyayams of Sri Guru Charithra</p>
            </div>
            {mounted && <ChapterList highlightBookmarked bookmarkedIds={bookmarks} />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
