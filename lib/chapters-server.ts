import { promises as fs } from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function getChapterContent(id: number): Promise<string> {
  try {
    const paddedId = String(id).padStart(2, '0')
    const filePath = path.join(CONTENT_DIR, `adhyayam-${paddedId}.md`)
    try {
      return await fs.readFile(filePath, 'utf-8')
    } catch (error) {
      // File doesn't exist, return placeholder
      return `# Adhyayam ${id}\n\nThis adhyayam is coming soon. Please add content to \`content/adhyayam-${paddedId}.md\``
    }
  } catch (error) {
    console.error(`Error loading adhyayam ${id}:`, error)
    return `# Error Loading Adhyayam\n\nThere was an error loading this adhyayam. Please try again later.`
  }
}
