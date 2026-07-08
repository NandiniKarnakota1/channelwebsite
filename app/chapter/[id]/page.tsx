import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChapterContent } from '@/components/ChapterContent'
import { ReadingToolbar } from '@/components/ReadingToolbar'
import { getChapterById, getAllChapters } from '@/lib/chapters'
import { getChapterContent } from '@/lib/chapters-server'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const chapters = getAllChapters()
  return chapters.map((chapter) => ({
    id: String(chapter.id),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const chapterId = parseInt(id, 10)
  const chapter = getChapterById(chapterId)

  if (!chapter) {
    return {
      title: 'Chapter Not Found',
      description: 'The requested chapter could not be found.',
    }
  }

  return {
    title: `${chapter.title} | Sankashtahara Stotra`,
    description: chapter.description,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { id } = await params
  const chapterId = parseInt(id, 10)

  if (isNaN(chapterId) || chapterId < 1 || chapterId > 53) {
    notFound()
  }

  const chapter = getChapterById(chapterId)
  if (!chapter) {
    notFound()
  }

  const content = await getChapterContent(chapterId)
  const chapters = getAllChapters()
  const prevChapter = chapterId > 1 ? chapters.find((c) => c.id === chapterId - 1) : null
  const nextChapter = chapterId < 53 ? chapters.find((c) => c.id === chapterId + 1) : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1 text-primary hover:underline">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{chapter.title}</span>
          </div>
        </div>

        {/* Reading Toolbar - Mobile */}
        <div className="md:hidden">
          <ReadingToolbar chapterId={chapterId} chapterTitle={chapter.title} />
        </div>

        {/* Chapter Content */}
        <article className="flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-24 md:pb-12">
            {/* Chapter Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{chapter.title}</h1>
              {chapter.titleTelugu && (
                <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">{chapter.titleTelugu}</h2>
              )}
              <p className="text-muted-foreground">{chapter.description}</p>
            </div>

            {/* Chapter Content */}
            <div className="mb-12">
              <ChapterContent chapterId={chapterId} content={content} />
            </div>

            {/* Chapter Navigation */}
            <div className="border-t border-border pt-8 mt-12">
              <div className="grid grid-cols-2 gap-4">
                {prevChapter ? (
                  <Link
                    href={`/chapter/${prevChapter.id}`}
                    className="flex items-center gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Previous</p>
                      <p className="font-medium text-foreground group-hover:text-primary">{prevChapter.title}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="opacity-50 pointer-events-none p-4" />
                )}

                {nextChapter ? (
                  <Link
                    href={`/chapter/${nextChapter.id}`}
                    className="flex items-center justify-end gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors group ml-auto col-span-1"
                  >
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Next</p>
                      <p className="font-medium text-foreground group-hover:text-primary">{nextChapter.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ) : (
                  <div className="opacity-50 pointer-events-none p-4 ml-auto col-span-1" />
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Reading Toolbar - Desktop */}
        <div className="hidden md:block">
          <ReadingToolbar chapterId={chapterId} chapterTitle={chapter.title} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
