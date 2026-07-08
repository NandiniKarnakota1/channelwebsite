import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted/50 mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mantra */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-primary mb-2">॥ శ్రీ గురుదేవ దత్త ॥</p>
          <p className="text-base font-semibold text-foreground">Sankashtahara Devotional</p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Created with devotion to serve devotees and spread the teachings of Sri Guru Charithra.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#adhyayams" className="text-muted-foreground hover:text-primary transition-colors">All Adhyayams</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">YouTube Channel</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About the Text</a></li>
              <li><a href="mailto:devotionalsankashtahara@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Email:
              </p>
              <a 
                href="mailto:devotionalsankashtahara@gmail.com"
                className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors block break-all"
              >
                devotionalsankashtahara@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="max-w-4xl mx-auto mb-6">
            <h4 className="font-semibold text-foreground text-sm mb-3">Copyright & Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The sacred text of Sri Guru Charithra is a revered spiritual scripture. This website does not claim ownership of the original scripture. The website design, formatting, presentation, and original narrated audio/video content are provided by Sankashtahara Devotional to help devotees conveniently read and listen to Sri Guru Charithra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground pt-6">
            <p>&copy; 2024 Sankashtahara Devotional. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Created with devotion to serve devotees</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
