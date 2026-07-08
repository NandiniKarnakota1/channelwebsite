# Sankashtahara Devotional - Sri Guru Charithra Reading Platform

A beautiful, premium devotional website for reading Sri Guru Charithra Adhyayams (53 chapters) in Telugu with a distraction-free reading experience. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Premium Devotional Experience**
- Divine, elegant design inspired by Indian temples
- Warm saffron (#FF9933), deep maroon, and gold color palette
- Beautiful cards and smooth animations with soft shadows
- Lotus and mandala-inspired background patterns
- Excellent Telugu Unicode font rendering

📖 **Reading Features**
- Complete 53 Adhyayams of Sri Guru Charithra
- Beautiful Telugu text rendering with proper Unicode support
- Font size controls (14px - 24px for comfortable reading)
- Reading progress bar showing scroll position
- Automatic scroll tracking across pages
- Responsive mobile-first design
- Previous/Next chapter navigation
- Sticky reading toolbar on mobile

🔖 **Personalization & Bookmarks**
- Bookmark adhyayams (stored in browser localStorage)
- Continue Reading section on homepage showing last read adhyayam
- Auto-save reading position across sessions
- Bookmarked chapters highlighted in chapter list
- Quick access to all saved adhyayams

🔍 **Discovery & Search**
- Search across all 53 adhyayams in real-time
- Browse by chapters with beautiful grid layout
- Quick navigation from homepage
- About page with dedication and copyright info

🎯 **Sharing & Integration**
- Share button with Web Share API
- Clipboard fallback for sharing chapters
- YouTube channel integration
- SEO optimized with meta tags
- Fast loading and performance optimized

## Project Structure

```
sankashtahara-devotional/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage with hero & chapter list
│   ├── globals.css             # Design system & color palette
│   ├── about/
│   │   └── page.tsx            # About page
│   └── chapter/
│       ├── layout.tsx          # Chapter page layout
│       └── [id]/page.tsx       # Dynamic chapter reading page
├── components/
│   ├── Header.tsx              # Header with navigation
│   ├── Footer.tsx              # Premium footer with mantra
│   ├── ChapterList.tsx         # Chapter browser & search
│   ├── ReadingToolbar.tsx      # Reading controls & toolbar
│   └── ChapterContent.tsx      # Content wrapper
├── lib/
│   ├── chapters.ts             # Chapter metadata & utilities
│   └── chapters-server.ts      # Server-side file loading
├── content/                    # Markdown content (USER ADDS FILES HERE)
│   ├── adhyayam-01.md          # Adhyayam 1
│   ├── adhyayam-02.md          # Adhyayam 2
│   └── ... (adhyayam-53.md)    # Up to Adhyayam 53
├── public/                     # Static assets
└── README.md                   # This file
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git (for deployment to Vercel)

### Installation

```bash
# 1. Clone or download the project
cd sankashtahara-devotional

# 2. Install dependencies
pnpm install
# or
npm install

# 3. Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Adhyayam Content

1. Create markdown files in the `content/` folder
2. Name them: `adhyayam-01.md`, `adhyayam-02.md`, ... `adhyayam-53.md`
3. Add your sacred text content (Telugu, Sanskrit, English, etc.)
4. Website automatically loads and displays all adhyayams

## Adding Adhyayam Content

### File Structure

```
content/
├── adhyayam-01.md
├── adhyayam-02.md
├── adhyayam-03.md
└── ... (up to adhyayam-53.md)
```

### Naming Convention

- **Format:** `adhyayam-NN.md` (two-digit number with leading zero)
- **Examples:** `adhyayam-01.md`, `adhyayam-02.md`, `adhyayam-53.md`
- **Important:** Use exactly two digits - `adhyayam-01.md` NOT `adhyayam-1.md`

### Creating Adhyayam Files

1. Create a new file in the `content/` directory
2. Name it as `adhyayam-01.md` (for Adhyayam 1)
3. Add your content in Markdown format

### Example Content

```markdown
## Adhyayam 1 - Title

### Subtitle in Telugu
అధ్యాయం 1

Your sacred text here...

**Sanskrit verse:**
॥ శ్రీ గురుదేవ దత్త ॥

**English translation:**
Description of the adhyayam...

- Key point 1
- Key point 2
- Key point 3

More content...
```

### Markdown Support

Full Markdown formatting available:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)
```

### Telugu & Sanskrit Text

Full Unicode support for sacred languages:

```markdown
## అధ్యాయం 1

శ్రీ గురుచరిత్ర

॥ శ్రీ గురుదేవ దత్త ॥
ॐ नमः शिवाय
```

### Content Guidelines
- Plain text works perfectly - no complex formatting needed
- Markdown formatting optional but recommended
- UTF-8 encoding automatically supported
- Keep files under 50KB per adhyayam for optimal performance

## YouTube Integration

Update the YouTube channel URL in:
- `/components/Header.tsx`
- `/components/Footer.tsx`
- `/app/page.tsx`

Replace:
```
https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX
```

With your YouTube channel URL.

## Design System

### Premium Color Palette

The website uses a devotional, temple-inspired color scheme:

- **Primary (Warm Saffron)**: `oklch(0.62 0.22 24)` - Warm orange for brand identity
- **Secondary (Gold)**: `oklch(0.72 0.2 42)` - Gold accents and gradients
- **Accent (Deep Maroon)**: `oklch(0.65 0.25 20)` - Maroon for highlights
- **Background (Cream)**: `oklch(0.98 0.004 70)` - Warm cream, easy on eyes
- **Foreground (Dark)**: `oklch(0.25 0 0)` - Dark text for readability

### Typography
- **Headers**: Modern system fonts with excellent Telugu rendering
- **Body Text**: 16px base font size, user-adjustable 14px - 24px
- **Line Height**: 1.8 for comfortable sacred text reading
- **Font Family**: Native system fonts for optimal performance

### Design Elements
- Soft shadows for depth and elegance
- Smooth animations and transitions
- Beautiful gradient backgrounds
- Responsive card layouts
- Temple-inspired patterns and decorations

## Features Documentation

### Bookmarking System
Bookmarks are stored in browser's localStorage. Users can:
- Click the bookmark button while reading
- View all bookmarks on the homepage
- Bookmarks persist across browser sessions
- Bookmarked chapters are highlighted in chapter list

### Reading Progress
- Automatically saves the last read chapter
- "Continue Reading" section appears on homepage
- Resumes from exact chapter on next visit

### Search Functionality
- Real-time search across chapter titles
- Filter chapter list as you type
- Clear button to reset search

### Font Size Controls
- Adjust between 14px and 24px
- Settings applied to current session
- Helpful for accessibility and comfort

## Deployment on Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/sankashtahara-devotional
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"
   - Site goes live automatically!

3. **Automatic Deployments**
   - Every push to main branch deploys automatically
   - Easy content updates without touching code

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 3: GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Build Configuration

**Build Command:** `pnpm build` (automatic)
**Output Directory:** `.next` (automatic)
**Environment Variables:** None required - site works out of the box!

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- **Static Generation**: All chapter pages pre-rendered at build time
- **Image Optimization**: Automatic image compression
- **Code Splitting**: Lazy loading for components
- **CSS**: Tailwind CSS with PurgeCSS for minimal bundle

## Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant text contrast ratios
- **Font Size Control**: User-adjustable text for readability

## Customization Guide

### Change Colors

Edit `/app/globals.css` to customize colors:

```css
:root {
  --primary: oklch(0.62 0.22 24);      /* Saffron */
  --secondary: oklch(0.72 0.2 42);     /* Gold */
  --accent: oklch(0.65 0.25 20);       /* Deep Maroon */
}
```

### Change Brand Name

Search and replace throughout the site:
- "Sankashtahara Devotional" → Your website name
- Update YouTube channel link in components

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Website Title',
  description: 'Your website description',
}
```

### Modify Header

Edit `components/Header.tsx` to change:
- Site title and tagline
- Navigation links
- Logo/icon

### Update Footer

Edit `components/Footer.tsx` to update:
- Mantra text (॥ శ్రీ గురుదేవ దత్త ॥)
- Description and dedication
- Copyright information
- Social media links

### Change Hero Section

Edit `app/page.tsx` - Look for the hero section:

```typescript
<p className="text-lg md:text-xl font-semibold mb-4 opacity-90">
  Your custom subtitle
</p>
```

### Update About Page

Edit `app/about/page.tsx` to customize:
- About content
- Dedication text
- Copyright disclaimer
- Additional sections

## Troubleshooting

### Chapters Not Showing
- Ensure markdown files are in the `content/` directory
- File names must be exactly `chapter-X.md` (lowercase, no spaces)
- Rebuild the site: `pnpm build`

### Bookmarks Not Working
- Bookmarks use browser localStorage
- Check browser privacy settings
- Try a different browser or private browsing mode
- Clear browser cache if issues persist

### Build Errors
- Run `pnpm install` to ensure all dependencies are installed
- Check that Node.js version is 18 or higher: `node --version`
- Try removing `node_modules` and `.next` folders, then rebuild

## Development

### Local Development Server
```bash
pnpm dev
```
Server runs at `http://localhost:3000` with hot reload.

### Production Build
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## File Storage Explanation

### localStorage vs Database
This website uses browser localStorage for bookmarks and reading progress:
- **Advantages**: No server needed, instant, works offline
- **Limitations**: Data stored per browser/device, ~5-10MB limit
- **Upgrade Path**: Can be replaced with a database (Supabase, Neon, etc.) if needed

To add a database backend:
1. Connect a database service (Supabase, Firebase, etc.)
2. Create tables for bookmarks and reading progress
3. Update `lib/chapters.ts` utility functions to use API calls
4. Implement user authentication if desired

## Technologies Used

- **Framework**: Next.js 16 (React 19.2)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Runtime**: Node.js
- **Package Manager**: pnpm
- **Deployment**: Vercel
- **Storage**: Browser localStorage

## License & Attribution

This website was created with devotion to serve devotees and spread the teachings of Sri Guru Charithra.

### Copyright & Disclaimer

The sacred text of Sri Guru Charithra is a revered spiritual scripture. This website does not claim ownership of the original scripture. The website design, formatting, presentation, and original narrated audio/video content are provided by Sankashtahara Devotional to help devotees conveniently read and listen to Sri Guru Charithra.

## Support & Help

For issues or questions:
1. Check this README carefully
2. Review example adhyayam file: `content/adhyayam-01.md`
3. Visit Vercel documentation: https://vercel.com/docs

## Troubleshooting

### Adhyayam Content Not Loading

1. Check file naming: `adhyayam-01.md` (not `adhyayam-1.md`)
2. Ensure files are in `content/` folder
3. Restart dev server: `Ctrl+C` then `pnpm dev`

### Styling Issues

1. Clear browser cache (Ctrl+Shift+Delete)
2. Check `/app/globals.css` for color definitions
3. Run `pnpm dev` again

### Deployment Issues

1. Push latest code to GitHub
2. Check Vercel deployment logs
3. Verify environment variables if needed

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Check for errors
pnpm lint
```

## Technologies Used

- **Framework**: Next.js 16 with React 19.2
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Storage**: Browser localStorage (no database)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Storage Notes

- All data uses browser localStorage (no database needed)
- Bookmarks stored locally on each device
- Reading progress saved per browser
- No user accounts required
- Works perfectly offline

## Mantra

॥ శ్రీ గురుదేవ దత్త ॥

May Sri Guru Dattatreya bless every devotee with wisdom, devotion, peace, and spiritual strength.

---

**Website:** Sankashtahara Devotional  
**Dedicated to:** Sri Guru Dattatreya and Sri Guru Charithra  
**Built with:** Next.js, TypeScript, Tailwind CSS, React  
**Deployed on:** Vercel  
**Content Format:** Markdown files in `content/` folder

Created with devotion to serve devotees and spread the teachings of Sri Guru Charithra.
