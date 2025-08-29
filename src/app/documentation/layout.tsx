import Link from 'next/link'
import { ReactNode } from 'react'

interface DocLayoutProps {
  children: ReactNode
}

const navigationItems = [
  { href: '/documentation', label: 'Overview' },
  { href: '/documentation/institutional-overview', label: 'Institutional Overview' },
  { href: '/documentation/core-capabilities', label: 'Core Capabilities' },
  { href: '/documentation/research-methodologies', label: 'Research & Methodologies' },
  { href: '/documentation/ventures-portfolio', label: 'Ventures & Portfolio' },
  { href: '/documentation/engagement-model', label: 'Engagement Model' },
]

export default function DocumentationLayout({ children }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-80 min-h-screen bg-gray-950 border-r border-gray-900">
          <div className="sticky top-0 p-8">
            <Link href="/" className="block mb-12">
              <h2 className="text-xl font-light tracking-wider text-gray-100">
                THE DRAVIDOR FOUNDRY
              </h2>
              <p className="text-xs text-gray-500 mt-2 tracking-widest">DOCUMENTATION</p>
            </Link>
            
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-400 hover:text-gray-100 hover:bg-gray-900/50 transition-all duration-200 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto px-8 py-12">
          <div className="prose prose-invert prose-lg max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
