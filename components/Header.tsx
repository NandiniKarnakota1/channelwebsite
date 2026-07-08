import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border border-primary/20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Sri Nrusimha Saraswati Swamy"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Sankashtahara</h1>
              <p className="text-xs text-muted-foreground">Devotional</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/#adhyayams" className="text-foreground hover:text-primary font-medium transition-colors">
              Adhyayams
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
