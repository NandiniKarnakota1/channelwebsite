import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mail, Heart } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
              <p className="text-lg text-white/90">Get in touch with Sankashtahara Devotional</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Offering Message */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg shadow-lg p-8 md:p-10 mb-10 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">A Humble Offering</h2>
                  <p className="text-base text-primary/90 leading-relaxed mb-4 font-medium">
                    This website has been created as a humble offering at the lotus feet of Sri Guru. If you have any suggestions, notice any errors, or wish to share your thoughts, please feel free to write to us.
                  </p>
                  <p className="text-base text-primary/90 leading-relaxed mb-4 font-medium">
                    Your guidance is deeply valued and will help us serve devotees better.
                  </p>
                  <p className="text-primary font-semibold mt-6 text-center">
                    With the blessings of Sri Guru Dattatreya.
                  </p>
                  <p className="text-center text-lg font-semibold text-primary mt-2">
                    ॥ శ్రీ గురుదేవ దత్త ॥
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/50 rounded-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">Reach out to us with your feedback and suggestions</p>
                    <a 
                      href="mailto:devotionalsankashtahara@gmail.com"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      devotionalsankashtahara@gmail.com
                    </a>
                  </div>
                </div>

                {/* YouTube */}
                <div className="flex items-start gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎥</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">YouTube Channel</h3>
                    <p className="text-muted-foreground mb-2">Watch narrated videos of Sri Guru Charithra</p>
                    <a 
                      href="https://youtube.com/@sankashtaharadevotional?si=Nw28VtIBfjLta_TX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Visit our YouTube Channel →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-10 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Ways You Can Help</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Share your feedback on content quality and suggestions for improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Report any errors or formatting issues you find while reading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Suggest improvements to the website design or functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Share your spiritual insights and experiences related to Sri Guru Charithra</span>
                </li>
              </ul>
            </div>

            {/* Closing Message */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground leading-relaxed">
                Thank you for being part of the Sankashtahara Devotional community. Your devotion and support inspire us to continue serving with dedication.
              </p>
              <p className="text-primary font-semibold mt-6">
                May the blessings of Sri Guru Dattatreya be upon all.
              </p>
              <Link 
                href="/"
                className="inline-block mt-8 px-6 py-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
