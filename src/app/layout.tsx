import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"
import Navigation from "@/components/navigation"
import NewsletterSection from "@/components/newsletter-section"
import Link from "next/link"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "The Dravidor Foundry | Engineering Tomorrow's Paradigms",
  description: "The R&D powerhouse behind market-disrupting businesses. We architect possibility at the intersection where theoretical brilliance meets practical application.",
  keywords: "XanderAI, InitDev, Systema, Animalia, XerxesAGI, Inflio, technology commercialization, quantum computing, synthetic biology",
  authors: [{ name: "The Dravidor Foundry" }],
  openGraph: {
    title: "The Dravidor Foundry",
    description: "The R&D Powerhouse Behind Market-Disrupting Businesses",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-black text-white antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Newsletter Section */}
        <NewsletterSection />
        
        {/* Proper Footer */}
        <footer className="bg-black">
          <div className="container mx-auto px-6 py-20">
            {/* Top Section */}
            <div className="grid md:grid-cols-5 gap-12 mb-16">
              {/* Brand */}
              <div className="md:col-span-2">
                <Image 
                  src="/thedravidorfoundry.png"
                  alt="The Dravidor Foundry"
                  width={320}
                  height={80}
                  className="h-16 w-auto mb-6 opacity-80"
                />
                <p className="text-sm text-gray-500 max-w-sm">
                  The R&D powerhouse behind market-disrupting businesses. 
                  Engineering tomorrow&apos;s paradigms at the intersection of 
                  theoretical brilliance and practical application.
                </p>
              </div>
              
              {/* Explore */}
              <div>
                <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider mb-6">Explore</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/institute" className="text-sm text-gray-600 hover:text-white transition-colors">
                      Institute
                    </Link>
                  </li>
                  <li>
                    <Link href="/ventures" className="text-sm text-gray-600 hover:text-white transition-colors">
                      Ventures
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className="text-sm text-gray-600 hover:text-white transition-colors">
                      Research
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider mb-6">Connect</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/capabilities" className="text-sm text-gray-600 hover:text-white transition-colors">
                      Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link href="/engagement" className="text-sm text-gray-600 hover:text-white transition-colors">
                      Engagement
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Ventures */}
              <div>
                <h4 className="text-sm font-light text-gray-400 uppercase tracking-wider mb-6">Ventures</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>XanderAI</li>
                  <li>InitDev</li>
                  <li>Systema</li>
                  <li>Animalia</li>
                  <li>XerxesAGI</li>
                  <li>Inflio</li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="pt-8 border-t border-gray-900">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs text-gray-700">
                  © {new Date().getFullYear()} The Dravidor Foundry. All rights reserved.
                </p>
                <div className="flex items-center space-x-8 mt-4 md:mt-0">
                  <p className="text-xs text-gray-700">
                    Engineering Tomorrow&apos;s Paradigms
                  </p>
                  <p className="text-xs text-gray-700">
                    For the collective good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}