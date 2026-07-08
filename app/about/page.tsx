import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Sankashtahara Devotional',
  description: 'Learn about Sankashtahara Devotional and Sri Guru Charithra',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-primary/80 to-primary/60 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">About Sankashtahara Devotional</h1>
            <p className="text-lg text-white/90">Dedicated to Sri Guru Dattatreya and Sri Guru Charithra</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="space-y-10">
              {/* About Sankashtahara */}
              <article className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">What is Sankashtahara Devotional?</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sankashtahara Devotional is a dedicated platform for sharing the sacred teachings of Sri Guru Dattatreya through Sri Guru Charithra. We combine the power of devotional narration with accessible written content to serve devotees worldwide.
                  </p>
                </div>
              </article>

              {/* YouTube & Website Integration */}
              <article className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Serve Devotees</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">YouTube Channel</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our YouTube channel offers devotional narration of Sri Guru Charithra Adhyayams with spiritual visuals. Each video presents the sacred teachings in a meditative and reverent manner.
                    </p>
                    <a 
                      href="https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Subscribe to our YouTube channel →
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">This Website</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This website provides the complete Sri Guru Charithra in Telugu with all 53 Adhyayams. Devotees can read at their own pace, bookmark favorite sections, and enjoy a peaceful, distraction-free reading experience.
                    </p>
                    <a 
                      href="/#adhyayams"
                      className="text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Start reading now →
                    </a>
                  </div>
                </div>
              </article>

              {/* Purpose & Mission */}
              <article className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sri Guru Charithra is one of the most revered spiritual texts in Hindu devotional literature. It contains profound teachings about devotion, wisdom, and the path to spiritual liberation through Sri Guru Dattatreya.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sankashtahara Devotional exists to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Preserve and share the sacred teachings of Sri Guru Charithra</li>
                    <li>Make the divine knowledge easily accessible to all devotees</li>
                    <li>Support spiritual growth through both visual narration and written study</li>
                    <li>Create a community where devotees can read, reflect, and practice</li>
                    <li>Honor Sri Guru Dattatreya and the eternal wisdom He represents</li>
                  </ul>
                </div>
              </article>

              {/* Dedication */}
              <article className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Dedication</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This website is lovingly dedicated to the lotus feet of Sri Nrusimha Saraswati Swamy, the second incarnation of Lord Dattatreya.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It has been created with the humble intention of serving devotees and spreading devotion through the teachings of Sri Guru Charithra.
                  </p>
                  <p className="text-foreground font-semibold italic">
                    May Sri Guru's grace guide all who visit this website.
                  </p>
                </div>
              </article>

              {/* Sri Guru Charithra */}
              <article className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Sri Guru Charithra</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sri Guru Charithra is a sacred spiritual scripture consisting of 53 Adhyayams (chapters) that narrates the divine life and teachings of Sri Guru Dattatreya. It is a treasure of wisdom that guides devotees on the spiritual path.
                </p>
              </article>

              {/* YouTube Channel */}
              <article className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">YouTube Channel</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Visit our YouTube channel &quot;Sankashtahara Devotional&quot; to watch beautifully narrated Sri Guru Charithra Adhyayams with devotional visuals.
                </p>
                <a
                  href="https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  🎥 Visit YouTube Channel
                </a>
              </article>

              {/* Copyright & Disclaimer */}
              <article className="bg-muted/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Copyright & Disclaimer</h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    The sacred text of Sri Guru Charithra is a revered spiritual scripture.
                  </p>
                  <p>
                    This website does not claim ownership of the original scripture. The website design, formatting, presentation, and original narrated audio/video content are provided by Sankashtahara Devotional to help devotees conveniently read and listen to Sri Guru Charithra.
                  </p>
                  <p className="font-semibold text-foreground">
                    May the blessings of Sri Guru Dattatreya be upon all.
                  </p>
                </div>
              </article>
            </div>

            {/* Footer Mantra */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <p className="text-xl font-semibold text-primary">॥ శ్రీ గురుదేవ దత్త ॥</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
