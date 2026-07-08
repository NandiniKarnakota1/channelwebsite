export interface Chapter {
  id: number
  title: string
  titleTelugu?: string
  description: string
  slug: string
}

// Generate chapter metadata (53 adhyayams)
export function getAllChapters(): Chapter[] {
  const chapters: Chapter[] = []
  for (let i = 1; i <= 53; i++) {
    const paddedId = String(i).padStart(2, '0')
    chapters.push({
      id: i,
      title: `Adhyayam ${i}`,
      titleTelugu: `అధ్యాయం ${i}`,
      description: `Adhyayam ${i} of Sri Guru Charithra`,
      slug: `adhyayam-${paddedId}`,
    })
  }
  return chapters
}

export function getChapterById(id: number): Chapter | undefined {
  const chapters = getAllChapters()
  return chapters.find((c) => c.id === id)
}

// Bookmark utilities (client-side only)
export function getBookmarks(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem('sankashtahara-bookmarks')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function addBookmark(chapterId: number): void {
  if (typeof window === 'undefined') return
  const bookmarks = getBookmarks()
  if (!bookmarks.includes(chapterId)) {
    bookmarks.push(chapterId)
    localStorage.setItem('sankashtahara-bookmarks', JSON.stringify(bookmarks))
  }
}

export function removeBookmark(chapterId: number): void {
  if (typeof window === 'undefined') return
  const bookmarks = getBookmarks().filter((id) => id !== chapterId)
  localStorage.setItem('sankashtahara-bookmarks', JSON.stringify(bookmarks))
}

export function isBookmarked(chapterId: number): boolean {
  return getBookmarks().includes(chapterId)
}

// Current reading position (client-side only)
export function getCurrentReading(): number {
  if (typeof window === 'undefined') return 1
  try {
    return parseInt(localStorage.getItem('sankashtahara-current') || '1', 10)
  } catch {
    return 1
  }
}

export function setCurrentReading(chapterId: number): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('sankashtahara-current', String(chapterId))
}
